import { createFileRoute } from "@tanstack/react-router";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
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

const NAV_LINKS = {
  en: [
    { href: "#services", label: "Services" },
    { href: "#solutions", label: "Solutions" },
    { href: "#process", label: "Process" },
    { href: "#industries", label: "Industries" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ],
  es: [
    { href: "#services", label: "Servicios" },
    { href: "#solutions", label: "Soluciones" },
    { href: "#process", label: "Proceso" },
    { href: "#industries", label: "Industrias" },
    { href: "#pricing", label: "Precios" },
    { href: "#faq", label: "FAQ" },
  ],
} as const;

type Language = "en" | "es";

const COPY = {
  en: {
    contact: "Contact",
    bookCall: "Book a call",
    openMenu: "Open menu",
    trustBadge: "Trusted AI partner for modern teams",
    heroTitleA: "Build an",
    heroTitleB: "AI-powered",
    heroTitleC: "business.",
    heroTitleD: "Save time.",
    heroTitleE: "Automate work.",
    heroTitleF: "Scale faster.",
    heroDescription:
      "SofTech AI Agency designs, builds and deploys custom AI systems, agents and automations that work 24/7 so your team can focus on growth, not busywork.",
    heroPrimaryCta: "Book a free consultation",
    heroSecondaryCta: "See our solutions",
    statLeadGen: "Lead generation",
    statManualWork: "Manual work",
    statAiOps: "AI operations",
    dashboardLive: "Live",
    dashboardAutomations: "Automations",
    dashboardConversations: "Conversations",
    dashboardHoursSaved: "Hours saved",
    dashboardThisMonth: "this mo.",
    dashboardRevenueImpact: "Revenue impact",
    dashboardFeed1: "Support agent resolved ticket #48211",
    dashboardFeed2: "CRM automation enriched 42 leads",
    dashboardFeed3: "Voice agent booked 3 discovery calls",
    dashboardAgo: "m ago",
    dashboardUptime: "Model uptime",
    dashboardPipelineLift: "Pipeline lift",
    trustedBy: "Trusted by modern teams shipping AI in production",
    contactBadge: "Free 30-min consultation",
    contactTitleA: "Let's build your",
    contactTitleB: "AI future",
    contactDescription:
      "Tell us about your business. We'll come back with a clear recommendation, an outcome-based scope and a realistic timeline.",
    name: "Full name",
    company: "Company",
    workEmail: "Work email",
    phone: "Phone",
    serviceInterested: "Service interested in",
    selectService: "Select a service",
    budget: "Budget",
    monthlyBudget: "Monthly budget",
    timeline: "Timeline",
    startWhen: "When do you want to start?",
    projectPrompt: "Tell us about your project",
    projectPlaceholder: "What problem are you trying to solve with AI?",
    sending: "Sending...",
    submitCta: "Let's build your AI future",
    legalDisclaimer: "By submitting you agree to our privacy policy. No spam ever.",
    serviceOther: "Other",
    timelineAsap: "ASAP",
    timelineMonth: "In 1 month",
    timelineQuarter: "In 1 quarter",
    timelineExplore: "Just exploring",
    footerDescription:
      "SofTech AI Agency designs and builds AI systems that quietly run behind the world's most ambitious companies.",
    subscribedToast: "Subscribed. Welcome aboard.",
    subscribe: "Subscribe",
    privacy: "Privacy",
    terms: "Terms",
    rights: "All rights reserved.",
    thanksToast: "Thanks, we'll be in touch within one business day.",
  },
  es: {
    contact: "Contacto",
    bookCall: "Agendar llamada",
    openMenu: "Abrir menú",
    trustBadge: "Aliado de IA para equipos modernos",
    heroTitleA: "Construye un",
    heroTitleB: "negocio con IA",
    heroTitleC: ".",
    heroTitleD: "Ahorra tiempo.",
    heroTitleE: "Automatiza  el trabajo.",
    heroTitleF: "Escala aún más rápido.",
    heroDescription:
      "SofTech AI Agency diseña, construye e implementa sistemas, agentes y automatizaciones de IA que trabajan 24/7 para que tu equipo se enfoque en crecer.",
    heroPrimaryCta: "Agendar consulta gratis",
    heroSecondaryCta: "Ver soluciones",
    statManualWork: "Trabajo manual",
    statAiOps: "Operaciones de IA",
    statLeadGen: "Generación de leads",
    dashboardLive: "En vivo",
    dashboardAutomations: "Automatizaciones",
    dashboardConversations: "Conversaciones",
    dashboardHoursSaved: "Horas ahorradas",
    dashboardThisMonth: "este mes",
    dashboardRevenueImpact: "Impacto en ingresos",
    dashboardFeed1: "Agente de soporte resolvió ticket #48211",
    dashboardFeed2: "Automatización CRM enriqueció 42 leads",
    dashboardFeed3: "Agente de voz agendó 3 llamadas discovery",
    dashboardAgo: "min",
    dashboardUptime: "Disponibilidad del modelo",
    dashboardPipelineLift: "Aumento de pipeline",
    trustedBy: "Con la confianza de equipos modernos que lanzan IA en producción",
    contactBadge: "Consulta gratis de 30 min",
    contactTitleA: "Construyamos tu",
    contactTitleB: "futuro con IA",
    contactDescription:
      "Contanos sobre tu negocio. Volvemos con una recomendación clara, alcance por resultados y cronograma realista.",
    name: "Nombre completo",
    company: "Empresa",
    workEmail: "Email laboral",
    phone: "Teléfono",
    serviceInterested: "Servicio de interés",
    selectService: "Selecciona un servicio",
    budget: "Presupuesto",
    monthlyBudget: "Presupuesto mensual",
    timeline: "Plazos",
    startWhen: "¿Cuándo quieres empezar?",
    projectPrompt: "Contanos sobre tu proyecto",
    projectPlaceholder: "¿Qué problema quieres resolver con IA?",
    sending: "Enviando...",
    submitCta: "Construyamos tu futuro con IA",
    legalDisclaimer: "Al enviar aceptas nuestra política de privacidad. Cero spam.",
    serviceOther: "Otro",
    timelineAsap: "Lo antes posible",
    timelineMonth: "En 1 mes",
    timelineQuarter: "En 1 trimestre",
    timelineExplore: "Solo explorando",
    footerDescription:
      "SofTech AI Agency diseña y construye sistemas de IA que operan en segundo plano para empresas ambiciosas.",
    subscribedToast: "Suscripción confirmada. Bienvenido.",
    subscribe: "Suscribirse",
    privacy: "Privacidad",
    terms: "Términos",
    rights: "Todos los derechos reservados.",
    thanksToast: "Gracias, te contactaremos dentro de un día hábil.",
  },
} as const;

type Copy = Record<keyof (typeof COPY)["en"], string>;

const SEO_COPY = {
  en: {
    title: "SofTech AI Agency - AI Solutions & Intelligent Automations",
    description:
      "SofTech AI Agency builds enterprise-grade AI systems, chatbots, voice agents and automations that grow revenue, cut cost and scale operations 24/7.",
    ogTitle: "SofTech AI Agency - AI Solutions & Intelligent Automations",
    ogDescription:
      "We build AI systems that work while you sleep. Automation, AI agents and custom AI for SMBs, startups and enterprises.",
    twitterTitle: "SofTech AI Agency",
    twitterDescription: "AI Solutions. Intelligent Automations. Real Business Growth.",
  },
  es: {
    title: "SofTech AI Agency - Soluciones IA y Automatizaciones Inteligentes",
    description:
      "SofTech AI Agency construye sistemas de IA empresariales, chatbots, agentes de voz y automatizaciones para crecer ingresos, reducir costos y escalar operaciones 24/7.",
    ogTitle: "SofTech AI Agency - Soluciones IA y Automatizaciones Inteligentes",
    ogDescription:
      "Construimos sistemas de IA que trabajan mientras duermes. Automatización, agentes IA y desarrollo IA a medida para empresas.",
    twitterTitle: "SofTech AI Agency",
    twitterDescription: "Soluciones IA. Automatizaciones inteligentes. Crecimiento real.",
  },
} as const;

const I18N_CONTEXT = createContext<{
  lang: Language;
  setLang: (next: Language) => void;
  copy: Copy;
} | null>(null);

function useI18n() {
  const ctx = useContext(I18N_CONTEXT);
  if (!ctx) {
    throw new Error("useI18n must be used within I18N_CONTEXT provider");
  }
  return ctx;
}

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5 group leading-none">
      <img
        src="/logo.png"
        alt="SofTech AI"
        className="block h-15 w-auto -translate-y-1.5"
      />
    </a>
  );
}

