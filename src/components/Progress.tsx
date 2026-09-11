import { useMemo } from "react";
import { Activity, CalendarCheck2, ChartNoAxesColumn, Dumbbell, Flame, Footprints, TrendingUp, Zap } from "lucide-react";
import {
  Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Line, LineChart,
  Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";
import type { UserData } from "../lib/types";
import {
  bestSet, categorySplit, consistencyGrid, cumulativeXp, dateKey, last7Days,
  levelFromXp, levelTitle, progressionSeries, sessionsThisWeek, shiftKey,
  totalVolume, trainedDays, trendPct, weeklyVolume,
} from "../lib/engine";
import { Card, EmptyState, SectionHeader, TrendBadge } from "../ui";

const ttStyle = {
  contentStyle: {
    background: "#1b1b21", border: "1px solid #34343d", borderRadius: 10,
    fontSize: 12, fontFamily: "JetBrains Mono", color: "#f4f4f2",
  },
  labelStyle: { color: "#a3a3ad", fontSize: 11, marginBottom: 4 },
  itemStyle: { color: "#f4f4f2" },
};

export default function Progress({ data }: { data: UserData }) {
  const today = dateKey();
  const hasData = data.completions.length > 0;

  const kpis = useMemo(() => {
    const wk = weeklyVolume(data, today);
    const prevWk = weeklyVolume(data, shiftKey(today, -7));
    const sessions = sessionsThisWeek(data, today);
    const prevSessions = sessionsThisWeek(data, shiftKey(today, -7));
    const lv = levelFromXp(data.xp);
    return {
      wk, volTrend: trendPct(wk, prevWk),
      sessions, sessTrend: trendPct(sessions, prevSessions),
      lv,
      streakTrend: trendPct(data.streak, Math.max(0, data.streak - Math.min(data.streak, 7))),
      total: totalVolume(data), days: trainedDays(data),
    };
  }, [data, today]);

  const weekData = useMemo(() => last7Days(data), [data]);
  const xpData = useMemo(() => cumulativeXp(data, 14), [data]);
  const strengthIds = useMemo(() => {
    const counts = new Map<string, number>();
    data.completions.forEach((c) => counts.set(c.exerciseId, (counts.get(c.exerciseId) ?? 0) + 1));
    const ranked = [...counts.entries()].filter(([id]) => id !== "plank" && id !== "deadhang").sort((a, b) => b[1] - a[1]).slice(0, 3).map(([id]) => id);
    return ranked.length ? ranked : ["pushup", "squat"];
  }, [data]);
  const strengthData = useMemo(() => progressionSeries(data, strengthIds, 14), [data, strengthIds]);
  const split = useMemo(() => categorySplit(data), [data]);
  const grid = useMemo(() => consistencyGrid(data, 7), [data]);

  const strengthColors = ["#ef4444", "#3b82f6", "#22c55e"];

  return (
    <div className="space-y-6">
      {/* ── KPI cards with trends ── */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {[
          {
            label: "7-Day Volume", value: kpis.wk.toLocaleString(), unit: "reps",
            icon: <ChartNoAxesColumn size={17} className="text-blood-2" />, trend: kpis.volTrend,
            note: "vs prior week",
          },
          {
            label: "Sessions / 7d", value: String(kpis.sessions), unit: "days",
            icon: <CalendarCheck2 size={17} className="text-emerald-400" />, trend: kpis.sessTrend,
            note: "vs prior week",
          },
          {
            label: "Streak", value: String(data.streak), unit: "days",
            icon: <Flame size={17} className="text-ember" />, trend: kpis.streakTrend,
            note: "consecutive days",
          },
          {
            label: "Level", value: String(kpis.lv.level), unit: levelTitle(kpis.lv.level),
            icon: <Zap size={17} className="text-gold" />,
            trend: { pct: Math.round((kpis.lv.into / kpis.lv.next) * 100), dir: "up" as const },
            note: `${kpis.lv.into}/${kpis.lv.next} XP · progress to next`,
          },
        ].map((k, i) => (
          <Card key={k.label} className="anim-rise p-4 sm:p-5" style={{ animationDelay: `${0.05 * i}s` }}>
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-faint">{k.label}</span>
              {k.icon}
            </div>
            <div className="mt-2.5 flex items-baseline gap-1.5">
              <span className="font-mono text-2xl sm:text-3xl font-bold tracking-tight">{k.value}</span>
              <span className="text-[11px] font-mono uppercase text-faint truncate max-w-[90px]">{k.unit}</span>
            </div>
            <div className="mt-2.5 flex items-center gap-2">
              <TrendBadge trend={k.trend} />
              <span className="text-[10px] text-faint hidden sm:inline">{k.note}</span>
            </div>
          </Card>
        ))}
      </div>

      {!hasData ? (
        <EmptyState
          icon={<Footprints size={34} />}
          title="No data yet — today is day zero"
          sub="Complete a challenge on the Today tab and every chart on this page lights up instantly. Your data is saved to your account permanently."
        />
      ) : (
        <>
          {/* ── Weekly volume bars ── */}
          <Card className="anim-rise p-5 sm:p-6">
            <SectionHeader title="Weekly Output" sub="Total prescribed reps+seconds logged per day" />
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weekData} margin={{ top: 6, right: 6, left: -18, bottom: 0 }}>
                  <CartesianGrid vertical={false} stroke="#26262d" strokeDasharray="3 6" />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} dy={6} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip {...ttStyle} cursor={{ fill: "rgba(255,255,255,0.03)" }} />
                  <Bar dataKey="volume" name="Volume" radius={[5, 5, 0, 0]} maxBarSize={34} isAnimationActive>
                    {weekData.map((d, i) => (
                      <Cell key={i} fill={d.volume > 0 ? "#e11d2e" : "#26262d"} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <div className="grid gap-4 lg:grid-cols-5">
            {/* ── XP line ── */}
            <Card className="anim-rise p-5 sm:p-6 lg:col-span-3">
              <SectionHeader title="XP Trajectory" sub="Cumulative experience — last 14 days" />
              <div className="h-52">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={xpData} margin={{ top: 6, right: 6, left: -18, bottom: 0 }}>
                    <defs>
                      <linearGradient id="xpgrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#e11d2e" stopOpacity={0.35} />
                        <stop offset="100%" stopColor="#e11d2e" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid vertical={false} stroke="#26262d" strokeDasharray="3 6" />
                    <XAxis dataKey="date" axisLine={false} tickLine={false} dy={6} interval="preserveStartEnd" />
                    <YAxis axisLine={false} tickLine={false} width={46} />
                    <Tooltip {...ttStyle} />
                    <Area type="monotone" dataKey="xp" name="Total XP" stroke="#e11d2e" strokeWidth={2.4}
                      fill="url(#xpgrad)" dot={false} activeDot={{ r: 4, fill: "#ff3b47", stroke: "#0a0a0c" }} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Card>

            {/* ── Donut split ── */}
            <Card className="anim-rise p-5 sm:p-6 lg:col-span-2">
              <SectionHeader title="Volume Split" sub="By muscle category" />
              {split.length ? (
                <div className="flex h-52 items-center">
                  <ResponsiveContainer width="55%" height="100%">
                    <PieChart>
                      <Pie data={split} dataKey="value" nameKey="name" innerRadius="58%" outerRadius="88%"
                        paddingAngle={3} strokeWidth={0} isAnimationActive>
                        {split.map((s, i) => <Cell key={i} fill={s.color} />)}
                      </Pie>
                      <Tooltip {...ttStyle} />
                    </PieChart>
                  </ResponsiveContainer>
                  <ul className="flex-1 space-y-1.5">
                    {split.slice(0, 6).map((s) => (
                      <li key={s.name} className="flex items-center gap-2 text-xs">
                        <span className="h-2.5 w-2.5 rounded-sm" style={{ background: s.color }} />
                        <span className="text-muted flex-1">{s.name}</span>
                        <span className="font-mono text-fg">{s.value.toLocaleString()}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="py-14 text-center text-xs text-faint font-mono">Log workouts to build the split.</p>
              )}
            </Card>
          </div>

          {/* ── Strength progression ── */}
          <Card className="anim-rise p-5 sm:p-6">
            <SectionHeader
              title="Strength Progression"
              sub={`Prescribed reps per movement, last 14 days — watch the overload steps climb`}
            />
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={strengthData} margin={{ top: 6, right: 6, left: -18, bottom: 0 }}>
                  <CartesianGrid vertical={false} stroke="#26262d" strokeDasharray="3 6" />
                  <XAxis dataKey="date" axisLine={false} tickLine={false} dy={6} interval="preserveStartEnd" />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip {...ttStyle} />
                  {strengthIds.map((id, i) => (
                    <Line key={id} type="monotone" dataKey={id} name={id}
                      stroke={strengthColors[i % strengthColors.length]} strokeWidth={2.4}
                      dot={{ r: 2.5, strokeWidth: 0 }} connectNulls
                      activeDot={{ r: 4.5, stroke: "#0a0a0c" }} />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
              {["pushup", "pullup", "squat", "plank"].map((id) => {
                const b = bestSet(data, id);
                return (
                  <div key={id} className="rounded-lg border border-line bg-ink-2 px-3 py-2.5">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-faint">Best {id === "plank" ? "plank (s)" : id}</p>
                    <p className="font-mono text-lg font-bold flex items-center gap-1.5">
                      <TrendingUp size={13} className={b > 0 ? "text-emerald-400" : "text-faint"} />
                      {b > 0 ? b : "—"}
                    </p>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* ── Consistency grid ── */}
          <Card className="anim-rise p-5 sm:p-6">
            <SectionHeader title="Consistency Map" sub="Last 7 weeks — red cells are days you showed up" />
            <div className="flex gap-1.5 overflow-x-auto pb-1">
              {grid.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-1.5">
                  {week.map((cell) => (
                    <div key={cell.key} title={`${cell.key}${cell.on ? ` — ${cell.count} challenges` : ""}`}
                      className="h-5 w-5 rounded-[5px] border transition-all duration-200 hover:scale-110"
                      style={{
                        background: cell.on ? `rgba(225,29,46,${Math.min(1, 0.45 + cell.count * 0.18)})` : "#1b1b21",
                        borderColor: cell.key === today ? "#ff3b47" : "#26262d",
                      }} />
                  ))}
                </div>
              ))}
              <div className="ml-3 flex flex-col justify-center gap-1 text-[10px] font-mono text-faint">
                <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-blood" /> trained</span>
                <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-panel-2 border border-line" /> off day</span>
              </div>
            </div>
            <p className="mt-4 flex items-center gap-1.5 text-xs text-faint">
              <Activity size={13} className="text-emerald-400" />
              Lifetime: <span className="text-fg font-semibold">{kpis.days} training days</span> ·
              <Dumbbell size={13} className="text-blood-2 ml-1" />
              <span className="text-fg font-semibold">{kpis.total.toLocaleString()} total volume</span> logged under your account.
            </p>
          </Card>
        </>
      )}
    </div>
  );
}
