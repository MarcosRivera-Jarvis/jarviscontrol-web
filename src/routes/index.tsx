import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  CalendarClock,
  Check,
  ChevronRight,
  CircleCheck,
  DatabaseZap,
  FileCheck2,
  FileText,
  Gauge,
  Headphones,
  Layers3,
  Mail,
  MessageCircle,
  MessageSquare,
  Network,
  ReceiptText,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Workflow,
  Zap,
} from "lucide-react";

type Icon = React.ComponentType<{ className?: string }>;

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-6 md:py-28 ${className}`}
    >
      {children}
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-muted-foreground">
      <span className="size-1.5 rounded-full bg-brand" />
      {children}
    </p>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  className = "",
}: {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
          {text}
        </p>
      ) : null}
    </div>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-6 shadow-[0_1px_0_0_oklch(1_0_0/0.06)_inset] transition duration-300 hover:border-white/20 hover:bg-white/[0.055] ${className}`}
    >
      {children}
    </div>
  );
}

function PrimaryCta({ children = "Solicitar diagnóstico" }: { children?: React.ReactNode }) {
  return (
    <a
      href="#contacto"
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background"
    >
      {children}
      <ArrowRight className="size-4" aria-hidden="true" />
    </a>
  );
}

function SecondaryCta({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-white/[0.075] focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background"
    >
      {children}
      <ChevronRight className="size-4" aria-hidden="true" />
    </a>
  );
}

