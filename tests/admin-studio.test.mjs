import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { handler } from '../netlify/functions/admin-studio.mjs';

process.env.ADMIN_SECRET = 'test-secret';
process.env.GITHUB_TOKEN = 'test-token';
process.env.TAVILY_API_KEY = 'test-tavily';
process.env.GROQ_API_KEY = 'test-groq';
const call = async (action, payload = {}, adminSecret = 'test-secret') => {
  const res = await handler({ httpMethod: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ adminSecret, action, payload }) });
  return { status: res.statusCode, body: JSON.parse(res.body) };
};
const tip = { id: 'test-studio-protocol', title: 'Test', icon: 'activity', category: 'Sleep', goals: ['fitness'], minutes: 2, summary: 'Summary', why: ['Why'], steps: ['Step'], mistakes: ['Mistake'], progression: ['Progress'], safety: ['Educational only'], keywords: ['test'], refs: ['Source — https://example.org/study'] };

test('authentication, research sources, publication and duplicate protection', async () => {
  assert.equal((await call('unlock', {}, 'wrong')).status, 401);
  assert.equal((await call('unlock')).status, 200);
  const originalFetch = globalThis.fetch;
  let saved = '';
  globalThis.fetch = async (url, options = {}) => {
    if (url.includes('tavily')) return Response.json({ results: [{ title: 'Real source', url: 'https://example.org/study', content: 'Research' }] });
    if (url.includes('groq')) return Response.json({ choices: [{ message: { content: JSON.stringify({ ...tip, refs: ['Fake — https://fake.example'] }) } }] });
    if (options.method === 'PUT') {
      const request = JSON.parse(options.body);
      assert.equal(request.sha, 'current-sha');
      saved = Buffer.from(request.content, 'base64').toString();
      return Response.json({ commit: { html_url: 'https://github.com/example/commit/123' } });
    }
    const name = new URL(url).pathname.split('/').pop();
    const content = name === 'tips-recovery-sleep.ts' && saved ? saved : await readFile(`src/lib/${name}`, 'utf8');
    return Response.json({ sha: 'current-sha', encoding: 'base64', content: Buffer.from(content).toString('base64') });
  };
  try {
    const generated = await call('research_and_draft', { topic: 'Sleep', category: 'Sleep' });
    assert.equal(generated.status, 200);
    assert.deepEqual(generated.body.draft.refs, ['Real source — https://example.org/study']);
    const published = await call('publish_protocol', { draft: tip });
    assert.equal(published.status, 200);
    assert.equal(published.body.filePath, 'src/lib/tips-recovery-sleep.ts');
    assert.ok(saved.indexOf('"test-studio-protocol"') > saved.indexOf('export const SLEEP_TIPS'));
    assert.equal((await call('publish_protocol', { draft: tip })).status, 409);
    assert.equal((await call('publish_protocol', { draft: { ...tip, category: '../bad' } })).status, 400);
  } finally { globalThis.fetch = originalFetch; }
});
