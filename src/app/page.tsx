"use client";

import {
  Cpu,
  Globe2,
  HelpCircle,
  Lock,
  Save,
  Shield,
  Sparkles,
  Star,
  TrendingUp,
  Truck,
  Waves,
} from "lucide-react";
import PlaySystemSection from "../components/PlaySystemSection";

const sidebarItems = [
  { label: "Core", icon: Cpu },
  { label: "Arena", icon: Star },
  { label: "Progress", icon: TrendingUp },
  { label: "Rewards", icon: Sparkles },
  { label: "Market", icon: Truck },
  { label: "Vault", icon: Lock },
  { label: "Ops", icon: Save },
  { label: "Telemetry", icon: Waves },
  { label: "Grid", icon: Globe2 },
  { label: "Security", icon: Shield },
  { label: "Support", icon: HelpCircle },
];

function SidebarNavigation() {
  return (
    <aside className="fixed left-6 top-6 z-50 hidden h-[calc(100vh-3rem)] w-60 rounded-[32px] border border-cyan-400/20 bg-[#060b17]/95 p-4 shadow-[0_0_60px_rgba(14,165,233,0.12)] backdrop-blur-xl lg:block">
      <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-[#09101f]/90 px-4 py-3 text-cyan-300 shadow-[0_0_20px_rgba(56,189,248,0.08)]">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-400/10 text-cyan-300">
          <Cpu className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-slate-400">
            Control
          </p>
          <p className="text-sm uppercase tracking-[0.28em] text-white">
            Panel
          </p>
        </div>
      </div>

      <nav className="mt-6 space-y-2 overflow-hidden rounded-[28px] border border-white/10 bg-[#07101c]/80 p-3">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className="group flex w-full items-center gap-3 rounded-2xl border border-transparent px-3 py-3 text-left text-sm uppercase tracking-[0.26em] text-slate-300 transition hover:border-cyan-400/20 hover:bg-white/5 hover:text-cyan-200"
            >
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#09121d] text-cyan-300 transition group-hover:bg-cyan-400/10">
                <Icon className="h-5 w-5" />
              </span>
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-6 rounded-[24px] border border-white/10 bg-[#09101f]/80 px-4 py-4 text-xs uppercase tracking-[0.32em] text-slate-500">
        <p className="text-slate-300">System ready</p>
        <p className="mt-2 text-[10px] uppercase tracking-[0.4em] text-cyan-200/80">
          AuraG Nexus
        </p>
      </div>
    </aside>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050814] text-white lg:pl-[18rem] xl:pl-[20rem]">
      <SidebarNavigation />
      <PlaySystemSection />
    </main>
  );
}