function Nav() {
  const links = [
    ["Soluciones", "#soluciones"],
    ["Automatiza", "#automatizar"],
    ["Agentes IA", "#agentes"],
    ["Integraciones", "#integraciones"],
    ["Contacto", "#contacto"],
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6">
        <a href="#" className="flex items-center gap-2 font-display text-base font-semibold sm:text-lg">
          <span className="grid size-8 place-items-center rounded-lg border border-white/10 bg-white/[0.06]">
            <Sparkles className="size-4 text-brand" aria-hidden="true" />
          </span>
          <span>JARVIS</span>
          <span className="text-muted-foreground">Control</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground lg:flex" aria-label="Principal">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="transition hover:text-foreground">
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="inline-flex min-h-10 items-center justify-center rounded-lg border border-white/12 bg-white/[0.05] px-3 text-sm font-semibold text-foreground transition hover:bg-white/[0.09] sm:px-4"
        >
          Demo
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const signals = [
    "Correos, facturas y documentos bajo control",
    "Agentes IA conectados a tus sistemas",
    "Flujos n8n con trazabilidad empresarial",
  ];

  const workflow = [
    { icon: Mail, title: "Entrada", text: "Email, WhatsApp, Telegram, CRM, ERP o API." },
    { icon: Bot, title: "Decisión IA", text: "Clasifica, extrae datos, prioriza y redacta." },
    { icon: Workflow, title: "Acción", text: "Actualiza sistemas, avisa al equipo y documenta." },
  ];

  return (
    <Section className="pb-16 pt-36 md:pb-24 md:pt-44">
      <div className="absolute inset-x-5 top-24 -z-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
        <div className="max-w-4xl">
          <Eyebrow>Automatización empresarial con IA</Eyebrow>
          <h1 className="mt-6 max-w-5xl text-balance text-4xl font-semibold leading-[1.04] tracking-normal text-foreground sm:text-5xl md:text-7xl">
            Sistemas internos de IA para operar con menos trabajo manual.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-xl md:leading-8">
            JARVIS Control diseña e implementa automatizaciones para equipos B2B:
            correos inteligentes, facturas automáticas, agentes IA, seguimiento
            comercial e integraciones con CRM, ERP, APIs y n8n.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <PrimaryCta>Solicitar diagnóstico</PrimaryCta>
            <SecondaryCta href="#automatizar">Ver qué automatizar</SecondaryCta>
          </div>
          <div className="mt-9 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
            {signals.map((signal) => (
              <div key={signal} className="flex items-start gap-2">
                <CircleCheck className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                <span>{signal}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-lg border border-white/10 bg-[linear-gradient(180deg,oklch(0.20_0.014_250),oklch(0.145_0.011_250))] p-3 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/[0.08] px-3 pb-3">
              <div className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-white/20" />
                <span className="size-2.5 rounded-full bg-white/20" />
                <span className="size-2.5 rounded-full bg-brand/80" />
              </div>
              <span className="text-xs text-muted-foreground">jarvis-control / operations</span>
            </div>
            <div className="grid gap-3 pt-3">
              {workflow.map((item) => (
                <div key={item.title} className="rounded-lg border border-white/[0.08] bg-white/[0.035] p-4">
                  <div className="flex items-start gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand">
                      <item.icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h2 className="text-sm font-semibold">{item.title}</h2>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="rounded-lg border border-brand/25 bg-brand/10 p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground">Informe diario generado</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Prioridades, incidencias, clientes VIP y tareas pendientes.
                    </p>
                  </div>
                  <BarChart3 className="size-5 shrink-0 text-brand" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Positioning() {
  const points = [
    "Auditoría de procesos y detección de automatizaciones rentables.",
    "Diseño de agentes IA con instrucciones, permisos y fuentes de datos claras.",
    "Implementación de flujos n8n, webhooks, APIs y conectores internos.",
    "Documentación, seguimiento y mejora continua después del despliegue.",
  ];

  return (
    <Section id="soluciones">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Para equipos B2B"
          title={
            <>
              Automatización seria para operaciones que no pueden fallar.
            </>
          }
          text="No vendemos una demo bonita aislada de tu negocio. Construimos sistemas prácticos que leen información, deciden con reglas claras y ejecutan tareas en las herramientas que ya usa tu equipo."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {points.map((point) => (
            <Card key={point}>
              <Check className="size-5 text-brand" aria-hidden="true" />
              <p className="mt-4 text-sm leading-6 text-foreground/90">{point}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

function EmailAutomation() {
  const items: Array<{ icon: Icon; title: string; text: string }> = [
    {
      icon: Mail,
      title: "Clasificación de correos",
      text: "Detecta intención, urgencia, departamento y cliente para enrutar cada mensaje sin depender de revisiones manuales.",
    },
    {
      icon: ReceiptText,
      title: "Facturas automáticas",
      text: "Extrae datos, valida campos, renombra archivos, archiva documentos y prepara la información para contabilidad o ERP.",
    },
    {
      icon: Star,
      title: "Clientes VIP",
      text: "Identifica cuentas prioritarias, acelera respuestas y alerta al equipo cuando un cliente crítico necesita atención.",
    },
    {
      icon: MessageSquare,
      title: "Respuesta asistida",
      text: "Redacta borradores con contexto, tono de marca y datos internos para que el equipo apruebe más rápido.",
    },
    {
      icon: FileCheck2,
      title: "Gestión documental",
      text: "Convierte adjuntos y documentos en datos accionables: contratos, albaranes, facturas, solicitudes y reportes.",
    },
    {
      icon: BarChart3,
      title: "Briefings diarios",
      text: "Resume incidencias, oportunidades comerciales, bloqueos y tareas pendientes en un informe listo para decidir.",
    },
  ];

  return (
    <Section id="correos">
      <SectionHeading
        eyebrow="Gestión inteligente de correos"
        title="La bandeja de entrada deja de ser una lista infinita y empieza a ser un sistema operativo."
        text="JARVIS convierte correos y documentos en acciones: clasificar, responder, registrar, escalar, archivar y reportar."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Card key={item.title}>
            <item.icon className="size-6 text-brand" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Automatizar() {
  const examples = [
    "Clasificación de correos por intención, cliente, urgencia y departamento.",
    "Respuesta automática o borradores listos para revisión humana.",
    "Gestión documental de facturas, contratos, albaranes y solicitudes.",
    "Seguimiento comercial con recordatorios, tareas y actualización del CRM.",
    "Atención al cliente por email, WhatsApp, Telegram o chat interno.",
    "Recordatorios operativos para reuniones, vencimientos y documentación pendiente.",
    "Generación de informes comerciales, financieros u operativos.",
    "Resúmenes diarios con prioridades, bloqueos y decisiones pendientes.",
  ];

  return (
    <Section id="automatizar">
      <div className="rounded-lg border border-white/10 bg-[linear-gradient(180deg,oklch(1_0_0/0.055),oklch(1_0_0/0.018))] p-6 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Qué puede automatizar JARVIS"
            title="Ejemplos reales para reducir fricción en operaciones, ventas y administración."
            text="Empezamos por procesos repetitivos, medibles y conectados a datos. Cada flujo se diseña con reglas, trazabilidad y puntos de control."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {examples.map((example) => (
              <div key={example} className="flex items-start gap-3 rounded-lg border border-white/[0.08] bg-background/45 p-4">
                <CircleCheck className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                <p className="text-sm leading-6 text-foreground/88">{example}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Agents() {
  const agents: Array<{ icon: Icon; title: string; text: string }> = [
    {
      icon: Headphones,
      title: "Agente de atención al cliente",
      text: "Resuelve preguntas frecuentes, consulta información interna y escala conversaciones cuando detecta riesgo.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Agente comercial",
      text: "Prepara seguimientos, resume oportunidades, crea tareas y mantiene el CRM actualizado.",
    },
    {
      icon: FileText,
      title: "Agente documental",
      text: "Lee documentos, extrae datos, compara versiones y genera resúmenes accionables.",
    },
    {
      icon: ShieldCheck,
      title: "Agente operativo",
      text: "Supervisa procesos, detecta bloqueos, lanza avisos y deja rastro de cada acción.",
    },
  ];

  return (
    <Section id="agentes">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Agentes IA"
          title="Asistentes conectados a tus datos, procesos y criterios de negocio."
          text="Cada agente se diseña para una función concreta. No sustituye criterio humano: elimina trabajo repetitivo y prepara decisiones mejor informadas."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {agents.map((agent) => (
            <Card key={agent.title}>
              <div className="grid size-10 place-items-center rounded-lg bg-brand/10">
                <agent.icon className="size-5 text-brand" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{agent.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{agent.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Integrations() {
  const tools = [
    { icon: Workflow, label: "n8n", text: "Orquestación visual, webhooks y automatizaciones escalables." },
    { icon: DatabaseZap, label: "CRM", text: "Leads, oportunidades, tareas, notas y seguimiento comercial." },
    { icon: Layers3, label: "ERP", text: "Facturación, inventario, pedidos, proveedores y datos maestros." },
    { icon: MessageCircle, label: "WhatsApp", text: "Alertas, atención al cliente y recordatorios conversacionales." },
    { icon: Send, label: "Telegram", text: "Notificaciones internas, aprobaciones rápidas y resúmenes." },
    { icon: Network, label: "APIs", text: "Integraciones a medida con plataformas internas o externas." },
  ];

  return (
    <Section id="integraciones">
      <SectionHeading
        eyebrow="Integraciones"
        title="Conectamos herramientas, datos y equipos sin obligarte a cambiar tu stack."
        text="JARVIS funciona como una capa inteligente sobre tus sistemas: lee, transforma, decide y escribe donde corresponde."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Card key={tool.label}>
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-lg bg-white/[0.055]">
                <tool.icon className="size-5 text-brand" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold">{tool.label}</h3>
            </div>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">{tool.text}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Process() {
  const steps = [
    {
      title: "Diagnóstico",
      text: "Mapeamos procesos, herramientas, dolores y puntos donde la automatización tendría impacto real.",
    },
    {
      title: "Diseño",
      text: "Definimos reglas, permisos, fuentes de datos, límites del agente y criterios de revisión humana.",
    },
    {
      title: "Implementación",
      text: "Construimos flujos, conectores, prompts, acciones, paneles y documentación operativa.",
    },
    {
      title: "Mejora continua",
      text: "Medimos calidad, ajustamos reglas y añadimos nuevas automatizaciones según uso real.",
    },
  ];

  return (
    <Section id="metodo">
      <SectionHeading
        eyebrow="Método"
        title="De idea a sistema funcionando, con control técnico y criterio de negocio."
        text="La automatización B2B funciona cuando está bien acotada. Por eso empezamos pequeño, validamos rápido y escalamos solo lo que aporta valor."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-4">
        {steps.map((step, index) => (
          <Card key={step.title}>
            <span className="text-xs font-semibold text-brand">0{index + 1}</span>
            <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.text}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Engagement() {
  const options = [
    {
      title: "Sprint de automatización",
      text: "Para validar uno o dos procesos concretos con alcance cerrado y entrega rápida.",
      features: ["Auditoría inicial", "Flujo n8n o integración equivalente", "Documentación de uso"],
    },
    {
      title: "Sistema operativo IA",
      text: "Para empresas que quieren conectar correo, CRM, ERP, documentos y canales de comunicación.",
      features: ["Agentes IA por proceso", "Integraciones múltiples", "Panel de control y seguimiento"],
    },
    {
      title: "Partner de automatización",
      text: "Para equipos que necesitan mejora continua, mantenimiento y evolución del sistema.",
      features: ["Soporte recurrente", "Nuevos flujos mensuales", "Optimización y control de calidad"],
    },
  ];

  return (
    <Section id="planes">
      <SectionHeading
        eyebrow="Modelos de colaboración"
        title="Proyectos adaptados a la madurez operativa de cada empresa."
        text="Sin precios inflados ni paquetes genéricos. Definimos alcance, prioridades y retorno esperado antes de construir."
      />
      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {options.map((option, index) => (
          <div
            key={option.title}
            className={`rounded-lg border p-6 ${
              index === 1
                ? "border-brand/35 bg-brand/10 shadow-[0_0_0_1px_oklch(1_0_0/0.04)_inset]"
                : "border-white/10 bg-white/[0.035]"
            }`}
          >
            <h3 className="text-xl font-semibold">{option.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{option.text}</p>
            <ul className="mt-6 space-y-3">
              {option.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-foreground/90">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="#contacto"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/14 bg-white/[0.05] px-4 py-3 text-sm font-semibold transition hover:bg-white/[0.085]"
            >
              Hablar del alcance
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const fields =
    "w-full rounded-lg border border-white/10 bg-background/70 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/75 focus:border-brand/70 focus:ring-2 focus:ring-brand/20";

  return (
    <Section id="contacto" className="pb-24">
      <div className="rounded-lg border border-white/10 bg-[linear-gradient(180deg,oklch(1_0_0/0.06),oklch(1_0_0/0.02))] p-6 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Eyebrow>Contacto</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-normal sm:text-4xl md:text-5xl">
              Cuéntanos qué proceso te está frenando. Te diremos cómo automatizarlo.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
              Recibirás una primera lectura clara: automatizaciones posibles, complejidad,
              sistemas implicados y siguiente paso recomendado.
            </p>
            <div className="mt-8 grid gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <Mail className="size-4 text-brand" aria-hidden="true" />
                <a href="mailto:hola@jarviscontrol.com" className="hover:text-foreground">
                  hola@jarviscontrol.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <CalendarClock className="size-4 text-brand" aria-hidden="true" />
                <span>Diagnóstico inicial para empresas y equipos operativos.</span>
              </div>
              <div className="flex items-center gap-3">
                <Gauge className="size-4 text-brand" aria-hidden="true" />
                <span>Priorizamos procesos repetitivos, medibles y de alto volumen.</span>
              </div>
            </div>
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
            className="rounded-lg border border-white/10 bg-background/45 p-4 sm:p-5"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="sr-only" htmlFor="name">
                Nombre
              </label>
              <input id="name" name="name" required placeholder="Nombre" className={fields} />
              <label className="sr-only" htmlFor="email">
                Email corporativo
              </label>
              <input
                id="email"
                name="email"
                required
                type="email"
                placeholder="Email corporativo"
                className={fields}
              />
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <label className="sr-only" htmlFor="company">
                Empresa
              </label>
              <input id="company" name="company" placeholder="Empresa" className={fields} />
              <label className="sr-only" htmlFor="area">
                Área prioritaria
              </label>
              <select id="area" name="area" className={fields} defaultValue="">
                <option value="" disabled>
                  Área prioritaria
                </option>
                <option>Correos y facturas</option>
                <option>CRM y ventas</option>
                <option>ERP y operaciones</option>
                <option>WhatsApp o Telegram</option>
                <option>Documentación interna</option>
              </select>
            </div>
            <label className="sr-only" htmlFor="message">
              Qué quieres automatizar
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="¿Qué proceso quieres automatizar primero?"
              className={`${fields} mt-3 resize-none`}
            />
            <button
              type="submit"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background"
            >
              {sent ? (
                "Solicitud recibida"
              ) : (
                <>
                  Solicitar diagnóstico
                  <Send className="size-4" aria-hidden="true" />
                </>
              )}
            </button>
            <p className="mt-3 text-center text-xs leading-5 text-muted-foreground">
              Sin compromiso. Mejor si compartes herramientas actuales, volumen de trabajo y objetivo del proceso.
            </p>
          </form>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  const links = [
    ["Soluciones", "#soluciones"],
    ["Qué automatizar", "#automatizar"],
    ["Agentes IA", "#agentes"],
    ["Integraciones", "#integraciones"],
    ["Contacto", "#contacto"],
  ];

  return (
    <footer className="border-t border-white/[0.08] bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-semibold">
            <span className="grid size-8 place-items-center rounded-lg border border-white/10 bg-white/[0.06]">
              <Sparkles className="size-4 text-brand" aria-hidden="true" />
            </span>
            JARVIS<span className="text-muted-foreground">Control</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
            Automatización empresarial, agentes IA e integraciones para equipos
            que quieren operar con más control y menos trabajo repetitivo.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold">Producto</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {links.slice(0, 3).map(([label, href]) => (
              <li key={label}>
                <a href={href} className="transition hover:text-foreground">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold">Empresa</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {links.slice(3).map(([label, href]) => (
              <li key={label}>
                <a href={href} className="transition hover:text-foreground">
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a href="mailto:hola@jarviscontrol.com" className="transition hover:text-foreground">
                hola@jarviscontrol.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-muted-foreground sm:px-6 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} JARVIS Control. Todos los derechos reservados.</span>
          <span>Automatización B2B con IA, n8n, CRM, ERP y APIs.</span>
        </div>
      </div>
    </footer>
  );
}

export function Landing() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(180deg,oklch(0.13_0.01_250),oklch(0.105_0.008_250)_45%,oklch(0.13_0.01_250))]" />
      <div className="pointer-events-none fixed inset-0 -z-10 grid-bg opacity-80" />
      <Nav />
      <main>
        <Hero />
        <Positioning />
        <EmailAutomation />
        <Automatizar />
        <Agents />
        <Integrations />
        <Process />
        <Engagement />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
