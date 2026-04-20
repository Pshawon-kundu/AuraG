"use client";

import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

type SectionId =
  | "welcome"
  | "performance"
  | "play"
  | "progress"
  | "earn"
  | "skill-engine"
  | "ranking"
  | "rewards"
  | "mobile"
  | "transparency"
  | "audit"
  | "roadmap"
  | "community"
  | "faq";

type SectionStat = {
  label: string;
  value: string;
  note: string;
};

type SectionBlock = {
  title: string;
  text: string;
};

type SectionEntry = {
  id: SectionId;
  group: string;
  label: string;
  title: string;
  subtitle: string;
  intro: string;
  bullets: string[];
  stats: SectionStat[];
  blocks: SectionBlock[];
  accent: string;
  actionLabel: string;
  actionTarget: SectionId;
};

type TrendMetric = {
  label: string;
  value: string;
  change: string;
};

type TrendPoint = {
  x: number;
  y: number;
};

function Icon({ name, className = "" }: { name: string; className?: string }) {
  const paths: Record<string, string> = {
    menu: "M4 7h16M4 12h16M4 17h16",
    search:
      "M11 19a8 8 0 1 1 5.3-14l4.2 4.2-1.4 1.4-4.2-4.2A6 6 0 1 0 11 17a5.9 5.9 0 0 0 3.8-1.4l1.4 1.4A8 8 0 0 1 11 19Z",
    check: "M4 12.5 8.2 17 20 5",
    grid: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z",
    bell: "M12 21a2.5 2.5 0 0 0 2.3-1.5h-4.6A2.5 2.5 0 0 0 12 21Zm6-5.5H6l1.1-1.2V11a4.9 4.9 0 0 1 3.6-4.7V6a1.3 1.3 0 0 1 2.6 0v.3A4.9 4.9 0 0 1 17 11v3.3L18 15.5Z",
    cart: "M6 6h15l-2 8H8L6 6Zm0 0L5 3H2",
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}

const sectionGroups = [
  {
    label: "Overview",
    items: ["welcome", "performance"],
  },
  {
    label: "System",
    items: ["play", "progress", "earn"],
  },
  {
    label: "Features",
    items: ["skill-engine", "ranking", "rewards", "mobile"],
  },
  {
    label: "Trust",
    items: ["transparency", "audit", "roadmap"],
  },
  {
    label: "Community",
    items: ["community", "faq"],
  },
] as const;

const sections: SectionEntry[] = [
  {
    id: "welcome",
    group: "Overview",
    label: "Welcome",
    title: "Welcome to AuraG",
    subtitle: "Next-generation skill-based Web3 gaming platform",
    intro:
      "AuraG is a dashboard-style gaming platform built around competition, progression, and utility-driven rewards. The experience is intentionally divided into clear sections so each part of the system can be explored on its own.",
    bullets: [
      "Skill-based play first",
      "Mobile-friendly experience",
      "Utility over hype",
      "Built for early community growth",
    ],
    stats: [
      { label: "Global gamers", value: "3.6B+", note: "market opportunity" },
      { label: "Gaming industry", value: "$188.8B", note: "market size" },
      { label: "Web3 gamers", value: "25%", note: "engage with gaming" },
    ],
    blocks: [
      {
        title: "What AuraG is",
        text: "A skill-based gaming platform designed to make progress visible, rewards controlled, and gameplay the core product.",
      },
      {
        title: "How AuraG works",
        text: "AuraG keeps the experience focused on one section at a time, so the interface stays clear, fast, and easy to follow.",
      },
    ],
    accent: "from-cyan-400 via-fuchsia-500 to-indigo-500",
    actionLabel: "Open Performance",
    actionTarget: "performance",
  },
  {
    id: "performance",
    group: "Overview",
    label: "Performance",
    title: "Performance Overview",
    subtitle: "Market proof and product pressure",
    intro:
      "The market still has demand, but many projects fail because they build around speculation instead of gameplay. AuraG is positioned to avoid that gap by focusing on real use, clear progression, and sustainable growth.",
    bullets: [
      "17% drop in activity",
      "93% funding decline",
      "300+ inactive projects",
      "Need for stronger utility",
    ],
    stats: [
      { label: "Activity change", value: "-17%", note: "recent market drop" },
      { label: "Funding change", value: "-93%", note: "capital pressure" },
      { label: "Inactive projects", value: "300+", note: "market fatigue" },
    ],
    blocks: [
      {
        title: "Problem",
        text: "Many Web3 products are built around hype, not retention. That makes them fragile when market attention moves away.",
      },
      {
        title: "AuraG response",
        text: "Build around skill, small-session gameplay, and a reward system that stays controlled instead of inflated.",
      },
    ],
    accent: "from-amber-400 via-orange-500 to-rose-500",
    actionLabel: "Open Play",
    actionTarget: "play",
  },
  {
    id: "play",
    group: "System",
    label: "Play",
    title: "Play",
    subtitle: "Join matches instantly",
    intro:
      "The first step in AuraG is simple: enter a match, play fast, and keep the experience lightweight. The system is designed for quick sessions and clear outcomes.",
    bullets: [
      "Fast entry into matches",
      "Short, focused gameplay loops",
      "Easy onboarding for new users",
      "Built for repeat play",
    ],
    stats: [
      { label: "Session length", value: "< 5 min", note: "fast gameplay" },
      { label: "Flow", value: "Instant", note: "match entry" },
      { label: "Format", value: "Mobile-first", note: "lightweight UI" },
    ],
    blocks: [
      {
        title: "How play works",
        text: "A user jumps into a match, competes, and finishes with a score or ranking impact that can feed the rest of the system.",
      },
      {
        title: "Why it matters",
        text: "If the first interaction feels heavy, users leave. This section keeps gameplay clear and quick.",
      },
    ],
    accent: "from-cyan-400 via-sky-500 to-blue-600",
    actionLabel: "Open Progress",
    actionTarget: "progress",
  },
  {
    id: "progress",
    group: "System",
    label: "Progress",
    title: "Progress",
    subtitle: "Rank up with performance",
    intro:
      "Progress in AuraG is built around skill and repetition. Players should see visible movement as they improve rather than a vague or hidden growth path.",
    bullets: [
      "Ranking tied to performance",
      "Clear improvement milestones",
      "Visible progress feedback",
      "Motivation to keep playing",
    ],
    stats: [
      { label: "Rank focus", value: "Skill", note: "not speculation" },
      { label: "Feedback", value: "Visible", note: "progress loop" },
      { label: "Retention", value: "Higher", note: "goal-driven play" },
    ],
    blocks: [
      {
        title: "Progress logic",
        text: "Players gain status through repeated performance, which creates a more stable reason to stay active.",
      },
      {
        title: "User effect",
        text: "When progress is clear, players understand what to do next and why they should return.",
      },
    ],
    accent: "from-fuchsia-500 via-pink-500 to-rose-400",
    actionLabel: "Open Earn",
    actionTarget: "earn",
  },
  {
    id: "earn",
    group: "System",
    label: "Earn",
    title: "Earn Utility",
    subtitle: "Controlled, skill-based rewards",
    intro:
      "Rewards in AuraG are meant to support the game, not replace it. The structure should stay controlled, transparent, and tied to actual activity.",
    bullets: [
      "Reward utility, not hype",
      "Controlled issuance",
      "Skill-linked outcomes",
      "Future staking and governance paths",
    ],
    stats: [
      { label: "Reward mode", value: "Controlled", note: "sustainable design" },
      { label: "Basis", value: "Skill", note: "earned output" },
      { label: "Future", value: "Utility", note: "not speculation only" },
    ],
    blocks: [
      {
        title: "Reward model",
        text: "The system should give value for performance while avoiding runaway inflation and low-quality incentives.",
      },
      {
        title: "Why it stays stable",
        text: "A controlled model gives AuraG room to grow without breaking the game economy.",
      },
    ],
    accent: "from-amber-400 via-yellow-500 to-orange-500",
    actionLabel: "Open Skill Engine",
    actionTarget: "skill-engine",
  },
  {
    id: "skill-engine",
    group: "Features",
    label: "Skill Engine",
    title: "Skill Engine",
    subtitle: "Performance-based gameplay",
    intro:
      "The skill engine is the core of AuraG. It evaluates how players perform, feeds the ranking system, and keeps gameplay as the center of the product.",
    bullets: [
      "Performance-driven logic",
      "Gameplay is the source of value",
      "Works with ranking and rewards",
      "Supports long-term retention",
    ],
    stats: [
      { label: "Core", value: "Gameplay", note: "primary layer" },
      { label: "Input", value: "Performance", note: "player skill" },
      { label: "Output", value: "Ranking", note: "visible result" },
    ],
    blocks: [
      {
        title: "Core purpose",
        text: "Everything starts with the game itself. If the engine feels weak, the rest of the platform loses meaning.",
      },
      {
        title: "Design choice",
        text: "AuraG keeps this layer clear so players can understand how their actions matter.",
      },
    ],
    accent: "from-cyan-400 via-emerald-400 to-lime-400",
    actionLabel: "Open Ranking",
    actionTarget: "ranking",
  },
  {
    id: "ranking",
    group: "Features",
    label: "Ranking",
    title: "Ranking System",
    subtitle: "Fair competitive ladder",
    intro:
      "Ranking gives players a reason to improve. It makes the platform competitive without losing clarity or fairness.",
    bullets: [
      "Clear ladder progression",
      "Fair performance tracking",
      "Competitive identity",
      "Built for repeat engagement",
    ],
    stats: [
      { label: "Structure", value: "Ladder", note: "clear progression" },
      { label: "Fairness", value: "High", note: "skill-led" },
      { label: "Engagement", value: "Repeat", note: "long-term play" },
    ],
    blocks: [
      {
        title: "Why ranking matters",
        text: "Players stay when the system recognizes improvement in a visible and fair way.",
      },
      {
        title: "AuraG outcome",
        text: "Rank becomes a meaningful signal, not just a cosmetic badge.",
      },
    ],
    accent: "from-fuchsia-500 via-pink-500 to-purple-500",
    actionLabel: "Open Rewards",
    actionTarget: "rewards",
  },
  {
    id: "rewards",
    group: "Features",
    label: "Rewards",
    title: "Reward Logic",
    subtitle: "Simple, controlled, and transparent",
    intro:
      "Rewards should feel useful and understandable. AuraG keeps the reward system tied to gameplay and avoids a token-heavy experience that dominates the platform.",
    bullets: [
      "Skill-linked reward flow",
      "Controlled distribution",
      "Transparency over hype",
      "Designed for sustainability",
    ],
    stats: [
      { label: "Distribution", value: "Controlled", note: "not inflated" },
      { label: "Clarity", value: "High", note: "easy to understand" },
      { label: "Style", value: "Utility", note: "real use matters" },
    ],
    blocks: [
      {
        title: "Reward principle",
        text: "The system should reward good play while protecting the health of the platform economy.",
      },
      {
        title: "User value",
        text: "Players understand where rewards come from and why they exist.",
      },
    ],
    accent: "from-amber-400 via-orange-400 to-red-500",
    actionLabel: "Open Mobile",
    actionTarget: "mobile",
  },
  {
    id: "mobile",
    group: "Features",
    label: "Mobile",
    title: "Mobile Optimization",
    subtitle: "Fast and lightweight experience",
    intro:
      "AuraG is designed to feel good on smaller screens. The mobile experience should keep the same section-driven behavior while staying fast and readable.",
    bullets: [
      "Responsive dashboard layout",
      "Fast navigation between sections",
      "Short sessions on the go",
      "Clean and readable hierarchy",
    ],
    stats: [
      { label: "Priority", value: "Mobile-first", note: "layout behavior" },
      { label: "Speed", value: "Lightweight", note: "quick interaction" },
      { label: "Usage", value: "On-the-go", note: "easy access" },
    ],
    blocks: [
      {
        title: "What mobile needs",
        text: "The UI should stay compact, touch-friendly, and stable even when the user switches sections often.",
      },
      {
        title: "Why it matters",
        text: "Many users discover the product on mobile first, so the section switcher and content layout must stay clear.",
      },
    ],
    accent: "from-lime-400 via-emerald-400 to-cyan-400",
    actionLabel: "Open Transparency",
    actionTarget: "transparency",
  },
  {
    id: "transparency",
    group: "Trust",
    label: "Transparency",
    title: "Trust & Transparency",
    subtitle: "Clear system logic",
    intro:
      "AuraG needs to be understandable. The platform should show how it works, what is controlled, and what the user can expect from the system.",
    bullets: [
      "Clear product logic",
      "Visible reward structure",
      "No hidden hype layer",
      "Simple user expectations",
    ],
    stats: [
      { label: "Trust level", value: "Visible", note: "clear logic" },
      { label: "System", value: "Controlled", note: "sustainable" },
      { label: "User view", value: "Simple", note: "easy to follow" },
    ],
    blocks: [
      {
        title: "Transparency rule",
        text: "Users should understand what happens when they play, progress, and earn.",
      },
      {
        title: "Product tone",
        text: "Keep the experience direct and avoid confusing hidden mechanics.",
      },
    ],
    accent: "from-sky-400 via-cyan-400 to-blue-500",
    actionLabel: "Open Audit",
    actionTarget: "audit",
  },
  {
    id: "audit",
    group: "Trust",
    label: "Audit",
    title: "Audit and Control",
    subtitle: "System checks and guardrails",
    intro:
      "This section represents the controls that keep AuraG stable. Even at early stage, the design should stay disciplined and easy to review.",
    bullets: [
      "Stable gameplay rules",
      "Reviewable reward logic",
      "Simple control points",
      "Built-in guardrails",
    ],
    stats: [
      { label: "Control", value: "High", note: "reviewable" },
      { label: "Risk", value: "Lower", note: "clearer system" },
      { label: "Status", value: "Early", note: "pre-launch" },
    ],
    blocks: [
      {
        title: "What to review",
        text: "How matches start, how ranking changes, and how rewards remain controlled.",
      },
      {
        title: "What not to do",
        text: "Do not make the platform hard to understand or overload it with unnecessary mechanics.",
      },
    ],
    accent: "from-indigo-400 via-violet-500 to-fuchsia-500",
    actionLabel: "Open Roadmap",
    actionTarget: "roadmap",
  },
  {
    id: "roadmap",
    group: "Trust",
    label: "Roadmap",
    title: "Development Phases",
    subtitle: "One step at a time",
    intro:
      "AuraG is intended to grow in stages. That keeps the product manageable and helps the team focus on each milestone before moving to the next one.",
    bullets: [
      "Phase 1: Website + community",
      "Phase 2: MVP gameplay",
      "Phase 3: Beta + ranking system",
      "Phase 4: Reward system + utility",
      "Phase 5: Expansion + partnerships",
    ],
    stats: [
      { label: "Phase", value: "1-5", note: "structured growth" },
      { label: "Focus", value: "MVP", note: "validate first" },
      { label: "Goal", value: "Scale", note: "after proof" },
    ],
    blocks: [
      {
        title: "Roadmap logic",
        text: "Build the product, validate the loop, then expand once the core system is proven.",
      },
      {
        title: "Why staged rollout helps",
        text: "A staged plan protects quality and keeps the team focused on what matters now.",
      },
    ],
    accent: "from-fuchsia-500 via-pink-500 to-amber-400",
    actionLabel: "Open Community",
    actionTarget: "community",
  },
  {
    id: "community",
    group: "Community",
    label: "Community",
    title: "Community",
    subtitle: "Early users and feedback",
    intro:
      "AuraG should grow with its users. The community section is where early adopters, feedback loops, and future updates connect back to the product.",
    bullets: [
      "Early users onboarding",
      "Feedback-driven updates",
      "Community shaping the roadmap",
      "Growth around real usage",
    ],
    stats: [
      { label: "Audience", value: "Early", note: "first users" },
      { label: "Flow", value: "Feedback", note: "looped in" },
      { label: "Growth", value: "Shared", note: "community-led" },
    ],
    blocks: [
      {
        title: "Community role",
        text: "Early users help test the experience, improve the product, and keep the direction grounded.",
      },
      {
        title: "What comes next",
        text: "Use feedback to refine the game loop, the reward logic, and the mobile experience.",
      },
    ],
    accent: "from-cyan-400 via-blue-500 to-slate-400",
    actionLabel: "Open FAQ",
    actionTarget: "faq",
  },
  {
    id: "faq",
    group: "Community",
    label: "FAQ",
    title: "FAQ",
    subtitle: "Short answers to the basics",
    intro:
      "This section keeps the most common questions in one place so the product stays readable and direct.",
    bullets: [
      "Is it live? Pre-launch phase",
      "Need crypto? No",
      "How rewards work? Skill-based",
      "Token launch? After validation",
    ],
    stats: [
      { label: "Status", value: "Pre-launch", note: "not live yet" },
      { label: "Crypto needed", value: "No", note: "simple entry" },
      { label: "Rewards", value: "Skill", note: "performance-based" },
    ],
    blocks: [
      {
        title: "How should users think about AuraG?",
        text: "As a structured, gameplay-first product with a clear path from play to progress to utility.",
      },
      {
        title: "What should remain true?",
        text: "The page should stay divided by section, and only the selected section should be visible in detail.",
      },
    ],
    accent: "from-emerald-400 via-cyan-400 to-sky-500",
    actionLabel: "Back to Welcome",
    actionTarget: "welcome",
  },
];

function getSection(id: SectionId) {
  return sections.find((section) => section.id === id) ?? sections[0];
}

function SectionIcon({ accent }: { accent: string }) {
  return (
    <div
      className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${accent} shadow-[0_0_24px_rgba(58,160,255,0.3)]`}
    />
  );
}

function buildTrendSeries(frame: number, points: number, baseShift: number) {
  return Array.from({ length: points }, (_, index) => {
    const progress = index / (points - 1);
    const wave =
      Math.sin(progress * Math.PI * 2.2 + frame * 0.55 + baseShift) * 9 +
      Math.cos(progress * Math.PI * 4.1 + frame * 0.28 + baseShift * 1.7) * 4;
    const drift = progress * 18 + Math.sin(frame * 0.18 + baseShift) * 6;
    const valley =
      Math.max(0, Math.sin((progress - 0.32) * Math.PI * 2.4)) * 10;
    const peak = Math.max(0, Math.sin((progress - 0.72) * Math.PI * 2.1)) * 14;
    const value = 70 - drift + wave - valley + peak;

    return Math.max(18, Math.min(92, value));
  });
}

function TrendChart({ sectionId }: { sectionId: SectionId }) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setFrame((currentFrame) => currentFrame + 1);
    }, 1400);

    return () => window.clearInterval(timer);
  }, []);

  const series = useMemo(
    () => buildTrendSeries(frame, 12, sectionId.length * 0.9),
    [frame, sectionId],
  );

  const points = series.map((value, index) => ({
    x: 15 + (index / (series.length - 1)) * 290,
    y: 124 - value * 0.88,
  }));

  const linePath = points
    .map(
      (point, index) =>
        `${index === 0 ? "M" : "L"} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`,
    )
    .join(" ");

  const areaPath = `${linePath} L 305 132 L 15 132 Z`;
  const lastPoint = points[points.length - 1];
  const streamItems = useMemo(
    () => [
      { label: "Play", value: `${Math.round(series[2])}%` },
      { label: "Rank", value: `${Math.round(series[4])}%` },
      { label: "Earn", value: `${Math.round(series[6])}%` },
      { label: "Trust", value: `${Math.round(series[8])}%` },
      { label: "Mobile", value: `${Math.round(series[10])}%` },
    ],
    [series],
  );

  return (
    <div className="rounded-[24px] border border-white/8 bg-[#0f1431] p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/40">
            Visual signal
          </p>
          <h3 className="mt-2 text-base font-semibold text-white md:text-lg">
            AuraG momentum snapshot
          </h3>
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-cyan-300/80">
          Live trend
        </div>
      </div>

      <div className="mt-4 rounded-[20px] border border-white/8 bg-[#12183a] p-3.5">
        <svg
          viewBox="0 0 320 150"
          className="h-36 w-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id={`section-line-${sectionId}`}
              x1="0"
              x2="1"
              y1="0"
              y2="0"
            >
              <stop offset="0%" stopColor="#18d0d3" />
              <stop offset="55%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ff4fa0" />
            </linearGradient>
            <linearGradient
              id={`section-fill-${sectionId}`}
              x1="0"
              x2="0"
              y1="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#18d0d3" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#18d0d3" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={areaPath} fill={`url(#section-fill-${sectionId})`} />
          <path
            d={linePath}
            fill="none"
            stroke={`url(#section-line-${sectionId})`}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-[0_0_10px_rgba(24,208,211,0.25)]"
          />
          {points.map((point, index) => {
            const isLatest = index === points.length - 1;
            return (
              <g key={`${sectionId}-${index}`}>
                <circle
                  cx={point.x}
                  cy={point.y}
                  r={isLatest ? 5.2 : 3.8}
                  fill={isLatest ? "#ffffff" : "rgba(255,255,255,0.9)"}
                  className={isLatest ? "animate-pulse" : ""}
                />
                {isLatest ? (
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="12"
                    fill="rgba(24,208,211,0.12)"
                  />
                ) : null}
              </g>
            );
          })}
          <line
            x1={lastPoint.x}
            y1={lastPoint.y}
            x2={lastPoint.x}
            y2="132"
            stroke="rgba(255,255,255,0.12)"
            strokeDasharray="4 5"
          />
        </svg>

        <div className="mt-1.5 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/35">
          <span>Start</span>
          <span>Mid</span>
          <span>Now</span>
        </div>
      </div>

      <div className="mt-3 overflow-hidden rounded-[20px] border border-white/8 bg-white/5 px-3 py-2">
        <div className="aurag-marquee flex w-[200%] items-center gap-2.5">
          {[...streamItems, ...streamItems].map((item, index) => (
            <div
              key={`${item.label}-${index}`}
              className="flex min-w-[84px] items-center justify-between rounded-full border border-white/8 bg-[#111736] px-2.5 py-1.5"
            >
              <span className="text-[10px] uppercase tracking-[0.18em] text-white/45">
                {item.label}
              </span>
              <span className="text-[13px] font-semibold text-white">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
        {[
          ["Momentum", `${Math.round(series[3])}%`, "+8%"],
          ["Stability", `${Math.round(series[7])}%`, "+4%"],
          ["Engagement", `${Math.round(series[9])}%`, "+11%"],
        ].map(([label, value, change]) => (
          <div
            key={label}
            className="rounded-2xl border border-white/8 bg-white/5 p-3"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/40">
              {label}
            </p>
            <p className="mt-1.5 text-xl font-semibold text-white md:text-2xl">
              {value}
            </p>
            <p className="mt-1 text-xs text-cyan-300/80 md:text-sm">{change}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function DetailCard({ title, text }: SectionBlock) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
      <p className="text-sm font-semibold text-white">{title}</p>
      <p className="mt-2 text-sm leading-7 text-white/64">{text}</p>
    </div>
  );
}

function SectionVisual({ section }: { section: SectionEntry }) {
  const trendMetrics: TrendMetric[] = [
    { label: "Interest", value: "78%", change: "+12%" },
    { label: "Retention", value: "64%", change: "+8%" },
    { label: "Momentum", value: "91%", change: "+16%" },
  ];

  const graphPoints = [18, 30, 24, 44, 38, 58, 50, 72, 63, 84];
  const barMetrics = [
    { label: "Play", value: 76 },
    { label: "Rank", value: 58 },
    { label: "Earn", value: 70 },
    { label: "Trust", value: 66 },
    { label: "Mobile", value: 82 },
  ];

  return (
    <div className="rounded-[24px] border border-white/8 bg-[#0f1431] p-4">
      <TrendChart sectionId={section.id} />

      <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
        {trendMetrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border border-white/8 bg-white/5 p-3"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/40">
              {metric.label}
            </p>
            <p className="mt-1.5 text-xl font-semibold text-white md:text-2xl">
              {metric.value}
            </p>
            <p className="mt-1 text-xs text-cyan-300/80 md:text-sm">
              {metric.change}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-2xl border border-white/8 bg-[#12183a] px-4 py-3.5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Activity split
            </p>
            <h4 className="mt-1 text-xs font-semibold text-white">
              Where AuraG focus is strongest
            </h4>
          </div>
          <p className="text-[10px] uppercase tracking-[0.15em] text-cyan-300/80">
            Weekly view
          </p>
        </div>

        <div className="mt-3">
          {/* Horizontal tracking bars */}
          <div className="flex h-1.5 w-full gap-1.5">
            {barMetrics.map((metric) => (
              <div
                key={metric.label + "bar"}
                className="relative h-full rounded-full bg-white/5"
                style={{ width: `${metric.value}%` }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-300 opacity-60 shadow-[0_0_10px_rgba(24,208,211,0.3)]" />
              </div>
            ))}
          </div>

          <div className="mt-2.5 flex justify-between">
            {barMetrics.map((metric) => (
              <div
                key={metric.label + "text"}
                className="flex flex-col items-center"
              >
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/45">
                  {metric.label}
                </p>
                <p className="mt-0.5 text-xs font-semibold text-white">
                  {metric.value}%
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3 grid gap-2.5 md:grid-cols-2 xl:grid-cols-4">
        {[
          ["Sessions", "1.8k", "+14%"],
          ["Progress", "74%", "+9%"],
          ["Rewards", "52%", "+6%"],
          ["Stability", "96%", "+2%"],
        ].map(([label, value, change]) => (
          <div
            key={label}
            className="rounded-2xl border border-white/8 bg-white/5 p-3"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/40">
              {label}
            </p>
            <p className="mt-1.5 text-lg font-semibold text-white md:text-xl">
              {value}
            </p>
            <p className="mt-1 text-xs text-cyan-300/80 md:text-sm">{change}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function WelcomeVisual() {
  return (
    <div className="rounded-[26px] border border-white/8 bg-[#0f1431] p-5">
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {[
          ["Play", "Fast"],
          ["Progress", "Clear"],
          ["Earn", "Controlled"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-2xl border border-white/8 bg-white/5 p-4"
          >
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
              {label}
            </p>
            <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
          </div>
        ))}
      </div>

      <TrendChart sectionId="welcome" />
    </div>
  );
}

function StatCard({ stat }: { stat: SectionStat }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-[#101633] p-4">
      <p className="text-2xl font-semibold tracking-tight text-white">
        {stat.value}
      </p>
      <p className="mt-1 text-sm text-white/68">{stat.label}</p>
      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-cyan-300/80">
        {stat.note}
      </p>
    </div>
  );
}

function SectionButton({
  label,
  sectionId,
  activeSection,
  onSelect,
}: {
  label: string;
  sectionId: SectionId;
  activeSection: SectionId;
  onSelect: (sectionId: SectionId) => void;
}) {
  const isActive = activeSection === sectionId;

  return (
    <button
      type="button"
      onClick={() => onSelect(sectionId)}
      className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm transition ${isActive ? "bg-white/8 text-white" : "text-white/66 hover:bg-white/5 hover:text-white"}`}
    >
      <span
        className={`mt-1 h-2 w-2 rounded-full ${isActive ? "bg-[#3aa0ff] shadow-[0_0_12px_rgba(58,160,255,0.8)]" : "bg-white/20"}`}
      />
      {label}
    </button>
  );
}

function Sidebar({
  activeSection,
  onSelect,
}: {
  activeSection: SectionId;
  onSelect: (sectionId: SectionId) => void;
}) {
  return (
    <aside className="hidden w-[248px] shrink-0 border-r border-white/6 bg-[#0b1027] px-4 py-4 xl:block">
      <div className="flex items-center gap-3 px-2 pb-5">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-indigo-500 shadow-[0_0_22px_rgba(58,160,255,0.45)]" />
        <p className="font-display text-2xl font-semibold tracking-tight text-white">
          AuraG
        </p>
      </div>

      <div className="space-y-3">
        {sectionGroups.map((group) => (
          <div key={group.label} className="space-y-2">
            <p className="px-3 pt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/36">
              {group.label}
            </p>
            <div className="space-y-1">
              {group.items.map((sectionId) => {
                const section = getSection(sectionId);
                return (
                  <SectionButton
                    key={section.id}
                    label={section.label}
                    sectionId={section.id}
                    activeSection={activeSection}
                    onSelect={onSelect}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

function MobileHeader({
  activeSection,
  onSelect,
}: {
  activeSection: SectionId;
  onSelect: (sectionId: SectionId) => void;
}) {
  const currentSection = getSection(activeSection);

  return (
    <div className="xl:hidden">
      <div className="flex items-center justify-between border-b border-white/8 bg-[#0b1027] px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-indigo-500" />
          <div>
            <p className="font-display text-xl font-semibold tracking-tight text-white">
              AuraG
            </p>
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">
              {currentSection.group}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => onSelect("welcome")}
          className="rounded-xl border border-white/8 bg-white/5 p-2 text-white/80"
          aria-label="Go to Welcome section"
        >
          <Icon name="menu" className="h-5 w-5" />
        </button>
      </div>
      <div className="flex gap-2 overflow-x-auto border-b border-white/8 bg-[#0b1027] px-4 py-3 text-sm text-white/70">
        {sectionGroups
          .flatMap((group) => group.items)
          .map((sectionId) => {
            const section = getSection(sectionId);
            const isActive = activeSection === sectionId;

            return (
              <button
                key={section.id}
                type="button"
                onClick={() => onSelect(section.id)}
                className={`whitespace-nowrap rounded-full px-3 py-2 ${isActive ? "bg-white/8 text-white" : "bg-white/4"}`}
              >
                {section.label}
              </button>
            );
          })}
      </div>
    </div>
  );
}

function SectionDetail({
  section,
  onSelect,
}: {
  section: SectionEntry;
  onSelect: (sectionId: SectionId) => void;
}) {
  return (
    <section className="rounded-[28px] border border-white/6 bg-[#131945] p-6 shadow-[0_24px_80px_rgba(5,7,20,0.35)]">
      {section.id === "welcome" ? (
        <div className="grid gap-6 xl:grid-cols-1 xl:items-start">
          <div className="min-w-0">
            <div className="flex items-center gap-3 text-sm text-white/65">
              <span className="text-white/48">AuraG</span>
              <span>›</span>
              <span className="text-white">{section.group}</span>
            </div>
            <div className="mt-4 flex items-start gap-4">
              <SectionIcon accent={section.accent} />
              <div className="min-w-0">
                <h1 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                  {section.title}
                </h1>
                <p className="mt-2 max-w-xl text-sm text-white/66 md:text-base">
                  {section.subtitle}
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/64 md:text-base">
              {section.intro}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onSelect(section.actionTarget)}
                className="inline-flex items-center justify-center rounded-xl bg-[#1b66ff] px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(27,102,255,0.3)] transition hover:brightness-110"
              >
                {section.actionLabel}
              </button>
              <button
                type="button"
                onClick={() => onSelect("performance")}
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 transition hover:border-white/15 hover:bg-white/10"
              >
                View analytics
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-sm text-white/65">
              <span className="text-white/48">AuraG</span>
              <span>›</span>
              <span className="text-white">{section.group}</span>
            </div>
            <div className="mt-4 flex items-start gap-4">
              <SectionIcon accent={section.accent} />
              <div>
                <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  {section.title}
                </h1>
                <p className="mt-2 text-sm text-white/66 md:text-base">
                  {section.subtitle}
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/64 md:text-base">
              {section.intro}
            </p>
          </div>
          <button
            type="button"
            onClick={() => onSelect(section.actionTarget)}
            className="inline-flex items-center justify-center rounded-xl bg-[#1b66ff] px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(27,102,255,0.3)] transition hover:brightness-110"
          >
            {section.actionLabel}
          </button>
        </div>
      )}

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {section.stats.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </div>

      {section.id === "performance" ? (
        <div className="mt-8 grid gap-6 xl:grid-cols-[280px_1fr]">
          <div className="space-y-4">
            <DetailCard
              title="Real-time analytics"
              text="AuraG continuously monitors network activity, user engagement, and transaction stability to provide a comprehensive view of ecosystem health."
            />
            <DetailCard
              title="System consistency"
              text="Ensuring high-volume processing and rapid data updates happens with minimal latency, keeping the entire platform running seamlessly."
            />
          </div>
          <div className="min-w-0">
            <SectionVisual section={section} />
          </div>
        </div>
      ) : null}

      {section.id !== "performance" ? (
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="min-w-0 space-y-4">
            {section.blocks.map((block) => (
              <DetailCard
                key={block.title}
                title={block.title}
                text={block.text}
              />
            ))}
          </div>
          <div className="min-w-0 space-y-4">
            {section.id === "welcome" ? (
              <div className="rounded-[26px] border border-white/8 bg-[#0f1431] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/40">
                  Welcome focus
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-white/68">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span
                        className={`mt-2 h-2.5 w-2.5 rounded-full bg-gradient-to-r ${section.accent}`}
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <SectionVisual section={section} />
            )}
          </div>
        </div>
      ) : null}
    </section>
  );
}

function HeaderIconButton({
  children,
  onClick,
  className = "",
  ariaLabel,
}: {
  children: ReactNode;
  onClick: () => void;
  className?: string;
  ariaLabel: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/8 bg-white/5 text-white/80 transition hover:border-white/15 hover:bg-white/10 ${className}`}
    >
      {children}
    </button>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId>("welcome");
  const currentSection = useMemo(
    () => getSection(activeSection),
    [activeSection],
  );

  return (
    <main className="min-h-screen bg-[#0a0d1b] text-white">
      <div className="flex min-h-screen flex-col xl:flex-row">
        <Sidebar activeSection={activeSection} onSelect={setActiveSection} />

        <div className="flex min-h-screen flex-1 flex-col">
          <MobileHeader
            activeSection={activeSection}
            onSelect={setActiveSection}
          />

          <header className="border-b border-white/6 bg-[#0b1027] px-4 py-4 md:px-6">
            <div className="mx-auto flex max-w-[1600px] items-center gap-3">
              <HeaderIconButton
                onClick={() => setActiveSection("welcome")}
                ariaLabel="Go to Welcome section"
                className="hidden xl:grid"
              >
                <Icon name="menu" className="h-5 w-5" />
              </HeaderIconButton>
              <div className="relative min-w-0 flex-1">
                <Icon
                  name="search"
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35"
                />
                <input
                  aria-label="Search"
                  placeholder="Search"
                  className="h-11 w-full rounded-full border border-white/8 bg-[#111736] px-11 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-cyan-400/30 focus:bg-[#131c40] md:h-12"
                />
              </div>
              <div className="hidden items-center gap-2 md:flex">
                <HeaderIconButton
                  onClick={() => setActiveSection("transparency")}
                  ariaLabel="Open Transparency section"
                  className="relative"
                >
                  <Icon name="bell" className="h-5 w-5" />
                  <span className="absolute right-1.5 top-1.5 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-[#0b1027]" />
                </HeaderIconButton>
                <HeaderIconButton
                  onClick={() => setActiveSection("community")}
                  ariaLabel="Open Community section"
                  className="relative"
                >
                  <Icon name="cart" className="h-5 w-5" />
                  <span className="absolute right-1.5 top-1.5 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-[#0b1027]" />
                </HeaderIconButton>
                <button
                  type="button"
                  onClick={() => setActiveSection("welcome")}
                  className="h-10 w-10 shrink-0 rounded-full border border-white/10 bg-[radial-gradient(circle_at_35%_30%,#ffe6b2_0,#f4b1aa_30%,#6d8cff_65%,#1d2249_100%)] shadow-[0_0_22px_rgba(109,140,255,0.35)]"
                  aria-label="Go to Welcome section"
                />
              </div>
            </div>
          </header>

          <div className="flex-1 bg-[linear-gradient(180deg,#121734_0%,#2f3eaa_100%)] px-4 py-5 md:px-6 md:py-6">
            <div className="mx-auto max-w-[1600px] space-y-6">
              <SectionDetail
                section={currentSection}
                onSelect={setActiveSection}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
