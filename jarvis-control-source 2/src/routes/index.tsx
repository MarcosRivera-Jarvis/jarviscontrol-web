import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Mail, Bot, Workflow, ArrowRight, Check, Sparkles, Zap, Shield,
  MessageSquare, FileText, Calendar, Building2, Hotel, Store, Factory, Scissors,
  Clock, TrendingUp, ShieldCheck, BarChart3, Star, Send, Github, Twitter, Linkedin,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JARVIS Control — Automatización empresarial con IA" },
      { name: "description", content: "Automatizamos correos, procesos, clientes y operaciones con IA y agentes inteligentes." },
    ],
  }),
  component: Landing,
});

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-7xl px-6 py-24 md:py-32 ${className}`}>
      {children}
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
      <span className="size-1.5 rounded-full bg-[var(--brand)] shadow-[0_0_12px_var(--brand)]" />
      {children}
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] ${className}`}>
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(400px circle at var(--mx,50%) var(--my,50%), oklch(0.72 0.17 235 / 0.08), transparent 40%)" }} />
      {children}
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 font-display text-lg font-semibold">
          <div className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-[var(--grad-1)] to-[var(--grad-2)] shadow-[0_0_20px_oklch(0.72_0.17_235/0.4)]">
            <Sparkles className="size-4 text-background" />
          </div>
          JARVIS<span className="text-muted-foreground">Control</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#soluciones" className="hover:text-foreground transition">Soluciones</a>
          <a href="#agentes" className="hover:text-foreground transition">Agentes IA</a>
          <a href="#casos" className="hover:text-foreground transition">Casos</a>
          <a href="#planes" className="hover:text-foreground transition">Planes</a>
        </nav>
        <a href="#contacto" className="hidden md:inline-flex items-center gap-1.5 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90">
          Solicitar demo <ArrowRight className="size-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <Section className="!pt-40 !pb-20 md:!pt-48 md:!pb-32">
      <div className="absolute inset-0 -z-10 grid-bg" />
      <div className="absolute left-1/2 top-20 -z-10 size-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.72_0.17_235/0.18),transparent_70%)] blur-3xl" />
      <div className="mx-auto max-w-4xl text-center animate-fade-up">
        <Eyebrow>Plataforma de automatización con IA</Eyebrow>
        <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          Tu empresa funcionando en{" "}
          <span className="text-gradient">piloto automático</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Automatizamos correos, procesos, clientes, tareas y operaciones mediante IA y automatizaciones avanzadas.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#contacto" className="group inline-flex items-center gap-2 rounded-xl bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition hover:opacity-90 glow">
            Solicitar demo
            <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
          </a>
          <a href="#soluciones" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold backdrop-blur transition hover:bg-white/[0.08]">
            Ver soluciones
          </a>
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-2"><Shield className="size-3.5" /> Seguridad empresarial</span>
          <span className="flex items-center gap-2"><Zap className="size-3.5" /> Despliegue en días</span>
          <span className="flex items-center gap-2"><Bot className="size-3.5" /> IA de última generación</span>
        </div>
      </div>

      {/* Floating product mock */}
      <div className="relative mx-auto mt-20 max-w-5xl animate-float">
        <div className="glass rounded-2xl p-2 shadow-2xl glow">
          <div className="rounded-xl bg-gradient-to-b from-[oklch(0.18_0.015_260)] to-[oklch(0.14_0.012_260)] p-6">
            <div className="mb-4 flex items-center gap-1.5">
              <div className="size-2.5 rounded-full bg-red-500/70" />
              <div className="size-2.5 rounded-full bg-yellow-500/70" />
              <div className="size-2.5 rounded-full bg-green-500/70" />
              <div className="ml-3 text-xs text-muted-foreground">jarvis.control / dashboard</div>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              {[
                { icon: Mail, label: "Correos procesados", value: "12,438", trend: "+24%" },
                { icon: Bot, label: "Agentes activos", value: "27", trend: "+3" },
                { icon: Workflow, label: "Automatizaciones", value: "184", trend: "+12%" },
              ].map((s, i) => (
                <div key={i} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between">
                    <s.icon className="size-4 text-[var(--brand)]" />
                    <span className="text-xs text-emerald-400">{s.trend}</span>
                  </div>
                  <div className="mt-3 text-2xl font-semibold tracking-tight">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function QueEs() {
  return (
    <Section id="que-es">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <Eyebrow>¿Qué es JARVIS Control?</Eyebrow>
          <h2 className="mt-5 text-4xl font-semibold md:text-5xl">
            Un sistema operativo de <span className="text-gradient">automatización</span> para tu empresa.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            JARVIS Control es la plataforma que conecta tus herramientas, datos y procesos con agentes de IA que trabajan 24/7. Reemplaza tareas repetitivas, acelera decisiones y libera al equipo para lo que realmente importa.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Integración con tu stack actual (CRM, ERP, Email, APIs).",
              "Agentes IA personalizados por departamento.",
              "Implementación rápida y soporte continuo.",
            ].map(t => (
              <li key={t} className="flex items-start gap-3 text-sm text-foreground/90">
                <Check className="mt-0.5 size-4 text-[var(--brand)]" /> {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="glass rounded-2xl p-6">
            <div className="space-y-3">
              {[
                { from: "Cliente", msg: "Necesito una factura del mes pasado", tag: "VIP" },
                { from: "JARVIS", msg: "Factura enviada y registrada en CRM ✓", tag: "AUTO" },
                { from: "Email", msg: "32 promociones clasificadas y archivadas", tag: "INBOX" },
                { from: "Agente", msg: "Resumen diario listo a las 09:00", tag: "DAILY" },
              ].map((m, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] p-3 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="grid size-8 place-items-center rounded-md bg-gradient-to-br from-[var(--grad-1)]/30 to-[var(--grad-2)]/30">
                      <Bot className="size-4 text-[var(--brand)]" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{m.from}</div>
                      <div className="font-medium">{m.msg}</div>
                    </div>
                  </div>
                  <span className="rounded-md border border-white/10 px-2 py-0.5 text-[10px] tracking-wider text-muted-foreground">{m.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Emails() {
  const items = [
    { icon: Mail, title: "Clasificación automática", desc: "Cada correo etiquetado y enrutado por contexto e intención." },
    { icon: FileText, title: "Facturas", desc: "Extraídas, validadas y archivadas en tu sistema contable." },
    { icon: Star, title: "Clientes VIP", desc: "Detección y respuesta prioritaria en segundos." },
    { icon: Sparkles, title: "Promociones", desc: "Filtrado inteligente del ruido para mantener foco." },
    { icon: BarChart3, title: "Resúmenes diarios", desc: "Un briefing claro cada mañana de lo que importa." },
  ];
  return (
    <Section id="soluciones">
      <div className="mb-14 max-w-2xl">
        <Eyebrow>Automatización de correos</Eyebrow>
        <h2 className="mt-5 text-4xl font-semibold md:text-5xl">Tu bandeja de entrada, dominada por IA.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map(it => (
          <Card key={it.title}>
            <it.icon className="size-6 text-[var(--brand)]" />
            <h3 className="mt-4 text-lg font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Agentes() {
  const items = [
    { icon: MessageSquare, title: "Atención al cliente", desc: "Respuestas instantáneas 24/7 con contexto completo." },
    { icon: Bot, title: "Soporte interno", desc: "Asistentes para RRHH, IT y finanzas." },
    { icon: FileText, title: "Gestión documental", desc: "Búsqueda, generación y resumen de documentos." },
    { icon: Sparkles, title: "Asistentes empresariales", desc: "Copilotos a medida para cada equipo." },
  ];
  return (
    <Section id="agentes">
      <div className="mb-14 max-w-2xl">
        <Eyebrow>Agentes de IA</Eyebrow>
        <h2 className="mt-5 text-4xl font-semibold md:text-5xl">Equipos digitales que trabajan por ti.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items.map(it => (
          <Card key={it.title}>
            <div className="grid size-10 place-items-center rounded-lg bg-gradient-to-br from-[var(--grad-1)]/20 to-[var(--grad-2)]/20">
              <it.icon className="size-5 text-[var(--brand)]" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Integraciones() {
  const tools = ["CRM", "ERP", "Calendarios", "WhatsApp", "Telegram", "Email", "APIs", "Webhooks"];
  return (
    <Section>
      <div className="mb-14 max-w-2xl">
        <Eyebrow>Automatizaciones empresariales</Eyebrow>
        <h2 className="mt-5 text-4xl font-semibold md:text-5xl">Conectamos todo tu stack.</h2>
        <p className="mt-5 text-muted-foreground">Orquestamos flujos entre las herramientas que ya usas — sin fricciones.</p>
      </div>
      <div className="flex flex-wrap gap-3">
        {tools.map(t => (
          <div key={t} className="group rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium transition hover:border-white/30 hover:bg-white/[0.06]">
            <span className="text-foreground">{t}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Casos() {
  const items = [
    { icon: Scissors, title: "Peluquerías", desc: "Reservas automáticas y recordatorios por WhatsApp." },
    { icon: Hotel, title: "Hoteles", desc: "Check-in inteligente y atención multicanal." },
    { icon: Building2, title: "Constructoras", desc: "Seguimiento de obras, presupuestos y proveedores." },
    { icon: Store, title: "Tiendas online", desc: "Atención, devoluciones y upsells automatizados." },
    { icon: Factory, title: "Industria", desc: "Monitorización, alertas y reportes operativos." },
  ];
  return (
    <Section id="casos">
      <div className="mb-14 max-w-2xl">
        <Eyebrow>Casos de uso</Eyebrow>
        <h2 className="mt-5 text-4xl font-semibold md:text-5xl">Probado en sectores reales.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map(it => (
          <Card key={it.title}>
            <it.icon className="size-6 text-[var(--brand)]" />
            <h3 className="mt-4 text-lg font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Beneficios() {
  const items = [
    { icon: Clock, title: "Ahorro de tiempo", desc: "Reduce horas de tareas manuales cada semana." },
    { icon: ShieldCheck, title: "Menos errores", desc: "Procesos consistentes y trazables." },
    { icon: TrendingUp, title: "Más ventas", desc: "Respuesta inmediata y seguimiento sin pausas." },
    { icon: BarChart3, title: "Mayor control", desc: "Visibilidad completa en tiempo real." },
  ];
  return (
    <Section>
      <div className="mb-14 max-w-2xl">
        <Eyebrow>Beneficios</Eyebrow>
        <h2 className="mt-5 text-4xl font-semibold md:text-5xl">Resultados que se miden.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items.map(it => (
          <Card key={it.title}>
            <it.icon className="size-6 text-[var(--brand)]" />
            <h3 className="mt-4 text-lg font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Testimonios() {
  const items = [
    { quote: "Reducimos un 70% el tiempo en gestionar correos comerciales. El equipo solo ve lo importante.", name: "Marta Ríos", role: "COO, Retail Group" },
    { quote: "Implementaron un agente de soporte en 2 semanas. La satisfacción del cliente subió a 4.9.", name: "Javier Soto", role: "CEO, NovaHotels" },
    { quote: "JARVIS conectó nuestro CRM y ERP. Ahora todo conversa solo.", name: "Lucía Pérez", role: "CTO, BuildCo" },
  ];
  return (
    <Section>
      <div className="mb-14 max-w-2xl">
        <Eyebrow>Lo que dicen nuestros clientes</Eyebrow>
        <h2 className="mt-5 text-4xl font-semibold md:text-5xl">Confianza demostrada.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map(t => (
          <Card key={t.name}>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-[var(--brand)] text-[var(--brand)]" />)}
            </div>
            <p className="mt-4 text-foreground/90">"{t.quote}"</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="size-9 rounded-full bg-gradient-to-br from-[var(--grad-1)] to-[var(--grad-2)]" />
              <div>
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Planes() {
  const plans = [
    { name: "Básico", price: "€490", per: "/mes", desc: "Para equipos que arrancan con automatización.", features: ["Automatización de correos", "1 agente IA", "Integraciones esenciales", "Soporte por email"], highlight: false },
    { name: "Profesional", price: "€1.490", per: "/mes", desc: "Para empresas en crecimiento.", features: ["Todo lo del plan Básico", "Hasta 5 agentes IA", "CRM + ERP + WhatsApp", "Soporte prioritario", "Dashboard avanzado"], highlight: true },
    { name: "Enterprise", price: "A medida", per: "", desc: "Despliegues a gran escala.", features: ["Agentes ilimitados", "Integraciones personalizadas", "SLA 99.9%", "Ingeniero dedicado", "Seguridad avanzada"], highlight: false },
  ];
  return (
    <Section id="planes">
      <div className="mb-14 max-w-2xl">
        <Eyebrow>Planes</Eyebrow>
        <h2 className="mt-5 text-4xl font-semibold md:text-5xl">Elige tu nivel de automatización.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {plans.map(p => (
          <div key={p.name} className={`relative rounded-2xl border p-7 ${p.highlight ? "border-[var(--brand)]/40 bg-gradient-to-b from-[var(--brand)]/8 to-transparent glow" : "border-white/10 bg-white/[0.03]"}`}>
            {p.highlight && <span className="absolute -top-3 left-7 rounded-full bg-[var(--brand)] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-background">Más popular</span>}
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-semibold tracking-tight">{p.price}</span>
              <span className="text-sm text-muted-foreground">{p.per}</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm">
              {p.features.map(f => (
                <li key={f} className="flex items-start gap-2"><Check className="mt-0.5 size-4 text-[var(--brand)]" />{f}</li>
              ))}
            </ul>
            <a href="#contacto" className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition ${p.highlight ? "bg-foreground text-background hover:opacity-90" : "border border-white/15 bg-white/[0.04] hover:bg-white/[0.08]"}`}>
              Empezar <ArrowRight className="size-4" />
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contacto() {
  const [sent, setSent] = useState(false);
  return (
    <Section id="contacto">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 md:p-14">
        <div className="absolute -right-20 -top-20 size-80 rounded-full bg-[radial-gradient(circle,oklch(0.65_0.2_285/0.25),transparent_70%)] blur-3xl" />
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <Eyebrow>Hablemos</Eyebrow>
            <h2 className="mt-5 text-4xl font-semibold md:text-5xl">Solicita una demo personalizada.</h2>
            <p className="mt-5 text-muted-foreground">Cuéntanos sobre tu empresa y te mostramos cómo automatizar tu operación en menos de 30 minutos.</p>
            <div className="mt-8 space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Mail className="size-4 text-[var(--brand)]" /> hola@jarviscontrol.com</div>
              <div className="flex items-center gap-2"><Calendar className="size-4 text-[var(--brand)]" /> Respuesta en menos de 24h</div>
            </div>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="space-y-3"
          >
            <input required placeholder="Nombre" className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition focus:border-[var(--brand)]/60" />
            <input required type="email" placeholder="Email corporativo" className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition focus:border-[var(--brand)]/60" />
            <input placeholder="Empresa" className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition focus:border-[var(--brand)]/60" />
            <textarea rows={4} placeholder="¿Qué quieres automatizar?" className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition focus:border-[var(--brand)]/60" />
            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition hover:opacity-90">
              {sent ? "¡Enviado! Te contactamos pronto." : (<>Enviar solicitud <Send className="size-4" /></>)}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-semibold">
            <div className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-[var(--grad-1)] to-[var(--grad-2)]">
              <Sparkles className="size-4 text-background" />
            </div>
            JARVIS<span className="text-muted-foreground">Control</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">Automatización empresarial con IA. Tu empresa en piloto automático.</p>
          <div className="mt-5 flex gap-3 text-muted-foreground">
            <a href="#" className="hover:text-foreground"><Twitter className="size-4" /></a>
            <a href="#" className="hover:text-foreground"><Linkedin className="size-4" /></a>
            <a href="#" className="hover:text-foreground"><Github className="size-4" /></a>
          </div>
        </div>
        {[
          { title: "Producto", links: ["Soluciones", "Agentes IA", "Integraciones", "Planes"] },
          { title: "Empresa", links: ["Sobre nosotros", "Casos de uso", "Blog", "Contacto"] },
          { title: "Legal", links: ["Privacidad", "Términos", "Cookies", "Seguridad"] },
        ].map(col => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold">{col.title}</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {col.links.map(l => <li key={l}><a href="#" className="hover:text-foreground transition">{l}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} JARVIS Control. Todos los derechos reservados.</span>
          <span>Hecho con precisión para empresas modernas.</span>
        </div>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/3 top-1/4 size-[500px] rounded-full bg-[radial-gradient(circle,oklch(0.72_0.17_235/0.12),transparent_70%)] blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 size-[500px] rounded-full bg-[radial-gradient(circle,oklch(0.65_0.2_285/0.1),transparent_70%)] blur-3xl" />
      </div>
      <Nav />
      <main>
        <Hero />
        <QueEs />
        <Emails />
        <Agentes />
        <Integraciones />
        <Casos />
        <Beneficios />
        <Testimonios />
        <Planes />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
