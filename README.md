# PRIMEFORM

The Protocol Library — 149 evidence-based tips across training, nutrition, recovery, sleep, form, posture, looks, supplements, cardio, fat loss and mindset. Free, ad-free, reader-powered.

Stack: React + Vite + Tailwind v4 (single-file build).

## Development

Run `npm install` and `npm run build`. The build also generates the static protocol pages and sitemap. Netlify Functions are configured in `netlify.toml` and run on Netlify (or via Netlify CLI), not the Vite development server alone.

## Admin Protocol Studio

Open Help & Requests and click its header five times, or press Ctrl+Shift+A while it is open. Enter the admin secret to unlock. The secret remains only in the panel's memory until it is closed or locked; every operation is independently authorized by the function. Review all generated content, citations and safety guidance before publishing. The category selects the existing category file, which is already included by `tips.ts` in both the app and static page generator. A successful commit deploys automatically if Netlify is configured to deploy the target branch.

Set these environment variables in Netlify's **Functions runtime scope**, not as `VITE_` variables:

- `ADMIN_SECRET`: a long, randomly generated secret for access to the function.
- `TAVILY_API_KEY`: Tavily search API key.
- `GROQ_API_KEY`: Groq API key.
- `GITHUB_TOKEN`: GitHub token with contents read/write access to the target repository and permission to commit to its target branch. Branch protection may prevent direct commits.
- Optional `GITHUB_REPO` (default `RyuuChop/primeform`) and `GITHUB_BRANCH` (default `main`). Configure the Netlify production branch to match if automatic production deployment is desired.

`VITE_PATREON_URL` is an optional **build-time, public** setting for the support URL; its default is `https://patreon.com/RyuuDen`. Trailing slashes are stripped in the app and static page generator. Never put credentials in `VITE_` variables. Redeploy after changing build-time settings.

The hidden trigger is not a security boundary: the function endpoint is public and protected by the secret on every request. Use a strong secret, HTTPS, appropriate Netlify access controls/rate limiting, and rotate the secret if exposed. API calls and publishing can incur usage charges. Verify source relevance and editorial claims manually; search results are not a substitute for expert review.
