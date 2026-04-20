const quickStats = [
  { label: "Global gamers", value: "3.6B+", detail: "market opportunity" },
  { label: "Gaming industry", value: "$188.8B", detail: "market size" },
  { label: "Web3 gamers", value: "25%", detail: "engage with gaming" },
];

const systemSteps = [
  ["Play", "Join matches instantly"],
  ["Progress", "Rank up with performance"],
  ["Earn Utility", "Gain rewards based on skill"],
  ["Unlock", "Access advanced features"],
] as const;

const coreModules = [
  [
    "Skill Engine",
    "Performance-based gameplay",
    "from-cyan-400 to-emerald-400",
  ],
  ["Ranking System", "Fair competitive ladder", "from-fuchsia-500 to-pink-400"],
  [
    "Reward Logic",
    "Controlled, sustainable rewards",
    "from-amber-400 to-orange-500",
  ],
  [
    "Mobile Optimization",
    "Fast and lightweight experience",
    "from-lime-400 to-emerald-400",
  ],
] as const;

const userTypes = [
  ["Competitive Players", ["High-skill matches", "Ranking focus"]],
  ["Casual Users", ["Easy gameplay", "Gradual progress"]],
  ["Early Adopters", ["Early access", "Future benefits"]],
] as const;

const roadmap = [
  ["Phase 1", "Website + community"],
  ["Phase 2", "MVP gameplay"],
  ["Phase 3", "Beta + ranking system"],
  ["Phase 4", "Reward system + utility"],
  ["Phase 5", "Expansion + partnerships"],
] as const;

const faq = [
  ["Is it live?", "Pre-launch phase"],
  ["Need crypto?", "No"],
  ["How rewards work?", "Skill-based"],
  ["Token launch?", "After validation"],
] as const;

const navGroups = [
  {
    label: "Overview",
    items: [
      ["Welcome", "#welcome"],
      ["Performance", "#performance"],
    ],
  },
  {
    label: "System",
    items: [
      ["Play", "#system-play"],
      ["Progress", "#system-progress"],
      ["Earn", "#system-earn"],
    ],
  },
  {
    label: "Features",
    items: [
      ["Skill Engine", "#features"],
      ["Ranking", "#features"],
      ["Rewards", "#trust"],
      ["Mobile", "#community"],
    ],
  },
  {
    label: "Trust",
    items: [
      ["Transparency", "#trust"],
      ["Audit", "#trust"],
      ["Roadmap", "#roadmap"],
    ],
  },
  {
    label: "Community",
    items: [
      ["Early Users", "#community"],
      ["Feedback", "#community"],
      ["FAQ", "#faq"],
    ],
  },
] as const;

