import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight,
  Bot,
  PhoneCall,
  Workflow,
  Database,
  Target,
  Lightbulb,
  Code2,
  Users,
  BarChart3,
  Plug,
  Zap,
  LayoutDashboard,
  Check,
  Sparkles,
  ShieldCheck,
  Rocket,
  Clock,
  Building2,
  Stethoscope,
  Scale,
  Home as HomeIcon,
  ShoppingBag,
  GraduationCap,
  HardHat,
  Factory,
  Cloud,
  Megaphone,
  UtensilsCrossed,
  Star,
  Mail,
  MessageSquare,
  MapPin,
  Twitter,
  Linkedin,
  Github,
  ChevronRight,
  CircuitBoard,
  BrainCircuit,
  TrendingUp,
  FileText,
  Mic,
  Menu,
  X,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: LandingPage,
});

/* ------------------------------- BACKDROP ------------------------------- */

function AuroraBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#14b8a6]/25 blur-3xl animate-blob" />
      <div
        className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-[#38bdf8]/20 blur-3xl animate-blob"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-[#8b5cf6]/25 blur-3xl animate-blob"
        style={{ animationDelay: "-12s" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_20%,#0f172a_80%)]" />
    </div>
  );
}

/* --------------------------------- NAV ---------------------------------- */

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#solutions", label: "Solutions" },
  { href: "#process", label: "Process" },
  { href: "#industries", label: "Industries" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5 group">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#14b8a6] to-[#8b5cf6] shadow-glow">
        <Sparkles className="h-5 w-5 text-white" />
        <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#67e8f9]/0 to-[#8b5cf6]/50 opacity-0 group-hover:opacity-100 blur transition" />
      </span>
      <span className="font-display text-lg font-semibold tracking-tight">
        SofTech<span className="text-gradient-primary"> AI</span>
      </span>
    </a>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-5 py-3 transition-all ${
            scrolled ? "glass-strong shadow-elegant" : "glass"
          }`}
        >
          <Logo />
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium"
            >
              Book a call <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl glass"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden mt-2 rounded-2xl glass-strong p-4 animate-rise">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2 inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-medium"
              >
                Book a call <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

/* --------------------------------- HERO --------------------------------- */

function StatChip({
  value,
  label,
  icon,
}: {
  value: string;
  label: string;
  icon: ReactNode;
}) {
  return (
    <div className="glass rounded-2xl p-4 hover-lift">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#14b8a6]/25 to-[#8b5cf6]/25 text-[#67e8f9]">
          {icon}
        </div>
        <div>
          <div className="font-display text-xl font-semibold">{value}</div>
          <div className="text-xs text-muted-foreground">{label}</div>
        </div>
      </div>
    </div>
  );
}

function HeroDashboard() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 bg-gradient-to-tr from-[#14b8a6]/25 via-[#38bdf8]/15 to-[#8b5cf6]/25 blur-3xl rounded-[3rem]" />
      <div className="relative gradient-border rounded-3xl p-3 sm:p-4 glass-strong shadow-glow-lg">
        <div className="rounded-2xl bg-[#0b1220]/80 p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ef4444]/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#10b981]/70" />
            </div>
            <div className="text-[11px] text-muted-foreground font-mono">
              softech.ai / control-center
            </div>
            <div className="text-[11px] text-[#67e8f9] flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#10b981] animate-ping opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10b981]" />
              </span>
              Live
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { l: "Automations", v: "128", d: "+12" },
              { l: "Conversations", v: "24.7k", d: "+38%" },
              { l: "Hours saved", v: "3,412", d: "this mo." },
            ].map((s) => (
              <div key={s.l} className="rounded-xl bg-white/[0.03] border border-white/5 p-3">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {s.l}
                </div>
                <div className="mt-1 font-display text-xl font-semibold">{s.v}</div>
                <div className="text-[10px] text-[#67e8f9]">{s.d}</div>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl bg-white/[0.03] border border-white/5 p-4">
            <div className="flex items-center justify-between">
              <div className="text-xs text-muted-foreground">Revenue impact</div>
              <div className="text-[11px] text-[#67e8f9] font-mono">+$182,430</div>
            </div>
            <svg viewBox="0 0 300 80" className="mt-3 w-full h-16">
              <defs>
                <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="s" x1="0" x2="1">
                  <stop offset="0%" stopColor="#14b8a6" />
                  <stop offset="100%" stopColor="#38bdf8" />
                </linearGradient>
              </defs>
              <path
                d="M0 60 L30 55 L60 50 L90 40 L120 45 L150 30 L180 34 L210 22 L240 18 L270 10 L300 5 L300 80 L0 80 Z"
                fill="url(#g)"
              />
              <path
                d="M0 60 L30 55 L60 50 L90 40 L120 45 L150 30 L180 34 L210 22 L240 18 L270 10 L300 5"
                fill="none"
                stroke="url(#s)"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="mt-4 space-y-2.5">
            {[
              { icon: <Bot className="h-3.5 w-3.5" />, t: "Support agent resolved ticket #48211", c: "#14b8a6" },
              { icon: <Workflow className="h-3.5 w-3.5" />, t: "CRM automation enriched 42 leads", c: "#38bdf8" },
              { icon: <Mic className="h-3.5 w-3.5" />, t: "Voice agent booked 3 discovery calls", c: "#8b5cf6" },
            ].map((r, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-lg bg-white/[0.03] border border-white/5 p-2.5"
              >
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-md"
                  style={{ background: `${r.c}22`, color: r.c }}
                >
                  {r.icon}
                </span>
                <div className="text-xs">{r.t}</div>
                <span className="ml-auto text-[10px] text-muted-foreground font-mono">
                  {i + 1}m ago
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* floating cards */}
      <div className="hidden sm:block absolute -left-8 top-1/3 glass rounded-2xl p-3 shadow-elegant animate-rise" style={{ animationDelay: ".2s" }}>
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#14b8a6]/20 text-[#67e8f9]">
            <BrainCircuit className="h-5 w-5" />
          </div>
          <div>
            <div className="text-[10px] text-muted-foreground">Model uptime</div>
            <div className="text-sm font-semibold">99.98%</div>
          </div>
        </div>
      </div>
      <div className="hidden sm:block absolute -right-6 -bottom-6 glass rounded-2xl p-3 shadow-elegant animate-rise" style={{ animationDelay: ".4s" }}>
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#8b5cf6]/20 text-[#a78bfa]">
            <TrendingUp className="h-5 w-5" />
          </div>
          <div>
            <div className="text-[10px] text-muted-foreground">Pipeline lift</div>
            <div className="text-sm font-semibold">+247%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 sm:pt-40 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-rise">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#14b8a6] animate-ping opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#14b8a6]" />
              </span>
              Trusted AI partner for modern teams
            </div>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight">
              Build an <span className="text-gradient">AI-powered</span> business.
              <br />
              Automate work.
              <br />
              Scale faster.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
              SofTech AI Agency designs, builds and deploys custom AI systems, agents
              and automations that work 24/7 — so your team can focus on growth, not
              busywork.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold"
              >
                Book a free consultation
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="glass hover:bg-white/[0.06] inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition"
              >
                See our solutions
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg">
              <StatChip value="+250%" label="Lead generation" icon={<TrendingUp className="h-5 w-5" />} />
              <StatChip value="-80%" label="Manual work" icon={<Zap className="h-5 w-5" />} />
              <StatChip value="24/7" label="AI operations" icon={<Clock className="h-5 w-5" />} />
            </div>
          </div>

          <div className="lg:pl-8">
            <HeroDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- TRUSTED ------------------------------- */

const LOGOS = [
  "Nimbus", "Northwind", "Helix", "Vanta", "Corelane", "Quantic",
  "Meridian", "Beacon", "Lumen", "Everly", "Skyforge", "Parallax",
];

function TrustedBy() {
  return (
    <section className="py-16 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by modern teams shipping AI in production
        </p>
        <div className="mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-14 whitespace-nowrap animate-marquee">
            {[...LOGOS, ...LOGOS].map((n, i) => (
              <div
                key={i}
                className="font-display text-xl tracking-tight text-muted-foreground/70 flex items-center gap-2"
              >
                <span className="h-2 w-2 rounded-sm bg-gradient-to-br from-[#14b8a6] to-[#8b5cf6]" />
                {n}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- SECTION -------------------------------- */

function SectionHeader({
  eyebrow,
  title,
  description,
  center = true,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      <div
        className={`inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground ${
          center ? "" : ""
        }`}
      >
        <Sparkles className="h-3 w-3 text-[#67e8f9]" />
        {eyebrow}
      </div>
      <h2 className="mt-5 font-display text-4xl sm:text-5xl font-semibold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{description}</p>
      )}
    </div>
  );
}

/* -------------------------------- ABOUT -------------------------------- */

function About() {
  const cards = [
    {
      icon: <Rocket className="h-5 w-5" />,
      title: "Mission",
      body: "Give every business access to AI systems that were once reserved for the world's most advanced companies.",
    },
    {
      icon: <BrainCircuit className="h-5 w-5" />,
      title: "Vision",
      body: "A world where humans design, decide and create — while AI handles the repetitive work behind every workflow.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Values",
      body: "Craftsmanship, transparency, measurable ROI and enterprise-grade security in everything we ship.",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Why teams trust us",
      body: "Senior AI engineers, product designers and automation experts — accountable end-to-end for outcomes.",
    },
  ];

  return (
    <section id="about" className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About SofTech AI"
          title={
            <>
              An AI studio built for <span className="text-gradient">operators</span>,
              not experiments
            </>
          }
          description="We are a compact team of AI engineers, automation architects and product designers helping ambitious companies deploy real, revenue-generating AI systems."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c) => (
            <div
              key={c.title}
              className="gradient-border rounded-2xl p-6 hover-lift"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#14b8a6]/25 to-[#8b5cf6]/25 text-[#67e8f9]">
                {c.icon}
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ SERVICES ------------------------------- */

const SERVICES = [
  { icon: Bot, title: "AI Chatbots", body: "Conversational agents for support, sales and internal ops — trained on your data." },
  { icon: PhoneCall, title: "AI Voice Agents", body: "Human-like voice callers that qualify leads, book meetings and handle inbound calls 24/7." },
  { icon: Workflow, title: "Workflow Automation", body: "Connect apps, remove manual steps and orchestrate end-to-end business processes." },
  { icon: Database, title: "CRM Automation", body: "Enrichment, scoring, routing and follow-ups running silently inside your CRM." },
  { icon: Target, title: "Lead Generation", body: "AI systems that source, research and warm up qualified prospects on autopilot." },
  { icon: Lightbulb, title: "AI Consulting", body: "Strategy, roadmap and prioritization — where AI actually moves your P&L." },
  { icon: Code2, title: "Custom AI Development", body: "Bespoke AI products, agents and copilots designed around your workflows." },
  { icon: Users, title: "Internal AI Assistants", body: "Private assistants that answer, summarize and act across internal knowledge." },
  { icon: BarChart3, title: "Business Intelligence", body: "AI-powered dashboards that surface insight, anomalies and next best actions." },
  { icon: Plug, title: "AI Integrations", body: "Native integrations with your stack — Slack, HubSpot, Notion, Salesforce and more." },
  { icon: Zap, title: "API Automation", body: "Robust event-driven pipelines with retries, observability and full audit trails." },
  { icon: LayoutDashboard, title: "Custom Dashboards", body: "Beautiful internal tools and dashboards that make AI outputs actionable." },
];

function Services() {
  return (
    <section id="services" className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title={
            <>
              Everything you need to run an <span className="text-gradient">AI-native</span> company
            </>
          }
          description="From strategy to shipped systems — we design, build and operate the AI stack that quietly runs behind your business."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl glass p-6 hover-lift"
            >
              <div className="absolute inset-x-0 -top-24 h-40 bg-gradient-to-b from-[#14b8a6]/15 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#14b8a6] to-[#8b5cf6] shadow-glow">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="relative mt-5 font-display text-lg font-semibold">{title}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
              <div className="relative mt-5 inline-flex items-center gap-1.5 text-xs text-[#67e8f9] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- PROCESS ------------------------------- */

const STEPS = [
  { n: "01", title: "Discovery", body: "We audit your business, workflows and data. Together we identify the highest-ROI AI opportunities." },
  { n: "02", title: "Strategy", body: "A clear roadmap: what to build, what to automate, which models to use, and how success is measured." },
  { n: "03", title: "Development", body: "Our engineers build production-ready AI systems using modern LLMs, agents and secure architecture." },
  { n: "04", title: "Deployment", body: "We ship, integrate with your existing tools and train your team to operate the new AI systems." },
  { n: "05", title: "Optimization", body: "Continuous improvement — new data, new models, new automations. Compounding ROI over time." },
];

function Process() {
  return (
    <section id="process" className="py-28 sm:py-36 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How we work"
          title={
            <>
              A proven path from idea to <span className="text-gradient">deployed AI</span>
            </>
          }
          description="Five stages, one accountable team. No hand-offs, no black boxes, no wasted quarters."
        />
        <div className="mt-16 relative">
          <div className="hidden lg:block absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-transparent via-[#14b8a6]/60 to-transparent" />
          <div className="grid lg:grid-cols-5 gap-6">
            {STEPS.map((s, i) => (
              <div key={s.n} className="relative">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl gradient-border glass-strong mx-auto">
                  <span className="font-display text-lg text-gradient-primary font-semibold">
                    {s.n}
                  </span>
                  {i === 0 && (
                    <span className="absolute inset-0 rounded-2xl animate-pulse-ring" />
                  )}
                </div>
                <div className="mt-6 text-center">
                  <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ SOLUTIONS ------------------------------ */

const SOLUTIONS = [
  { icon: MessageSquare, name: "Customer Support AI", tag: "Support" },
  { icon: TrendingUp, name: "Sales AI", tag: "Revenue" },
  { icon: Megaphone, name: "Marketing AI", tag: "Growth" },
  { icon: Users, name: "Internal AI", tag: "Ops" },
  { icon: BarChart3, name: "Finance AI", tag: "Finance" },
  { icon: Building2, name: "HR AI", tag: "People" },
  { icon: Workflow, name: "Operations AI", tag: "Ops" },
  { icon: FileText, name: "Document AI", tag: "Docs" },
  { icon: Mic, name: "Voice AI", tag: "Voice" },
  { icon: CircuitBoard, name: "Analytics AI", tag: "Data" },
];

function Solutions() {
  return (
    <section id="solutions" className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="AI solutions"
          title={
            <>
              Purpose-built AI for every part of your <span className="text-gradient">business</span>
            </>
          }
          description="Ten focused domains. One coherent AI operating layer across your company."
        />
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {SOLUTIONS.map(({ icon: Icon, name, tag }) => (
            <div
              key={name}
              className="group rounded-2xl glass p-5 hover-lift text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#14b8a6]/20 via-[#38bdf8]/15 to-[#8b5cf6]/20 border border-white/5">
                <Icon className="h-5 w-5 text-[#67e8f9]" />
              </div>
              <div className="mt-4 font-display text-sm font-semibold">{name}</div>
              <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                {tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ INDUSTRIES ----------------------------- */

const INDUSTRIES = [
  { icon: Stethoscope, name: "Healthcare" },
  { icon: HomeIcon, name: "Real Estate" },
  { icon: Scale, name: "Legal" },
  { icon: BarChart3, name: "Finance" },
  { icon: ShoppingBag, name: "Ecommerce" },
  { icon: GraduationCap, name: "Education" },
  { icon: HardHat, name: "Construction" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Cloud, name: "SaaS" },
  { icon: Megaphone, name: "Marketing" },
  { icon: UtensilsCrossed, name: "Hospitality" },
];

function Industries() {
  return (
    <section id="industries" className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Industries"
          title={
            <>
              Industry-aware AI for <span className="text-gradient">regulated & complex</span> businesses
            </>
          }
          description="We speak the language of your industry — its data, its compliance and its unit economics."
        />
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {INDUSTRIES.map(({ icon: Icon, name }) => (
            <div
              key={name}
              className="group flex items-center gap-4 rounded-2xl glass p-5 hover-lift"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04] border border-white/5 text-[#67e8f9] group-hover:bg-gradient-to-br group-hover:from-[#14b8a6] group-hover:to-[#8b5cf6] group-hover:text-white transition">
                <Icon className="h-5 w-5" />
              </div>
              <span className="font-display font-semibold">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- CASE STUDIES ---------------------------- */

const CASES = [
  {
    tag: "SaaS · Series B",
    title: "AI SDR replaces 3 outbound reps",
    challenge: "Manual outbound consumed 60% of the SDR team's time with declining reply rates.",
    solution: "Custom AI SDR with research, personalization and multi-channel outreach.",
    results: [
      { k: "+250%", v: "Qualified leads" },
      { k: "-80%", v: "Manual work" },
      { k: "6 wks", v: "To live" },
    ],
  },
  {
    tag: "Ecommerce · DTC",
    title: "24/7 support agent handles 78% of tickets",
    challenge: "Ticket volume was scaling faster than headcount, hurting CSAT and margins.",
    solution: "Voice + chat AI agent trained on product catalog, policies and past tickets.",
    results: [
      { k: "78%", v: "Auto-resolved" },
      { k: "+60%", v: "CSAT lift" },
      { k: "24/7", v: "Coverage" },
    ],
  },
  {
    tag: "B2B Services",
    title: "Ops automation saves 3,400 hours / month",
    challenge: "Repetitive back-office workflows across 6 tools were bottlenecking growth.",
    solution: "Event-driven automations, AI classification and internal copilots.",
    results: [
      { k: "3.4k hrs", v: "Saved / mo" },
      { k: "12x", v: "Faster ops" },
      { k: "0", v: "Errors in 90d" },
    ],
  },
];

function CaseStudies() {
  return (
    <section id="cases" className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Case studies"
          title={<>Outcomes over <span className="text-gradient">outputs</span></>}
          description="A snapshot of what our AI systems deliver when they hit production."
        />
        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {CASES.map((c) => (
            <article
              key={c.title}
              className="group gradient-border rounded-3xl p-7 hover-lift flex flex-col"
            >
              <div className="text-[11px] uppercase tracking-widest text-[#67e8f9]">{c.tag}</div>
              <h3 className="mt-3 font-display text-2xl font-semibold leading-tight">
                {c.title}
              </h3>
              <div className="mt-5 space-y-3 text-sm">
                <p><span className="text-muted-foreground">Challenge — </span>{c.challenge}</p>
                <p><span className="text-muted-foreground">Solution — </span>{c.solution}</p>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 pt-6 border-t border-white/5">
                {c.results.map((r) => (
                  <div key={r.v}>
                    <div className="font-display text-xl font-semibold text-gradient-primary">
                      {r.k}
                    </div>
                    <div className="text-[11px] text-muted-foreground">{r.v}</div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- WHY CHOOSE ------------------------------ */

const COMPARE = [
  { row: "Time to first result", trad: "3–6 months", us: "2–6 weeks" },
  { row: "AI-first mindset", trad: "Bolt-on features", us: "Native AI systems" },
  { row: "Talent quality", trad: "Junior generalists", us: "Senior AI engineers" },
  { row: "Ownership of results", trad: "Deliverables", us: "Outcomes & ROI" },
  { row: "Custom solutions", trad: "Templates & plugins", us: "Bespoke to your ops" },
  { row: "Partnership", trad: "Project & gone", us: "Long-term operators" },
  { row: "Enterprise quality", trad: "Best effort", us: "SOC-ready standards" },
];

function WhyUs() {
  return (
    <section id="why" className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why SofTech AI"
          title={<>The difference between <span className="text-gradient">shipping</span> and shelfware</>}
        />
        <div className="mt-14 gradient-border rounded-3xl overflow-hidden">
          <div className="grid grid-cols-3 bg-white/[0.02]">
            <div className="p-6 text-xs uppercase tracking-widest text-muted-foreground">
              Dimension
            </div>
            <div className="p-6 text-xs uppercase tracking-widest text-muted-foreground border-l border-white/5">
              Traditional agency
            </div>
            <div className="p-6 text-xs uppercase tracking-widest text-[#67e8f9] border-l border-white/5">
              SofTech AI Agency
            </div>
          </div>
          {COMPARE.map((r, i) => (
            <div
              key={r.row}
              className={`grid grid-cols-3 text-sm ${i % 2 ? "bg-white/[0.015]" : ""}`}
            >
              <div className="p-5 font-medium">{r.row}</div>
              <div className="p-5 text-muted-foreground border-l border-white/5">{r.trad}</div>
              <div className="p-5 border-l border-white/5 flex items-center gap-2">
                <Check className="h-4 w-4 text-[#14b8a6]" />
                <span>{r.us}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- TESTIMONIALS ----------------------------- */

const TESTIMONIALS = [
  {
    quote: "SofTech shipped an AI SDR in six weeks that outperformed a team of three. It fundamentally changed our pipeline math.",
    name: "Elena Marchetti",
    role: "VP Revenue, Northwind",
    initials: "EM",
    color: "from-[#14b8a6] to-[#38bdf8]",
  },
  {
    quote: "Their team blends senior engineering with product taste. Every automation they built is still running flawlessly a year later.",
    name: "James Okafor",
    role: "COO, Helix Health",
    initials: "JO",
    color: "from-[#38bdf8] to-[#8b5cf6]",
  },
  {
    quote: "We replaced 14 fragile Zapier flows with one AI-powered ops layer. Our team finally trusts our internal tooling.",
    name: "Priya Raman",
    role: "Head of Ops, Meridian",
    initials: "PR",
    color: "from-[#8b5cf6] to-[#67e8f9]",
  },
];

function Testimonials() {
  return (
    <section className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Testimonials"
          title={<>Loved by teams shipping <span className="text-gradient">real AI</span></>}
        />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="glass rounded-3xl p-7 hover-lift">
              <div className="flex items-center gap-1 text-[#f59e0b]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-[15px] leading-relaxed text-foreground/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${t.color} font-semibold text-sm text-white`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- PRICING ------------------------------- */

const PLANS = [
  {
    name: "Starter",
    price: "$2,500",
    period: "/ month",
    tagline: "For founders validating AI use cases.",
    features: [
      "1 AI system (chatbot, automation or agent)",
      "Integrations with up to 5 tools",
      "Weekly optimization loop",
      "Email & chat support",
    ],
    cta: "Start with Starter",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$6,900",
    period: "/ month",
    tagline: "For teams scaling AI across departments.",
    features: [
      "Up to 3 AI systems in production",
      "Custom AI agents & voice agents",
      "CRM & ops automation suite",
      "Dedicated engineer + weekly reviews",
    ],
    cta: "Choose Growth",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    tagline: "For companies building an AI operating layer.",
    features: [
      "Unlimited AI systems & agents",
      "Private models & SSO / SOC-ready",
      "Custom SLAs & on-call support",
      "Fractional AI CTO advisory",
    ],
    cta: "Talk to sales",
    highlight: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Pricing"
          title={<>Simple pricing. <span className="text-gradient">Serious ROI.</span></>}
          description="Every plan includes a senior team, transparent milestones and measurable outcomes."
        />
        <div className="mt-14 grid lg:grid-cols-3 gap-6 items-stretch">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-3xl p-7 ${
                p.highlight
                  ? "gradient-border glass-strong shadow-glow-lg lg:scale-[1.03]"
                  : "glass hover-lift"
              }`}
            >
              {p.highlight && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#14b8a6] to-[#8b5cf6] text-white border-0 px-3 py-1 shadow-glow">
                  Recommended
                </Badge>
              )}
              <div>
                <div className="font-display text-lg font-semibold">{p.name}</div>
                <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
              </div>
              <div className="mt-6 flex items-end gap-1">
                <span className="font-display text-4xl font-semibold">{p.price}</span>
                {p.period && <span className="pb-1 text-sm text-muted-foreground">{p.period}</span>}
              </div>
              <ul className="mt-6 space-y-3 text-sm flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#14b8a6]/15 text-[#14b8a6]">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-7 inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-3 text-sm font-semibold ${
                  p.highlight
                    ? "btn-primary"
                    : "glass hover:bg-white/[0.08] transition"
                }`}
              >
                {p.cta} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- FAQ --------------------------------- */

const FAQS = [
  {
    q: "How much does an AI project actually cost?",
    a: "Most projects start at $2.5k–$10k per month depending on scope. During discovery we scope a fixed monthly plan tied to clear outcomes — no surprise invoices.",
  },
  {
    q: "How long does implementation take?",
    a: "First AI system in production in 2–6 weeks. Full multi-system rollouts usually take one quarter. We ship in weekly increments, not big-bang launches.",
  },
  {
    q: "What kind of support do you provide after launch?",
    a: "Every plan includes ongoing optimization, monitoring and iteration. Growth and Enterprise plans include a dedicated engineer and on-call SLAs.",
  },
  {
    q: "Which tools & platforms do you integrate with?",
    a: "HubSpot, Salesforce, Slack, Notion, Zendesk, Intercom, Shopify, Stripe, Google Workspace, Microsoft 365 and any REST/GraphQL API. If it has an API, we can wire it.",
  },
  {
    q: "How do you handle security and data privacy?",
    a: "We build with SOC 2-aligned practices, private model deployments where needed, encrypted secrets, audit logging and strict data isolation per client.",
  },
  {
    q: "How do you measure ROI?",
    a: "Every engagement starts with a shared success metric — pipeline, hours saved, cost reduced, CSAT lifted. You see progress in a weekly outcomes report.",
  },
];

function Faq() {
  return (
    <section id="faq" className="py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title={<>Answers before you <span className="text-gradient">even ask</span></>}
        />
        <div className="mt-12 gradient-border rounded-3xl p-2 sm:p-4">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`i${i}`}
                className="border-white/5 last:border-0"
              >
                <AccordionTrigger className="text-left font-display text-base sm:text-lg font-semibold px-3 sm:px-4 hover:no-underline hover:text-[#67e8f9]">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-3 sm:px-4 text-muted-foreground text-[15px] leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- CONTACT ------------------------------- */

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thanks — we'll be in touch within one business day.");
      formRef.current?.reset();
    }, 900);
  }

  return (
    <section id="contact" className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="gradient-border rounded-[2rem] overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="relative p-10 sm:p-14 bg-gradient-to-br from-[#0f172a] via-[#0f172a] to-[#1e293b]">
              <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#14b8a6]/25 blur-3xl" />
              <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#8b5cf6]/25 blur-3xl" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
                  <Sparkles className="h-3 w-3 text-[#67e8f9]" /> Free 30-min consultation
                </div>
                <h2 className="mt-5 font-display text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
                  Let's build your <span className="text-gradient">AI future</span>
                </h2>
                <p className="mt-4 text-muted-foreground text-lg leading-relaxed max-w-md">
                  Tell us about your business. We'll come back with a clear
                  recommendation, an outcome-based scope and a realistic timeline.
                </p>

                <ul className="mt-8 space-y-4 text-sm">
                  {[
                    { icon: Mail, k: "Email", v: "hello@softech.ai" },
                    { icon: PhoneCall, k: "Call", v: "+1 (415) 555-0117" },
                    { icon: MapPin, k: "Studio", v: "Remote-first · San Francisco · Lisbon" },
                  ].map((c) => (
                    <li key={c.k} className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.05] border border-white/5 text-[#67e8f9]">
                        <c.icon className="h-4 w-4" />
                      </span>
                      <div>
                        <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                          {c.k}
                        </div>
                        <div className="font-medium">{c.v}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-8 sm:p-12 bg-[#0b1220]/60">
              <form ref={formRef} onSubmit={onSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full name</Label>
                    <Input id="name" required placeholder="Jane Doe" className="bg-white/[0.04] border-white/10" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" required placeholder="Acme Inc." className="bg-white/[0.04] border-white/10" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Work email</Label>
                    <Input id="email" type="email" required placeholder="jane@acme.com" className="bg-white/[0.04] border-white/10" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="+1 (000) 000-0000" className="bg-white/[0.04] border-white/10" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Service interested in</Label>
                    <Select>
                      <SelectTrigger className="bg-white/[0.04] border-white/10">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {["AI Chatbots", "AI Voice Agents", "Workflow Automation", "Custom AI Development", "AI Consulting", "Other"].map(
                          (s) => (
                            <SelectItem key={s} value={s}>{s}</SelectItem>
                          )
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Budget</Label>
                    <Select>
                      <SelectTrigger className="bg-white/[0.04] border-white/10">
                        <SelectValue placeholder="Monthly budget" />
                      </SelectTrigger>
                      <SelectContent>
                        {["< $5k", "$5k – $15k", "$15k – $50k", "$50k+"].map((s) => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Timeline</Label>
                  <Select>
                    <SelectTrigger className="bg-white/[0.04] border-white/10">
                      <SelectValue placeholder="When do you want to start?" />
                    </SelectTrigger>
                    <SelectContent>
                      {["ASAP", "In 1 month", "In 1 quarter", "Just exploring"].map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Tell us about your project</Label>
                  <Textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="What problem are you trying to solve with AI?"
                    className="bg-white/[0.04] border-white/10"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full btn-primary rounded-full py-6 text-sm font-semibold"
                >
                  {submitting ? "Sending…" : "Let's build your AI future"}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
                <p className="text-[11px] text-center text-muted-foreground">
                  By submitting you agree to our privacy policy. No spam — ever.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- FOOTER ------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-white/5 pt-20 pb-10 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              SofTech AI Agency designs and builds AI systems that quietly run behind
              the world's most ambitious companies.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Subscribed. Welcome aboard.");
              }}
              className="mt-6 flex items-center gap-2 max-w-sm"
            >
              <Input
                type="email"
                required
                placeholder="you@company.com"
                className="bg-white/[0.04] border-white/10"
              />
              <Button type="submit" className="btn-primary rounded-full px-4">
                Subscribe
              </Button>
            </form>
          </div>

          {[
            { title: "Services", items: ["AI Chatbots", "AI Voice Agents", "Workflow Automation", "Custom AI"] },
            { title: "Company", items: ["About", "Case studies", "Pricing", "Contact"] },
            { title: "Resources", items: ["Playbooks", "AI Readiness Guide", "Docs", "Privacy Policy"] },
          ].map((col) => (
            <div key={col.title}>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                {col.title}
              </div>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.items.map((i) => (
                  <li key={i}>
                    <a href="#" className="text-foreground/80 hover:text-[#67e8f9] transition">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} SofTech AI Agency. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            {[Twitter, Linkedin, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-9 w-9 items-center justify-center rounded-lg glass hover:bg-white/[0.08] transition text-muted-foreground hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-5 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------- PAGE --------------------------------- */

function LandingPage() {
  return (
    <div className="relative min-h-screen text-foreground">
      <AuroraBackdrop />
      <Nav />
      <main>
        <Hero />
        <TrustedBy />
        <About />
        <Services />
        <Process />
        <Solutions />
        <Industries />
        <CaseStudies />
        <WhyUs />
        <Testimonials />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
