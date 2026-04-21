"use client";

import { type ComponentType } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  Cpu,
  Gamepad2,
  Smartphone,
  ShieldCheck,
  Star,
  Zap,
} from "lucide-react";

type StatCardProps = {
  icon: ComponentType<{ className?: string }>;
  value: string;
  label: string;
  accent: string;
};

type InfoPanelProps = {
  title: string;
  items: string[];
};

type FuturisticButtonProps = {
  label: string;
  onClick?: () => void;
};

const stats: StatCardProps[] = [
  {
    icon: Clock3,
    value: "< 5 min",
    label: "Session length",
    accent: "Fast gameplay",
  },
  {
    icon: Zap,
    value: "Instant",
    label: "Flow",
    accent: "Match entry",
  },
  {
    icon: Smartphone,
    value: "Mobile-first",
    label: "Format",
    accent: "Lightweight UI",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function PlaySystemSection() {
  return (
    <section className="relative overflow-hidden bg-[#050814] px-4 py-12 sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(97,56,255,0.18),_transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.14),_transparent_20%),linear-gradient(180deg,rgba(4,7,20,0.9),rgba(4,7,20,1))]" />
      <div className="pointer-events-none absolute -left-24 top-12 h-56 w-56 rounded-full bg-[#7c3aed]/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-[#0ea5e9]/16 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-[32%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto max-w-[1320px]">
        <motion.div
          initial="hidden"
          animate="show"
          variants={reveal}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid gap-8 xl:grid-cols-[1.4fr_1fr]"
        >
          <div className="relative space-y-8 rounded-[32px] border border-fuchsia-500/15 bg-[#09101f]/65 p-8 shadow-[0_0_90px_rgba(124,58,237,0.12)] backdrop-blur-xl">
            <div className="absolute inset-x-6 top-6 h-16 rounded-[28px] border border-cyan-400/15 bg-white/5 blur-sm" />
            <div className="relative z-10 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-[#0c1324]/85 px-4 py-3 shadow-[0_0_20px_rgba(79,70,229,0.08)]">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#130d26] text-fuchsia-400 shadow-[0_0_24px_rgba(236,72,153,0.18)]">
                    <Gamepad2 className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-slate-400">
                      AuraG
                    </p>
                    <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">
                      System
                    </p>
                  </div>
                </div>
                <div className="ml-auto">
                  <FuturisticButton label="Open Progress" />
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.36em] text-fuchsia-400">
                  Play
                </p>
                <div className="space-y-4">
                  <h1 className="text-6xl font-[Orbitron] uppercase tracking-[-0.04em] text-white md:text-7xl">
                    PLAY
                  </h1>
                  <p className="text-xl font-semibold uppercase tracking-[0.24em] text-fuchsia-400">
                    Compete. Improve. Dominate.
                  </p>
                </div>
                <p className="max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
                  AuraG starts with gameplay. Jump into fast-paced, skill-based
                  matches built for real competition and real players.
                </p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            className="relative overflow-hidden rounded-[32px] border border-cyan-400/10 bg-[#07101f]/80 p-6 shadow-[0_0_120px_rgba(56,189,248,0.15)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.18),transparent_35%),radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),transparent_26%)]" />
            <div className="absolute top-4 left-4 h-24 w-24 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 blur-3xl" />
            <div className="absolute right-6 top-14 h-28 w-28 rounded-full border border-cyan-400/15 bg-cyan-300/10 blur-3xl" />
            <div className="absolute inset-x-5 bottom-6 h-28 rounded-3xl bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)]" />

            <div className="relative z-10 flex h-full flex-col gap-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                    Tactical hub
                  </p>
                  <p className="mt-2 text-2xl font-semibold uppercase tracking-[0.16em] text-white">
                    Core strike
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.22em] text-cyan-200">
                  <Cpu className="h-4 w-4 text-cyan-300" />
                  Active
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] border border-white/10 bg-[#091424]/85 p-5 backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    Session pulse
                  </p>
                  <p className="mt-4 text-5xl font-[Orbitron] tracking-[-0.06em] text-white">
                    72
                  </p>
                  <p className="mt-3 text-sm text-slate-300">Match readiness</p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-[#091424]/85 p-5 backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    Sync level
                  </p>
                  <p className="mt-4 text-5xl font-[Orbitron] tracking-[-0.06em] text-white">
                    98%
                  </p>
                  <p className="mt-3 text-sm text-slate-300">
                    System stability
                  </p>
                </div>
              </div>

              <div className="relative mt-4 flex h-[420px] items-center justify-center overflow-hidden rounded-[28px] border border-fuchsia-500/20 bg-[#040a14]/80">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(79,70,229,0.18),transparent_24%),radial-gradient(circle_at_top_left,_rgba(236,72,153,0.14),transparent_22%)]" />
                <div className="absolute -left-12 bottom-20 h-64 w-64 rounded-full bg-[#7c3aed]/20 blur-3xl" />
                <div className="absolute right-8 top-16 h-48 w-48 rounded-full bg-[#0ea5e9]/20 blur-3xl" />
                <div className="absolute inset-y-0 left-0 w-px bg-cyan-400/20" />
                <div className="absolute inset-y-0 right-0 w-px bg-fuchsia-500/15" />

                <div className="relative h-72 w-72 rounded-full border border-white/10 bg-gradient-to-br from-[#0f172a]/90 to-transparent shadow-[0_0_70px_rgba(56,189,248,0.25)]">
                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.24),transparent_50%)]" />
                  <div className="absolute inset-0 rounded-full border border-cyan-300/20" />
                  <div className="absolute left-6 top-10 h-24 w-24 rounded-3xl border border-cyan-400/20 bg-[#08101c]/90 shadow-[0_0_45px_rgba(59,130,246,0.15)]" />
                  <div className="absolute right-10 bottom-10 h-28 w-28 rounded-3xl border border-fuchsia-400/20 bg-[#10162b]/90 shadow-[0_0_45px_rgba(236,72,153,0.15)]" />
                  <div className="absolute inset-x-10 bottom-10 h-10 rounded-full bg-[#0f1120]/80 blur-sm" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={reveal}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="mt-10 grid gap-6 xl:grid-cols-2"
        >
          <InfoPanel
            title="How AuraG Works"
            items={[
              "Play matches to gain experience",
              "Progress through rankings and levels",
              "Earn utility-based rewards",
              "Unlock advanced platform features",
            ]}
          />
          <InfoPanel
            title="Key Principles"
            items={[
              "Gameplay-first approach",
              "Skill-based reward model",
              "No early token dependency",
              "Long-term sustainability",
            ]}
          />
        </motion.div>
      </div>
    </section>
  );
}