function Nav() {
  const { lang, setLang, copy } = useI18n();
  const navLinks = NAV_LINKS[lang];
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
            {navLinks.map((l) => (
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
            <div className="rounded-full border border-white/10 p-1 flex items-center gap-1">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`rounded-full px-2.5 py-1 text-xs transition ${
                  lang === "en" ? "bg-white/15 text-foreground" : "text-muted-foreground"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("es")}
                className={`rounded-full px-2.5 py-1 text-xs transition ${
                  lang === "es" ? "bg-white/15 text-foreground" : "text-muted-foreground"
                }`}
              >
                ES
              </button>
            </div>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {copy.contact}
            </a>
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium"
            >
              {copy.bookCall} <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl glass"
            aria-label={copy.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden mt-2 rounded-2xl glass-strong p-4 animate-rise">
            <div className="flex flex-col gap-1">
              {navLinks.map((l) => (
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
                {copy.bookCall} <ArrowRight className="h-4 w-4" />
              </a>
              <div className="mt-2 flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`rounded-full px-3 py-1 text-xs transition ${
                    lang === "en" ? "bg-white/15 text-foreground" : "text-muted-foreground"
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLang("es")}
                  className={`rounded-full px-3 py-1 text-xs transition ${
                    lang === "es" ? "bg-white/15 text-foreground" : "text-muted-foreground"
                  }`}
                >
                  ES
                </button>
              </div>
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
  const { copy } = useI18n();
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
              {copy.dashboardLive}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { l: copy.dashboardAutomations, v: "128", d: "+12" },
              { l: copy.dashboardConversations, v: "24.7k", d: "+38%" },
              { l: copy.dashboardHoursSaved, v: "3,412", d: copy.dashboardThisMonth },
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
              <div className="text-xs text-muted-foreground">{copy.dashboardRevenueImpact}</div>
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
              { icon: <Bot className="h-3.5 w-3.5" />, t: copy.dashboardFeed1, c: "#14b8a6" },
              { icon: <Workflow className="h-3.5 w-3.5" />, t: copy.dashboardFeed2, c: "#38bdf8" },
              { icon: <Mic className="h-3.5 w-3.5" />, t: copy.dashboardFeed3, c: "#8b5cf6" },
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
                  {i + 1} {copy.dashboardAgo}
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
            <div className="text-[10px] text-muted-foreground">{copy.dashboardUptime}</div>
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
            <div className="text-[10px] text-muted-foreground">{copy.dashboardPipelineLift}</div>
            <div className="text-sm font-semibold">+247%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  const { copy } = useI18n();
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
                {copy.trustBadge}
            </div>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight">
                {copy.heroTitleA} <span className="text-gradient">{copy.heroTitleB}</span>
                {copy.heroTitleC}
              <br />
                {copy.heroTitleD}
              <br />
                {copy.heroTitleE}
              <br />
                {copy.heroTitleF}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
                {copy.heroDescription}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold"
              >
                  {copy.heroPrimaryCta}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="glass hover:bg-white/[0.06] inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition"
              >
                  {copy.heroSecondaryCta}
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg">
                <StatChip value="+250%" label={copy.statLeadGen} icon={<TrendingUp className="h-5 w-5" />} />
                <StatChip value="-80%" label={copy.statManualWork} icon={<Zap className="h-5 w-5" />} />
                <StatChip value="24/7" label={copy.statAiOps} icon={<Clock className="h-5 w-5" />} />
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
  const { copy } = useI18n();
  return (
    <section className="py-16 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {copy.trustedBy}
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
  const { lang } = useI18n();
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

  const cardsEs = [
    {
      icon: <Rocket className="h-5 w-5" />,
      title: "Misión",
      body: "Dar a cada negocio acceso a sistemas de IA que antes estaban reservados para las empresas más avanzadas.",
    },
    {
      icon: <BrainCircuit className="h-5 w-5" />,
      title: "Visión",
      body: "Un mundo donde las personas diseñan, deciden y crean mientras la IA hace el trabajo repetitivo de cada flujo.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Valores",
      body: "Calidad, transparencia, ROI medible y seguridad de nivel empresarial en todo lo que construimos.",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Por qué confían en nosotros",
      body: "Ingenieros senior de IA, diseñadores de producto y expertos en automatización responsables de punta a punta.",
    },
  ];

  const localizedCards = lang === "es" ? cardsEs : cards;

  return (
    <section id="about" className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={lang === "es" ? "Sobre SofTech AI" : "About SofTech AI"}
          title={
            <>
              {lang === "es" ? "Un estudio de IA creado para " : "An AI studio built for "}
              <span className="text-gradient">{lang === "es" ? "operadores" : "operators"}</span>
              {lang === "es" ? ", no para experimentos" : ", not experiments"}
            </>
          }
          description={
            lang === "es"
              ? "Somos un equipo compacto de ingenieros de IA, arquitectos de automatización y diseñadores de producto que ayuda a empresas ambiciosas a desplegar sistemas de IA reales que generan ingresos."
              : "We are a compact team of AI engineers, automation architects and product designers helping ambitious companies deploy real, revenue-generating AI systems."
          }
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {localizedCards.map((c) => (
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

const SERVICES_ES = [
  { icon: Bot, title: "Chatbots de IA", body: "Agentes conversacionales para soporte, ventas y operaciones internas entrenados con tus datos." },
  { icon: PhoneCall, title: "Agentes de Voz IA", body: "Llamadas con voz natural que califican leads, agendan reuniones y atienden llamadas entrantes 24/7." },
  { icon: Workflow, title: "Automatización de Flujos", body: "Conecta apps, elimina pasos manuales y orquesta procesos de negocio de punta a punta." },
  { icon: Database, title: "Automatización de CRM", body: "Enriquecimiento, scoring, ruteo y seguimientos ejecutándose dentro de tu CRM." },
  { icon: Target, title: "Generación de Leads", body: "Sistemas de IA que buscan, investigan y calientan prospectos calificados en piloto automático." },
  { icon: Lightbulb, title: "Consultoría de IA", body: "Estrategia, roadmap y prioridades donde la IA realmente impacta en tus resultados." },
  { icon: Code2, title: "Desarrollo IA a Medida", body: "Productos de IA, agentes y copilotos hechos a medida de tus flujos de trabajo." },
  { icon: Users, title: "Asistentes IA Internos", body: "Asistentes privados que responden, resumen y ejecutan acciones sobre conocimiento interno." },
  { icon: BarChart3, title: "Inteligencia de Negocio", body: "Dashboards con IA que muestran insights, anomalías y la siguiente mejor acción." },
  { icon: Plug, title: "Integraciones de IA", body: "Integraciones nativas con tu stack: Slack, HubSpot, Notion, Salesforce y más." },
  { icon: Zap, title: "Automatización por API", body: "Pipelines robustos orientados a eventos con reintentos, observabilidad y auditoría completa." },
  { icon: LayoutDashboard, title: "Dashboards a Medida", body: "Herramientas internas y tableros que convierten resultados de IA en decisiones accionables." },
];

function Services() {
  const { lang } = useI18n();
  const services = lang === "es" ? SERVICES_ES : SERVICES;
  return (
    <section id="services" className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={lang === "es" ? "Servicios" : "Services"}
          title={
            <>
              {lang === "es" ? "Todo lo que necesitas para operar una empresa " : "Everything you need to run an "}
              <span className="text-gradient">{lang === "es" ? "nativa en IA" : "AI-native"}</span>
              {lang === "es" ? "" : " company"}
            </>
          }
          description={
            lang === "es"
              ? "Desde estrategia hasta sistemas en producción: diseñamos, construimos y operamos la capa de IA que trabaja detrás de tu negocio."
              : "From strategy to shipped systems — we design, build and operate the AI stack that quietly runs behind your business."
          }
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, body }) => (
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
                {lang === "es" ? "Saber más" : "Learn more"} <ArrowRight className="h-3.5 w-3.5" />
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

const STEPS_ES = [
  { n: "01", title: "Descubrimiento", body: "Auditamos tu negocio, flujos y datos. Juntos identificamos oportunidades de IA con mayor ROI." },
  { n: "02", title: "Estrategia", body: "Un roadmap claro: qué construir, qué automatizar, qué modelos usar y cómo medir el éxito." },
  { n: "03", title: "Desarrollo", body: "Nuestros ingenieros construyen sistemas de IA listos para producción con arquitectura segura." },
  { n: "04", title: "Despliegue", body: "Lanzamos, integramos con tus herramientas y entrenamos a tu equipo para operar los sistemas." },
  { n: "05", title: "Optimización", body: "Mejora continua con nuevos datos, modelos y automatizaciones para multiplicar ROI." },
];

function Process() {
  const { lang } = useI18n();
  const steps = lang === "es" ? STEPS_ES : STEPS;
  return (
    <section id="process" className="py-28 sm:py-36 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={lang === "es" ? "Cómo trabajamos" : "How we work"}
          title={
            <>
              {lang === "es" ? "Un camino probado de la idea a la " : "A proven path from idea to "}
              <span className="text-gradient">{lang === "es" ? "IA desplegada" : "deployed AI"}</span>
            </>
          }
          description={
            lang === "es"
              ? "Cinco etapas, un equipo responsable. Sin traspasos, sin caja negra y sin trimestres perdidos."
              : "Five stages, one accountable team. No hand-offs, no black boxes, no wasted quarters."
          }
        />
        <div className="mt-16 relative">
          <div className="hidden lg:block absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-transparent via-[#14b8a6]/60 to-transparent" />
          <div className="grid lg:grid-cols-5 gap-6">
            {steps.map((s, i) => (
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

const SOLUTIONS_ES = [
  { icon: MessageSquare, name: "IA para Soporte", tag: "Soporte" },
  { icon: TrendingUp, name: "IA para Ventas", tag: "Ingresos" },
  { icon: Megaphone, name: "IA para Marketing", tag: "Crecimiento" },
  { icon: Users, name: "IA Interna", tag: "Ops" },
  { icon: BarChart3, name: "IA para Finanzas", tag: "Finanzas" },
  { icon: Building2, name: "IA para RRHH", tag: "Personas" },
  { icon: Workflow, name: "IA para Operaciones", tag: "Ops" },
  { icon: FileText, name: "IA para Documentos", tag: "Docs" },
  { icon: Mic, name: "IA de Voz", tag: "Voz" },
  { icon: CircuitBoard, name: "IA Analítica", tag: "Datos" },
];

function Solutions() {
  const { lang } = useI18n();
  const solutions = lang === "es" ? SOLUTIONS_ES : SOLUTIONS;
  return (
    <section id="solutions" className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={lang === "es" ? "Soluciones de IA" : "AI solutions"}
          title={
            <>
              {lang === "es" ? "IA diseñada para cada área de tu " : "Purpose-built AI for every part of your "}
              <span className="text-gradient">{lang === "es" ? "negocio" : "business"}</span>
            </>
          }
          description={
            lang === "es"
              ? "Diez dominios enfocados. Una capa operativa de IA coherente para toda tu empresa."
              : "Ten focused domains. One coherent AI operating layer across your company."
          }
        />
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {solutions.map(({ icon: Icon, name, tag }) => (
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

const INDUSTRIES_ES = [
  { icon: Stethoscope, name: "Salud" },
  { icon: HomeIcon, name: "Real Estate" },
  { icon: Scale, name: "Legal" },
  { icon: BarChart3, name: "Finanzas" },
  { icon: ShoppingBag, name: "Ecommerce" },
  { icon: GraduationCap, name: "Educación" },
  { icon: HardHat, name: "Construcción" },
  { icon: Factory, name: "Manufactura" },
  { icon: Cloud, name: "SaaS" },
  { icon: Megaphone, name: "Marketing" },
  { icon: UtensilsCrossed, name: "Hospitalidad" },
];

function Industries() {
  const { lang } = useI18n();
  const industries = lang === "es" ? INDUSTRIES_ES : INDUSTRIES;
  return (
    <section id="industries" className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={lang === "es" ? "Industrias" : "Industries"}
          title={
            <>
              {lang === "es" ? "IA adaptada a industrias " : "Industry-aware AI for "}
              <span className="text-gradient">{lang === "es" ? "reguladas y complejas" : "regulated & complex"}</span>
              {lang === "es" ? "" : " businesses"}
            </>
          }
          description={
            lang === "es"
              ? "Hablamos el lenguaje de tu industria: sus datos, su cumplimiento y su economía unitaria."
              : "We speak the language of your industry — its data, its compliance and its unit economics."
          }
        />
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map(({ icon: Icon, name }) => (
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

const CASES_ES = [
  {
    tag: "SaaS · Serie B",
    title: "Un SDR con IA reemplaza 3 reps outbound",
    challenge: "El outbound manual consumía 60% del tiempo del equipo SDR con tasas de respuesta a la baja.",
    solution: "SDR de IA personalizado con investigación, personalización y outreach multicanal.",
    results: [
      { k: "+250%", v: "Leads calificados" },
      { k: "-80%", v: "Trabajo manual" },
      { k: "6 sem", v: "A producción" },
    ],
  },
  {
    tag: "Ecommerce · DTC",
    title: "Agente 24/7 atiende el 78% de tickets",
    challenge: "El volumen de tickets crecía más rápido que el equipo, afectando CSAT y margen.",
    solution: "Agente de voz + chat entrenado con catálogo, políticas y tickets históricos.",
    results: [
      { k: "78%", v: "Auto-resuelto" },
      { k: "+60%", v: "Mejora CSAT" },
      { k: "24/7", v: "Cobertura" },
    ],
  },
  {
    tag: "Servicios B2B",
    title: "Automatización ahorra 3,400 horas / mes",
    challenge: "Flujos repetitivos de back-office en 6 herramientas frenaban el crecimiento.",
    solution: "Automatizaciones orientadas a eventos, clasificación por IA y copilotos internos.",
    results: [
      { k: "3.4k hrs", v: "Ahorro / mes" },
      { k: "12x", v: "Ops más rápidas" },
      { k: "0", v: "Errores en 90d" },
    ],
  },
];

function CaseStudies() {
  const { lang } = useI18n();
  const cases = lang === "es" ? CASES_ES : CASES;
  return (
    <section id="cases" className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={lang === "es" ? "Casos de éxito" : "Case studies"}
          title={
            <>
              {lang === "es" ? "Resultados por encima de " : "Outcomes over "}
              <span className="text-gradient">{lang === "es" ? "entregables" : "outputs"}</span>
            </>
          }
          description={
            lang === "es"
              ? "Una muestra de lo que entregan nuestros sistemas de IA cuando llegan a producción."
              : "A snapshot of what our AI systems deliver when they hit production."
          }
        />
        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {cases.map((c) => (
            <article
              key={c.title}
              className="group gradient-border rounded-3xl p-7 hover-lift flex flex-col"
            >
              <div className="text-[11px] uppercase tracking-widest text-[#67e8f9]">{c.tag}</div>
              <h3 className="mt-3 font-display text-2xl font-semibold leading-tight">
                {c.title}
              </h3>
              <div className="mt-5 space-y-3 text-sm">
                <p><span className="text-muted-foreground">{lang === "es" ? "Desafío" : "Challenge"} - </span>{c.challenge}</p>
                <p><span className="text-muted-foreground">{lang === "es" ? "Solución" : "Solution"} - </span>{c.solution}</p>
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

const COMPARE_ES = [
  { row: "Tiempo al primer resultado", trad: "3-6 meses", us: "2-6 semanas" },
  { row: "Mentalidad AI-first", trad: "Funciones anexas", us: "Sistemas IA nativos" },
  { row: "Calidad del talento", trad: "Generalistas junior", us: "Ingenieros senior IA" },
  { row: "Responsabilidad por resultados", trad: "Entregables", us: "Resultados y ROI" },
  { row: "Soluciones a medida", trad: "Plantillas y plugins", us: "Hecho para tus operaciones" },
  { row: "Partnership", trad: "Proyecto y fin", us: "Operadores de largo plazo" },
  { row: "Calidad enterprise", trad: "Mejor esfuerzo", us: "Estándares SOC-ready" },
];

function WhyUs() {
  const { lang } = useI18n();
  const compare = lang === "es" ? COMPARE_ES : COMPARE;
  return (
    <section id="why" className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={lang === "es" ? "Por qué SofTech AI" : "Why SofTech AI"}
          title={
            <>
              {lang === "es" ? "La diferencia entre " : "The difference between "}
              <span className="text-gradient">{lang === "es" ? "lanzar" : "shipping"}</span>
              {lang === "es" ? " y dejarlo en estantería" : " and shelfware"}
            </>
          }
        />
        <div className="mt-14 gradient-border rounded-3xl overflow-hidden">
          <div className="grid grid-cols-3 bg-white/[0.02]">
            <div className="p-6 text-xs uppercase tracking-widest text-muted-foreground">
              {lang === "es" ? "Dimensión" : "Dimension"}
            </div>
            <div className="p-6 text-xs uppercase tracking-widest text-muted-foreground border-l border-white/5">
              {lang === "es" ? "Agencia tradicional" : "Traditional agency"}
            </div>
            <div className="p-6 text-xs uppercase tracking-widest text-[#67e8f9] border-l border-white/5">
              SofTech AI Agency
            </div>
          </div>
          {compare.map((r, i) => (
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

const TESTIMONIALS_ES = [
  {
    quote: "SofTech lanzó un SDR con IA en seis semanas que superó a un equipo de tres. Cambió por completo nuestras métricas de pipeline.",
    name: "Elena Marchetti",
    role: "VP de Ingresos, Northwind",
    initials: "EM",
    color: "from-[#14b8a6] to-[#38bdf8]",
  },
  {
    quote: "Su equipo combina ingeniería senior con criterio de producto. Todas las automatizaciones siguen funcionando perfecto un año después.",
    name: "James Okafor",
    role: "COO, Helix Health",
    initials: "JO",
    color: "from-[#38bdf8] to-[#8b5cf6]",
  },
  {
    quote: "Reemplazamos 14 flujos frágiles en Zapier por una sola capa operativa con IA. Por fin confiamos en nuestras herramientas internas.",
    name: "Priya Raman",
    role: "Líder de Operaciones, Meridian",
    initials: "PR",
    color: "from-[#8b5cf6] to-[#67e8f9]",
  },
];

function Testimonials() {
  const { lang } = useI18n();
  const testimonials = lang === "es" ? TESTIMONIALS_ES : TESTIMONIALS;
  return (
    <section className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={lang === "es" ? "Testimonios" : "Testimonials"}
          title={
            <>
              {lang === "es" ? "Equipos que confían en " : "Loved by teams shipping "}
              <span className="text-gradient">{lang === "es" ? "IA real" : "real AI"}</span>
            </>
          }
        />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
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
    price: "$497",
    period: "One-time payment",
    tagline: "Automate your first process with AI in under a week.",
    features: [
      "Implementation of 1 AI Assistant (Chatbot or Automation)",
      "Custom setup for your business",
      "Training with your company information",
      "Integration with WhatsApp or Web",
      "Integration with Google Sheets or basic CRM",
      "1-hour training session",
      "2 weeks of support",
    ],
    cta: "Start with Starter",
    highlight: false,
  },
  {
    name: "Professional",
    price: "$997",
    period: "One-time payment",
    tagline: "Connect AI, automations, and processes to grow your business.",
    features: [
      "Everything included in Starter",
      "Up to 3 AI automations",
      "App integrations (CRM, Email, Forms, etc.)",
      "Lead capture automation",
      "Basic metrics dashboard",
      "30 days of support",
      "Weekly follow-up meeting",
    ],
    cta: "Start with Professional",
    highlight: true,
  },
  {
    name: "Business",
    price: "From $1,997",
    period: "",
    tagline: "AI and software solutions designed for your company's operations.",
    features: [
      "Comprehensive process analysis",
      "Unlimited project automations",
      "Custom AI agents",
      "Integrations with existing systems",
      "Custom software development",
      "Complete documentation",
      "Team training",
      "Priority support",
    ],
    cta: "Contact sales",
    highlight: false,
  },
];

const PLANS_ES = [
  {
    name: "Starter",
    price: "$497",
    period: "Pago único",
    tagline: "Automatiza tu primer proceso con IA en menos de una semana.",
    features: [
      "Implementación de 1 Asistente IA (Chatbot o Automatización)",
      "Configuración personalizada para tu negocio",
      "Entrenamiento con la información de tu empresa",
      "Integración con WhatsApp o Web",
      "Integración con Google Sheets o CRM básico",
      "Capacitación de 1 hora",
      "2 semanas de soporte",
    ],
    cta: "Empezar con Starter",
    highlight: false,
  },
  {
    name: "Professional",
    price: "$997",
    period: "Pago único",
    tagline: "Conecta IA, automatizaciones y procesos para hacer crecer tu negocio.",
    features: [
      "Todo lo incluido en Starter",
      "Hasta 3 automatizaciones IA",
      "Integración entre aplicaciones (CRM, Email, Formularios, etc.)",
      "Automatización de captura de clientes",
      "Dashboard básico de métricas",
      "30 días de soporte",
      "Reunión semanal de seguimiento",
    ],
    cta: "Empezar con Professional",
    highlight: true,
  },
  {
    name: "Business",
    price: "Desde $1,997",
    period: "",
    tagline: "Soluciones de IA y software diseñadas para la operación de tu empresa.",
    features: [
      "Análisis completo de procesos",
      "Automatizaciones ilimitadas del proyecto",
      "Agentes IA personalizados",
      "Integraciones con sistemas existentes",
      "Desarrollo de software a medida",
      "Documentación completa",
      "Capacitación del equipo",
      "Soporte prioritario",
    ],
    cta: "Contactar ventas",
    highlight: false,
  },
];

function Pricing() {
  const { lang } = useI18n();
  const plans = lang === "es" ? PLANS_ES : PLANS;
  return (
    <section id="pricing" className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={lang === "es" ? "Precios" : "Pricing"}
          title={
            <>
              {lang === "es" ? "Precios simples. " : "Simple pricing. "}
              <span className="text-gradient">{lang === "es" ? "ROI serio." : "Serious ROI."}</span>
            </>
          }
          description={
            lang === "es"
              ? "Cada plan incluye equipo senior, hitos transparentes y resultados medibles."
              : "Every plan includes a senior team, transparent milestones and measurable outcomes."
          }
        />
        <div className="mt-14 grid lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((p) => (
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
                  {lang === "es" ? "Recomendado" : "Recommended"}
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

const FAQS_ES = [
  {
    q: "¿Cuánto cuesta realmente un proyecto de IA?",
    a: "La mayoría de proyectos empieza entre $2.5k y $10k por mes según alcance. En discovery definimos un plan mensual fijo con resultados claros, sin sorpresas.",
  },
  {
    q: "¿Cuánto tarda la implementación?",
    a: "Primer sistema IA en producción en 2 a 6 semanas. Implementaciones multi-sistema suelen tomar un trimestre. Entregamos en incrementos semanales.",
  },
  {
    q: "¿Qué soporte brindan después del lanzamiento?",
    a: "Todos los planes incluyen optimización, monitoreo e iteración continua. Growth y Enterprise incluyen ingeniero dedicado y SLA on-call.",
  },
  {
    q: "¿Con qué herramientas y plataformas integran?",
    a: "HubSpot, Salesforce, Slack, Notion, Zendesk, Intercom, Shopify, Stripe, Google Workspace, Microsoft 365 y cualquier API REST/GraphQL.",
  },
  {
    q: "¿Cómo manejan seguridad y privacidad de datos?",
    a: "Construimos con prácticas alineadas a SOC 2, modelos privados cuando aplica, secretos cifrados, auditoría y aislamiento estricto por cliente.",
  },
  {
    q: "¿Cómo miden el ROI?",
    a: "Cada proyecto arranca con una métrica compartida: pipeline, horas ahorradas, costo reducido o mejora de CSAT. Ves avances en reportes semanales.",
  },
];

function Faq() {
  const { lang } = useI18n();
  const faqs = lang === "es" ? FAQS_ES : FAQS;
  return (
    <section id="faq" className="py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title={
            <>
              {lang === "es" ? "Respuestas antes de que " : "Answers before you "}
              <span className="text-gradient">{lang === "es" ? "preguntes" : "even ask"}</span>
            </>
          }
        />
        <div className="mt-12 gradient-border rounded-3xl p-2 sm:p-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
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
  const { copy, lang } = useI18n();
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success(copy.thanksToast);
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
                  <Sparkles className="h-3 w-3 text-[#67e8f9]" /> {copy.contactBadge}
                </div>
                <h2 className="mt-5 font-display text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
                  {copy.contactTitleA} <span className="text-gradient">{copy.contactTitleB}</span>
                </h2>
                <p className="mt-4 text-muted-foreground text-lg leading-relaxed max-w-md">
                  {copy.contactDescription}
                </p>

                <ul className="mt-8 space-y-4 text-sm">
                  {[
                    { icon: Mail, k: lang === "es" ? "Email" : "Email", v: "rrondonc@gmail.com" },
                    { icon: PhoneCall, k: lang === "es" ? "Llamada" : "Call", v: "+57 (318) 928-2999" },
                    {
                      icon: MapPin,
                      k: lang === "es" ? "Estudio" : "Studio",
                      v:
                        lang === "es"
                          ? "Remoto primero · Barranquilla · Caracas"
                          : "Remote-first · Barranquilla · Caracas",
                    },
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
                    <Label htmlFor="name">{copy.name}</Label>
                    <Input id="name" required placeholder="Jane Doe" className="bg-white/[0.04] border-white/10" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">{copy.company}</Label>
                    <Input id="company" required placeholder="Acme Inc." className="bg-white/[0.04] border-white/10" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">{copy.workEmail}</Label>
                    <Input id="email" type="email" required placeholder="jane@acme.com" className="bg-white/[0.04] border-white/10" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{copy.phone}</Label>
                    <Input id="phone" placeholder="+1 (000) 000-0000" className="bg-white/[0.04] border-white/10" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>{copy.serviceInterested}</Label>
                    <Select>
                      <SelectTrigger className="bg-white/[0.04] border-white/10">
                        <SelectValue placeholder={copy.selectService} />
                      </SelectTrigger>
                      <SelectContent>
                        {[
                          lang === "es" ? "Chatbots de IA" : "AI Chatbots",
                          lang === "es" ? "Agentes de Voz IA" : "AI Voice Agents",
                          lang === "es" ? "Automatización de Flujos" : "Workflow Automation",
                          lang === "es" ? "Desarrollo IA a Medida" : "Custom AI Development",
                          lang === "es" ? "Consultoria de IA" : "AI Consulting",
                          copy.serviceOther,
                        ].map(
                          (s) => (
                            <SelectItem key={s} value={s}>{s}</SelectItem>
                          )
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>{copy.budget}</Label>
                    <Select>
                      <SelectTrigger className="bg-white/[0.04] border-white/10">
                        <SelectValue placeholder={copy.monthlyBudget} />
                      </SelectTrigger>
                      <SelectContent>
                        {[
                          "< $5k",
                          "$5k - $15k",
                          "$15k - $50k",
                          "$50k+",
                        ].map((s) => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>{copy.timeline}</Label>
                  <Select>
                    <SelectTrigger className="bg-white/[0.04] border-white/10">
                      <SelectValue placeholder={copy.startWhen} />
                    </SelectTrigger>
                    <SelectContent>
                      {[copy.timelineAsap, copy.timelineMonth, copy.timelineQuarter, copy.timelineExplore].map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{copy.projectPrompt}</Label>
                  <Textarea
                    id="message"
                    required
                    rows={4}
                    placeholder={copy.projectPlaceholder}
                    className="bg-white/[0.04] border-white/10"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full btn-primary rounded-full py-6 text-sm font-semibold"
                >
                  {submitting ? copy.sending : copy.submitCta}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
                <p className="text-[11px] text-center text-muted-foreground">
                  {copy.legalDisclaimer}
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
  const { copy, lang } = useI18n();
  const footerColumns =
    lang === "es"
      ? [
          {
            title: "Servicios",
            items: [
              "Chatbots de IA",
              "Agentes de Voz IA",
              "Automatización de Flujos",
              "IA a Medida",
            ],
          },
          { title: "Empresa", items: ["Nosotros", "Casos de éxito", "Precios", "Contacto"] },
          { title: "Empresa", items: ["Nosotros", "Casos de éxito", "Precios", "Contacto"] },
          { title: "Recursos", items: ["Playbooks", "Guía de IA", "Documentación", "Política de Privacidad"] },
        ]
      : [
          { title: "Services", items: ["AI Chatbots", "AI Voice Agents", "Workflow Automation", "Custom AI"] },
          { title: "Company", items: ["About", "Case studies", "Pricing", "Contact"] },
          { title: "Resources", items: ["Playbooks", "AI Readiness Guide", "Docs", "Privacy Policy"] },
        ];

  return (
    <footer className="border-t border-white/5 pt-20 pb-10 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              {copy.footerDescription}
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                toast.success(copy.subscribedToast);
              }}
              className="mt-6 flex items-center gap-2 max-w-sm"
            >
              <Input
                type="email"
                required
                placeholder={lang === "es" ? "tu@empresa.com" : "you@company.com"}
                className="bg-white/[0.04] border-white/10"
              />
              <Button type="submit" className="btn-primary rounded-full px-4">
                {copy.subscribe}
              </Button>
            </form>
          </div>

          {footerColumns.map((col) => (
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
            © {new Date().getFullYear()} SofTech AI Agency. {copy.rights}
          </div>
          <div className="flex items-center gap-3">
            {[Twitter, Linkedin, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label={lang === "es" ? "Enlace social" : "Social link"}
                className="flex h-9 w-9 items-center justify-center rounded-lg glass hover:bg-white/[0.08] transition text-muted-foreground hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-5 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground">{copy.privacy}</a>
            <a href="#" className="hover:text-foreground">{copy.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------- PAGE --------------------------------- */

function LandingPage() {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "en";
    }
    const stored = window.localStorage.getItem("site_lang");
    return stored === "es" ? "es" : "en";
  });

  useEffect(() => {
    window.localStorage.setItem("site_lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const seo = SEO_COPY[lang] ?? SEO_COPY.en;

    const upsertMeta = (
      key: string,
      value: string,
      attr: "name" | "property" = "name",
    ) => {
      let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", value);
    };

    document.title = seo.title;
    upsertMeta("description", seo.description, "name");
    upsertMeta("og:title", seo.ogTitle, "property");
    upsertMeta("og:description", seo.ogDescription, "property");
    upsertMeta("twitter:title", seo.twitterTitle, "name");
    upsertMeta("twitter:description", seo.twitterDescription, "name");
  }, [lang]);

  const copy = COPY[lang] ?? COPY.en;


  return (
    <I18N_CONTEXT.Provider value={{ lang, setLang, copy }}>
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
    </I18N_CONTEXT.Provider>
  );
}