function Icon({ name, className = "" }: { name: string; className?: string }) {
  const paths: Record<string, string> = {
    menu: "M4 7h16M4 12h16M4 17h16",
    search:
      "M11 19a8 8 0 1 1 5.3-14l4.2 4.2-1.4 1.4-4.2-4.2A6 6 0 1 0 11 17a5.9 5.9 0 0 0 3.8-1.4l1.4 1.4A8 8 0 0 1 11 19Z",
    check: "M4 12.5 8.2 17 20 5",
    grid: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z",
    bell: "M12 21a2.5 2.5 0 0 0 2.3-1.5h-4.6A2.5 2.5 0 0 0 12 21Zm6-5.5H6l1.1-1.2V11a4.9 4.9 0 0 1 3.6-4.7V6a1.3 1.3 0 0 1 2.6 0v.3A4.9 4.9 0 0 1 17 11v3.3L18 15.5Z",
    cart: "M6 6h15l-2 8H8L6 6Zm0 0L5 3H2",
    more: "M12 7.5a1.5 1.5 0 1 1 0-.01Zm0 5a1.5 1.5 0 1 1 0-.01Zm0 5a1.5 1.5 0 1 1 0-.01Z",
    arrow: "M5 12h14M13 6l6 6-6 6",
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

function AnchorButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

function Sidebar() {
  return (
    <aside className="hidden w-[248px] shrink-0 border-r border-white/6 bg-[#0b1027] px-4 py-4 xl:block">
      <div className="flex items-center gap-3 px-2 pb-5">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-indigo-500 shadow-[0_0_22px_rgba(58,160,255,0.45)]" />
        <p className="font-display text-2xl font-semibold tracking-tight text-white">
          AuraG
        </p>
      </div>
      <div className="space-y-3">
        {navGroups.map((group, groupIndex) => (
          <div key={group.label} className="space-y-2">
            <p className="px-3 pt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/36">
              {group.label}
            </p>
            <div className="space-y-1">
              {group.items.map(([label, href], index) => (
                <AnchorButton
                  key={label}
                  href={href}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition ${groupIndex === 0 && index === 0 ? "bg-white/6 text-white" : "text-white/66 hover:bg-white/5 hover:text-white"}`}
                >
                  <span
                    className={`mt-1 h-2 w-2 rounded-full ${groupIndex === 0 && index === 0 ? "bg-[#3aa0ff] shadow-[0_0_12px_rgba(58,160,255,0.8)]" : "bg-white/20"}`}
                  />
                  {label}
                </AnchorButton>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

function MobileHeader() {
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
              Overview
            </p>
          </div>
        </div>
        <AnchorButton
          href="#welcome"
          className="rounded-xl border border-white/8 bg-white/5 p-2 text-white/80"
        >
          <Icon name="menu" className="h-5 w-5" />
        </AnchorButton>
      </div>
      <div className="flex gap-2 overflow-x-auto border-b border-white/8 bg-[#0b1027] px-4 py-3 text-sm text-white/70">
        {[
          ["Overview", "#welcome"],
          ["System", "#system-play"],
          ["Features", "#features"],
          ["Trust", "#trust"],
          ["Community", "#community"],
          ["Roadmap", "#roadmap"],
        ].map(([item, href], index) => (
          <AnchorButton
            key={item}
            href={href}
            className={`whitespace-nowrap rounded-full px-3 py-2 ${index === 0 ? "bg-white/8 text-white" : "bg-white/4"}`}
          >
            {item}
          </AnchorButton>
        ))}
      </div>
    </div>
  );
}

function MetricTile({
  title,
  label,
  note,
  variant,
}: {
  title: string;
  label: string;
  note: string;
  variant: "ring" | "line" | "bars" | "points";
}) {
  return (
    <div className="rounded-[28px] border border-white/6 bg-[#131945] p-5 shadow-[0_24px_80px_rgba(5,7,20,0.35)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-3xl font-semibold tracking-tight text-white">
            {title}
          </p>
          <p className="mt-1 text-sm text-white/66">{label}</p>
        </div>
        <AnchorButton
          href="#faq"
          className="rounded-full p-1.5 text-white/70 hover:bg-white/5"
        >
          <Icon name="more" className="h-5 w-5" />
        </AnchorButton>
      </div>
      <div className="mt-5 h-24">
        {variant === "ring" ? (
          <div className="flex h-full items-center justify-center">
            <div className="grid h-32 w-32 place-items-center rounded-full bg-[conic-gradient(from_180deg,#ffcf3f_0%,#ff4fa0_35%,#3aa0ff_68%,#8eff3f_100%)] p-1">
              <div className="grid h-full w-full place-items-center rounded-full bg-[#0b1027] text-center">
                <div>
                  <p className="font-display text-3xl font-semibold text-white">
                    78%
                  </p>
                  <p className="text-xs text-white/55">Total Views</p>
                </div>
              </div>
            </div>
          </div>
        ) : variant === "line" ? (
          <svg
            viewBox="0 0 220 84"
            className="h-full w-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="aura-line" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#18d0d3" />
                <stop offset="100%" stopColor="#8eff3f" />
              </linearGradient>
              <linearGradient id="aura-fill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#18d0d3" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#18d0d3" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 60 L28 48 L55 56 L82 34 L110 46 L138 30 L166 20 L192 34 L220 18 L220 84 L0 84 Z"
              fill="url(#aura-fill)"
            />
            <path
              d="M0 60 L28 48 L55 56 L82 34 L110 46 L138 30 L166 20 L192 34 L220 18"
              stroke="url(#aura-line)"
              strokeWidth="3.2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : variant === "bars" ? (
          <div className="flex h-full items-end gap-2">
            {[12, 18, 20, 28, 32, 41, 48, 58].map((value, index) => (
              <div
                key={`${index}-${value}`}
                className="flex-1 rounded-full bg-white/5"
              >
                <div
                  className="rounded-full bg-gradient-to-t from-fuchsia-500 to-pink-400"
                  style={{
                    height: `${(value / 58) * 100}%`,
                    minHeight: 10,
                    boxShadow: "0 0 18px rgba(255,79,160,0.4)",
                  }}
                />
              </div>
            ))}
          </div>
        ) : (
          <svg
            viewBox="0 0 220 84"
            className="h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 58 L40 44 L70 50 L105 30 L140 48 L175 18 L220 34"
              stroke="#ff4fa0"
              strokeWidth="3.2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/45">
        {note}
      </p>
      <div className="mt-2 h-1.5 rounded-full bg-white/5">
        <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-lime-400" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0d1b] text-white">
      <div className="flex min-h-screen flex-col xl:flex-row">
        <Sidebar />

        <div className="flex min-h-screen flex-1 flex-col">
          <MobileHeader />

          <header className="border-b border-white/6 bg-[#0b1027] px-4 py-4 md:px-6">
            <div className="mx-auto flex max-w-[1600px] items-center gap-4">
              <AnchorButton
                href="#welcome"
                className="hidden rounded-xl border border-white/8 bg-white/5 p-2 text-white/80 xl:inline-flex"
              >
                <Icon name="menu" className="h-5 w-5" />
              </AnchorButton>
              <div className="relative flex-1">
                <Icon
                  name="search"
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35"
                />
                <input
                  aria-label="Search"
                  placeholder="Search"
                  className="w-full rounded-full border border-white/8 bg-[#111736] px-11 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-cyan-400/30 focus:bg-[#131c40]"
                />
              </div>
              <div className="hidden items-center gap-4 md:flex">
                <AnchorButton
                  href="#faq"
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/5 text-sm font-semibold"
                >
                  🇺🇸
                </AnchorButton>
                <AnchorButton
                  href="#system-progress"
                  className="rounded-full p-2 text-white/75 hover:bg-white/5"
                >
                  <Icon name="check" className="h-5 w-5" />
                </AnchorButton>
                <AnchorButton
                  href="#features"
                  className="rounded-full p-2 text-white/75 hover:bg-white/5"
                >
                  <Icon name="grid" className="h-5 w-5" />
                </AnchorButton>
                <AnchorButton
                  href="#trust"
                  className="relative rounded-full p-2 text-white/75 hover:bg-white/5"
                >
                  <Icon name="bell" className="h-5 w-5" />
                  <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-[#0b1027]" />
                </AnchorButton>
                <AnchorButton
                  href="#community"
                  className="relative rounded-full p-2 text-white/75 hover:bg-white/5"
                >
                  <Icon name="cart" className="h-5 w-5" />
                  <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-[#0b1027]" />
                </AnchorButton>
                <AnchorButton
                  href="#welcome"
                  className="h-11 w-11 rounded-full bg-[radial-gradient(circle_at_35%_30%,#ffe6b2_0,#f4b1aa_30%,#6d8cff_65%,#1d2249_100%)] ring-2 ring-white/10"
                />
              </div>
            </div>
          </header>

          <div className="flex-1 bg-[linear-gradient(180deg,#121734_0%,#2f3eaa_100%)] px-4 py-5 md:px-6 md:py-6">
            <div className="mx-auto max-w-[1600px] space-y-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <div className="flex items-center gap-2 text-sm text-white/68">
                    <span className="text-white/52">AuraG</span>
                    <span>›</span>
                    <span className="text-white">Overview</span>
                  </div>
                  <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    Welcome to AuraG
                  </h1>
                  <p className="mt-2 max-w-2xl text-sm text-white/62 md:text-base">
                    Next-generation skill-based Web3 gaming platform
                  </p>
                </div>
                <AnchorButton
                  href="#roadmap"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#1b66ff] px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(27,102,255,0.3)] transition hover:brightness-110"
                >
                  Settings <span className="text-white/85">▾</span>
                </AnchorButton>
              </div>

              <div className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
                <div className="grid gap-6">
                  <section
                    id="welcome"
                    className="rounded-[28px] border border-white/6 bg-[#131945] p-6 shadow-[0_24px_80px_rgba(5,7,20,0.35)]"
                  >
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                      <div className="max-w-xl">
                        <div className="flex items-center gap-3">
                          <div className="h-14 w-14 rounded-full bg-[radial-gradient(circle_at_30%_25%,#ffdca8_0,#ffffff_16%,#89b2ff_42%,#0d1a43_85%)] ring-4 ring-cyan-500/80" />
                          <div>
                            <p className="text-sm text-white/66">
                              Welcome to AuraG
                            </p>
                            <p className="mt-1 text-3xl font-semibold tracking-tight text-white">
                              Next-generation skill-based Web3 gaming platform
                            </p>
                          </div>
                        </div>
                        <div className="mt-8 grid gap-4 sm:grid-cols-3">
                          {quickStats.map((item) => (
                            <div
                              key={item.label}
                              className="rounded-2xl border border-white/8 bg-white/5 p-4"
                            >
                              <p className="text-2xl font-semibold tracking-tight text-white">
                                {item.value}
                              </p>
                              <p className="mt-1 text-sm text-white/66">
                                {item.label}
                              </p>
                              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-cyan-300/80">
                                {item.detail}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="relative mx-auto flex h-[190px] w-full max-w-[360px] items-end justify-center overflow-hidden rounded-[26px] bg-transparent">
                        <div className="absolute bottom-0 left-6 h-20 w-8 rounded-t-2xl bg-[#ffcf67]" />
                        <div className="absolute bottom-0 left-12 h-18 w-8 rounded-t-2xl bg-[#2a2b8f]" />
                        <div className="absolute bottom-0 left-20 h-28 w-40 rounded-3xl bg-gradient-to-b from-[#1a1f65] to-[#0b1131] shadow-[0_14px_30px_rgba(0,0,0,0.25)]" />
                        <div className="absolute left-24 top-8 h-10 w-10 rounded-full bg-[#ffb34d]" />
                        <div className="absolute left-36 top-12 h-16 w-10 rounded-[18px] bg-[#e85b7c]" />
                        <div className="absolute right-10 top-8 h-14 w-14 rounded-2xl border border-white/40 bg-[#0a0f27]" />
                        <div className="absolute right-18 top-15 h-10 w-10 rounded-2xl border border-white/30 bg-[#14193a]" />
                        <div className="absolute right-2 bottom-7 h-12 w-12 rounded-[18px] bg-[#f2c263]" />
                        <div className="absolute bottom-0 left-0 right-0 h-8 rounded-[20px] bg-[#f4c463]" />
                        <div className="absolute left-[44%] top-20 flex flex-col gap-2">
                          <div className="h-8 w-10 rounded-lg bg-cyan-400/90 shadow-[0_0_25px_rgba(24,208,211,0.5)]" />
                          <div className="h-6 w-12 rounded-lg bg-rose-400/95 shadow-[0_0_22px_rgba(255,79,160,0.45)]" />
                        </div>
                      </div>
                    </div>
                  </section>

                  <div
                    id="performance"
                    className="grid gap-6 xl:grid-cols-[1.45fr_0.55fr_0.55fr]"
                  >
                    <MetricTile
                      title="Skill-Based Gaming Engine"
                      label="Performance Overview"
                      note="Competitive matches • Real-time ranking • Player progression"
                      variant="ring"
                    />
                    <MetricTile
                      title="Mobile-First"
                      label="Growth Focus"
                      note="Fast gameplay • <5 min sessions • Scalable rewards"
                      variant="line"
                    />
                    <MetricTile
                      title="Community Growth"
                      label="Early adoption"
                      note="Early users • Feedback • Updates"
                      variant="points"
                    />
                  </div>

                  <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr]">
                    <section
                      id="system-play"
                      className="rounded-[28px] border border-white/6 bg-[#131945] p-6 shadow-[0_24px_80px_rgba(5,7,20,0.35)]"
                    >
                      <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-white">
                          Platform Overview
                        </h2>
                        <AnchorButton
                          href="#system-progress"
                          className="rounded-full p-1.5 text-white/70 hover:bg-white/5"
                        >
                          <Icon name="more" className="h-5 w-5" />
                        </AnchorButton>
                      </div>
                      <div className="mt-5 h-56 rounded-2xl bg-[#0f1431] px-4 py-4">
                        <div className="flex h-full flex-col justify-between">
                          <div className="grid flex-1 grid-cols-9 items-end gap-3">
                            {[12, 28, 21, 34, 29, 41, 36, 45, 33].map(
                              (value, index) => (
                                <div
                                  key={index}
                                  className="flex h-full items-end justify-center"
                                >
                                  <div
                                    className="w-full max-w-[26px] rounded-t-[10px] bg-gradient-to-t from-cyan-400 via-fuchsia-500 to-cyan-300 shadow-[0_0_20px_rgba(24,208,211,0.45)]"
                                    style={{ height: `${value}%` }}
                                  />
                                </div>
                              ),
                            )}
                          </div>
                          <div className="mt-3 flex justify-between text-[11px] uppercase tracking-[0.22em] text-white/35">
                            {[
                              "Play",
                              "Progress",
                              "Earn",
                              "Unlock",
                              "Fast",
                              "Rank",
                              "Reward",
                              "Mobile",
                              "Scale",
                            ].map((item) => (
                              <span key={item}>{item}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="mt-4 text-sm text-white/62">
                        Skill-based gaming engine • Competitive matches • Player
                        progression
                      </p>
                      <div className="mt-5 flex items-end gap-4">
                        <p className="font-display text-4xl font-semibold text-[#2f84ff]">
                          78.4%
                        </p>
                        <p className="text-sm text-emerald-400">Growth focus</p>
                      </div>
                    </section>

                    <section
                      id="system-progress"
                      className="rounded-[28px] border border-white/6 bg-[#131945] p-6 shadow-[0_24px_80px_rgba(5,7,20,0.35)]"
                    >
                      <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-white">
                          Growth Focus
                        </h2>
                        <AnchorButton
                          href="#features"
                          className="rounded-full p-1.5 text-white/70 hover:bg-white/5"
                        >
                          <Icon name="more" className="h-5 w-5" />
                        </AnchorButton>
                      </div>
                      <div className="mt-6 flex flex-col items-center gap-6">
                        <div className="grid h-32 w-32 place-items-center rounded-full bg-[conic-gradient(from_180deg,#ffcf3f_0%,#ff4fa0_35%,#3aa0ff_68%,#8eff3f_100%)] p-1">
                          <div className="grid h-full w-full place-items-center rounded-full bg-[#0b1027] text-center">
                            <div>
                              <p className="font-display text-3xl font-semibold text-white">
                                68%
                              </p>
                              <p className="text-xs text-white/55">
                                Total Views
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="w-full space-y-3">
                          {[
                            ["Skill Engine", 35, "#3aa0ff"],
                            ["Ranking System", 32, "#ff4fa0"],
                            ["Reward Logic", 33, "#8eff3f"],
                          ].map(([label, value, color]) => (
                            <div
                              key={label as string}
                              className="flex items-center justify-between text-sm"
                            >
                              <div className="flex items-center gap-3">
                                <span
                                  className="h-3 w-3 rounded-sm"
                                  style={{ backgroundColor: color as string }}
                                />
                                <span className="text-white/72">
                                  {label as string}
                                </span>
                              </div>
                              <span className="text-white/55">
                                {value as number}%
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </section>
                  </div>

                  <section
                    id="system-earn"
                    className="rounded-[28px] border border-white/6 bg-[#131945] p-6 shadow-[0_24px_80px_rgba(5,7,20,0.35)]"
                  >
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-semibold text-white">
                        Core System
                      </h2>
                      <AnchorButton
                        href="#trust"
                        className="rounded-full p-1.5 text-white/70 hover:bg-white/5"
                      >
                        <Icon name="more" className="h-5 w-5" />
                      </AnchorButton>
                    </div>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                      {systemSteps.map(([title, text], index) => (
                        <div
                          key={title}
                          className="rounded-2xl border border-white/8 bg-white/5 p-4"
                        >
                          <p className="text-sm uppercase tracking-[0.22em] text-cyan-300/80">
                            0{index + 1}
                          </p>
                          <h3 className="mt-3 text-xl font-semibold text-white">
                            {title}
                          </h3>
                          <p className="mt-2 text-sm leading-7 text-white/62">
                            {text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section
                    id="features"
                    className="grid gap-6 xl:grid-cols-[1fr_1fr]"
                  >
                    <div className="rounded-[28px] border border-white/6 bg-[#131945] p-6 shadow-[0_24px_80px_rgba(5,7,20,0.35)]">
                      <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-white">
                          Core Modules
                        </h2>
                        <AnchorButton
                          href="#roadmap"
                          className="rounded-full p-1.5 text-white/70 hover:bg-white/5"
                        >
                          <Icon name="more" className="h-5 w-5" />
                        </AnchorButton>
                      </div>
                      <div className="mt-5 grid gap-3">
                        {coreModules.map(([title, text, grad]) => (
                          <div
                            key={title}
                            className="rounded-2xl border border-white/8 bg-[#0f1431] p-4"
                          >
                            <div
                              className={`h-2 w-14 rounded-full bg-gradient-to-r ${grad}`}
                            />
                            <p className="mt-4 text-lg font-semibold text-white">
                              {title}
                            </p>
                            <p className="mt-1 text-sm text-white/62">{text}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div
                      id="trust"
                      className="rounded-[28px] border border-white/6 bg-[#131945] p-6 shadow-[0_24px_80px_rgba(5,7,20,0.35)]"
                    >
                      <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-white">
                          Market Reality
                        </h2>
                        <AnchorButton
                          href="#community"
                          className="rounded-full p-1.5 text-white/70 hover:bg-white/5"
                        >
                          <Icon name="more" className="h-5 w-5" />
                        </AnchorButton>
                      </div>
                      <div className="mt-5 space-y-3 text-sm text-white/72">
                        <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                          17% drop in activity
                        </div>
                        <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                          93% funding decline
                        </div>
                        <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                          300+ inactive projects
                        </div>
                      </div>
                      <div className="mt-5 rounded-[24px] border border-white/8 bg-[#0f1431] p-4">
                        <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">
                          Our Approach
                        </p>
                        <div className="mt-4 grid gap-3 text-sm text-white/72">
                          <div className="rounded-2xl bg-white/5 p-3">
                            Gameplay-first model
                          </div>
                          <div className="rounded-2xl bg-white/5 p-3">
                            No hype-driven token system
                          </div>
                          <div className="rounded-2xl bg-white/5 p-3">
                            Sustainable growth design
                          </div>
                          <div className="rounded-2xl bg-white/5 p-3">
                            Simple onboarding
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-[28px] border border-white/6 bg-[#131945] p-6 shadow-[0_24px_80px_rgba(5,7,20,0.35)]">
                      <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-white">
                          User Types
                        </h2>
                        <AnchorButton
                          href="#community"
                          className="rounded-full p-1.5 text-white/70 hover:bg-white/5"
                        >
                          <Icon name="more" className="h-5 w-5" />
                        </AnchorButton>
                      </div>
                      <div className="mt-5 grid gap-4 sm:grid-cols-3">
                        {userTypes.map(([title, lines]) => (
                          <div
                            key={title}
                            className="rounded-2xl border border-white/8 bg-white/5 p-4"
                          >
                            <h3 className="text-lg font-semibold text-white">
                              {title}
                            </h3>
                            <ul className="mt-3 space-y-2 text-sm leading-6 text-white/62">
                              {lines.map((line) => (
                                <li key={line}>{line}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[28px] border border-white/6 bg-[#131945] p-6 shadow-[0_24px_80px_rgba(5,7,20,0.35)]">
                      <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-white">
                          Platform Logic
                        </h2>
                        <AnchorButton
                          href="#faq"
                          className="rounded-full p-1.5 text-white/70 hover:bg-white/5"
                        >
                          <Icon name="more" className="h-5 w-5" />
                        </AnchorButton>
                      </div>
                      <div className="mt-5 rounded-2xl border border-white/8 bg-[#0f1431] p-4 text-sm text-white/72">
                        <p>Play → Earn points</p>
                        <p className="mt-3">Points → Unlock features</p>
                        <p className="mt-3">Rewards → Limited & controlled</p>
                        <p className="mt-3">Future → staking / governance</p>
                      </div>
                    </div>
                  </section>

                  <section
                    id="roadmap"
                    className="rounded-[28px] border border-white/6 bg-[#131945] p-6 shadow-[0_24px_80px_rgba(5,7,20,0.35)]"
                  >
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-semibold text-white">
                        Development Phases
                      </h2>
                      <AnchorButton
                        href="#community"
                        className="rounded-full p-1.5 text-white/70 hover:bg-white/5"
                      >
                        <Icon name="more" className="h-5 w-5" />
                      </AnchorButton>
                    </div>
                    <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                      {roadmap.map(([phase, text]) => (
                        <div
                          key={phase}
                          className="rounded-2xl border border-white/8 bg-white/5 p-4"
                        >
                          <p className="text-sm uppercase tracking-[0.22em] text-fuchsia-300/80">
                            {phase}
                          </p>
                          <p className="mt-3 text-sm leading-7 text-white/72">
                            {text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
                    <div
                      id="community"
                      className="rounded-[28px] border border-white/6 bg-[#131945] p-6 shadow-[0_24px_80px_rgba(5,7,20,0.35)]"
                    >
                      <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-white">
                          Community
                        </h2>
                        <AnchorButton
                          href="#faq"
                          className="rounded-full p-1.5 text-white/70 hover:bg-white/5"
                        >
                          <Icon name="more" className="h-5 w-5" />
                        </AnchorButton>
                      </div>
                      <div className="mt-5 rounded-2xl border border-white/8 bg-white/5 p-4 text-sm text-white/72">
                        Early users onboarding • Active community building •
                        Feedback-driven updates
                      </div>
                      <div className="mt-4 rounded-2xl border border-white/8 bg-[#0f1431] p-4">
                        <p className="text-sm uppercase tracking-[0.24em] text-white/45">
                          Growth Focus
                        </p>
                        <p className="mt-2 text-lg font-semibold text-white">
                          Join early and shape the platform
                        </p>
                      </div>
                    </div>

                    <div
                      id="faq"
                      className="rounded-[28px] border border-white/6 bg-[#131945] p-6 shadow-[0_24px_80px_rgba(5,7,20,0.35)]"
                    >
                      <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-white">
                          FAQ
                        </h2>
                        <AnchorButton
                          href="#welcome"
                          className="rounded-full p-1.5 text-white/70 hover:bg-white/5"
                        >
                          <Icon name="more" className="h-5 w-5" />
                        </AnchorButton>
                      </div>
                      <div className="mt-5 space-y-3">
                        {faq.map(([question, answer]) => (
                          <div
                            key={question}
                            className="rounded-2xl border border-white/8 bg-[#0f1431] px-4 py-3"
                          >
                            <p className="text-sm font-semibold text-white">
                              {question}
                            </p>
                            <p className="mt-1 text-sm text-white/60">
                              {answer}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  <section
                    id="cta"
                    className="rounded-[28px] border border-white/6 bg-[#131945] p-6 shadow-[0_24px_80px_rgba(5,7,20,0.35)]"
                  >
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                      <div className="max-w-2xl">
                        <p className="text-sm uppercase tracking-[0.24em] text-white/45">
                          Get Started
                        </p>
                        <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
                          Be part of a smarter Web3 gaming platform
                        </h2>
                        <p className="mt-3 text-sm leading-7 text-white/60">
                          Early-stage project. Features may evolve based on
                          development and feedback.
                        </p>
                      </div>
                      <div className="flex flex-col gap-3 sm:flex-row">
                        <AnchorButton
                          href="mailto:hello@aurag.example"
                          className="rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-3 text-center text-sm font-semibold text-white shadow-[0_12px_30px_rgba(58,160,255,0.28)]"
                        >
                          Join Waitlist
                        </AnchorButton>
                        <AnchorButton
                          href="#community"
                          className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                        >
                          Get Early Access
                        </AnchorButton>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