function SectionBadge({
  label,
  sublabel,
}: {
  label: string;
  sublabel: string;
}) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#08101f]/80 px-4 py-2 text-sm text-white shadow-[0_0_20px_rgba(124,58,237,0.1)]">
      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#130d26] text-fuchsia-400 shadow-[0_0_22px_rgba(236,72,153,0.18)]">
        <Gamepad2 className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
          {label}
        </p>
        <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">
          {sublabel}
        </p>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, value, label, accent }: StatCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#08111f]/90 p-6 shadow-[0_0_32px_rgba(79,70,229,0.08)] transition"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_30%)] opacity-40" />
      <div className="absolute inset-x-5 bottom-0 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-[#a855f7] opacity-50 blur-sm" />
      <div className="relative z-10 flex items-center gap-4">
        <span className="grid h-14 w-14 place-items-center rounded-3xl border border-cyan-300/20 bg-[#0b1422]/90 text-cyan-300 shadow-[0_0_18px_rgba(56,189,248,0.16)]">
          <Icon className="h-6 w-6" />
        </span>
        <div>
          <p className="text-4xl font-[Orbitron] tracking-tight text-white">
            {value}
          </p>
          <p className="mt-2 text-sm uppercase tracking-[0.25em] text-slate-400">
            {label}
          </p>
        </div>
      </div>
      <p className="mt-5 text-sm text-[#86e6ff]">{accent}</p>
    </motion.div>
  );
}

function FuturisticButton({ label, onClick }: FuturisticButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group inline-flex items-center justify-center gap-2 rounded-[18px] border border-cyan-400/30 bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-slate-950 shadow-[0_0_30px_rgba(56,189,248,0.24)] transition"
      aria-label={label}
    >
      {label}
      <ArrowRight className="h-4 w-4 text-slate-950" />
    </motion.button>
  );
}

function InfoPanel({ title, items }: InfoPanelProps) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#091021]/85 p-6 shadow-[0_0_40px_rgba(124,58,237,0.08)] backdrop-blur-xl">
      <div className="absolute -right-10 top-8 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-400/10 to-transparent blur-3xl" />
      <div className="absolute left-8 top-6 h-24 w-24 rounded-full bg-gradient-to-br from-fuchsia-500/10 to-transparent blur-3xl" />
      <div className="relative z-10">
        <p className="text-xs uppercase tracking-[0.32em] text-slate-500">
          {title.toUpperCase()}
        </p>
        <h3 className="mt-4 text-2xl font-semibold uppercase tracking-[-0.03em] text-white">
          {title}
        </h3>
        <div className="mt-6 space-y-3">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-white/5 bg-[#0f1724]/80 px-4 py-4 text-sm text-slate-200 transition"
            >
              <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-2xl bg-[#091423]/80 text-cyan-400 shadow-[0_0_18px_rgba(56,189,248,0.12)]">
                <ShieldCheck className="h-4 w-4" />
              </span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
