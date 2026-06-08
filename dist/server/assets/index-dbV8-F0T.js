import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Sparkles, CircleCheck, Mail, Bot, Workflow, BarChart3, Check, ReceiptText, Star, MessageSquare, FileCheck2, Headphones, BriefcaseBusiness, FileText, ShieldCheck, DatabaseZap, Layers3, MessageCircle, Send, Network, ArrowRight, CalendarClock, Gauge, ChevronRight } from "lucide-react";
function Section({
  id,
  children,
  className = ""
}) {
  return /* @__PURE__ */ jsx("section", { id, className: `relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-6 md:py-28 ${className}`, children });
}
function Eyebrow({
  children
}) {
  return /* @__PURE__ */ jsxs("p", { className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-muted-foreground", children: [
    /* @__PURE__ */ jsx("span", { className: "size-1.5 rounded-full bg-brand" }),
    children
  ] });
}
function SectionHeading({
  eyebrow,
  title,
  text,
  className = ""
}) {
  return /* @__PURE__ */ jsxs("div", { className: `max-w-3xl ${className}`, children: [
    /* @__PURE__ */ jsx(Eyebrow, { children: eyebrow }),
    /* @__PURE__ */ jsx("h2", { className: "mt-5 text-balance text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-4xl md:text-5xl", children: title }),
    text ? /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg", children: text }) : null
  ] });
}
function Card({
  children,
  className = ""
}) {
  return /* @__PURE__ */ jsx("div", { className: `relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-6 shadow-[0_1px_0_0_oklch(1_0_0/0.06)_inset] transition duration-300 hover:border-white/20 hover:bg-white/[0.055] ${className}`, children });
}
function PrimaryCta({
  children = "Solicitar diagnóstico"
}) {
  return /* @__PURE__ */ jsxs("a", { href: "#contacto", className: "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background", children: [
    children,
    /* @__PURE__ */ jsx(ArrowRight, { className: "size-4", "aria-hidden": "true" })
  ] });
}
function SecondaryCta({
  href,
  children
}) {
  return /* @__PURE__ */ jsxs("a", { href, className: "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-white/[0.075] focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background", children: [
    children,
    /* @__PURE__ */ jsx(ChevronRight, { className: "size-4", "aria-hidden": "true" })
  ] });
}
function Nav() {
  const links = [["Soluciones", "#soluciones"], ["Automatiza", "#automatizar"], ["Agentes IA", "#agentes"], ["Integraciones", "#integraciones"], ["Contacto", "#contacto"]];
  return /* @__PURE__ */ jsx("header", { className: "fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-background/80 backdrop-blur-xl", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6", children: [
    /* @__PURE__ */ jsxs("a", { href: "#", className: "flex items-center gap-2 font-display text-base font-semibold sm:text-lg", children: [
      /* @__PURE__ */ jsx("span", { className: "grid size-8 place-items-center rounded-lg border border-white/10 bg-white/[0.06]", children: /* @__PURE__ */ jsx(Sparkles, { className: "size-4 text-brand", "aria-hidden": "true" }) }),
      /* @__PURE__ */ jsx("span", { children: "JARVIS" }),
      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Control" })
    ] }),
    /* @__PURE__ */ jsx("nav", { className: "hidden items-center gap-7 text-sm text-muted-foreground lg:flex", "aria-label": "Principal", children: links.map(([label, href]) => /* @__PURE__ */ jsx("a", { href, className: "transition hover:text-foreground", children: label }, label)) }),
    /* @__PURE__ */ jsx("a", { href: "#contacto", className: "inline-flex min-h-10 items-center justify-center rounded-lg border border-white/12 bg-white/[0.05] px-3 text-sm font-semibold text-foreground transition hover:bg-white/[0.09] sm:px-4", children: "Demo" })
  ] }) });
}
function Hero() {
  const signals = ["Correos, facturas y documentos bajo control", "Agentes IA conectados a tus sistemas", "Flujos n8n con trazabilidad empresarial"];
  const workflow = [{
    icon: Mail,
    title: "Entrada",
    text: "Email, WhatsApp, Telegram, CRM, ERP o API."
  }, {
    icon: Bot,
    title: "Decisión IA",
    text: "Clasifica, extrae datos, prioriza y redacta."
  }, {
    icon: Workflow,
    title: "Acción",
    text: "Actualiza sistemas, avisa al equipo y documenta."
  }];
  return /* @__PURE__ */ jsxs(Section, { className: "pb-16 pt-36 md:pb-24 md:pt-44", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-x-5 top-24 -z-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" }),
    /* @__PURE__ */ jsxs("div", { className: "grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-4xl", children: [
        /* @__PURE__ */ jsx(Eyebrow, { children: "Automatización empresarial con IA" }),
        /* @__PURE__ */ jsx("h1", { className: "mt-6 max-w-5xl text-balance text-4xl font-semibold leading-[1.04] tracking-normal text-foreground sm:text-5xl md:text-7xl", children: "Sistemas internos de IA para operar con menos trabajo manual." }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-xl md:leading-8", children: "JARVIS Control diseña e implementa automatizaciones para equipos B2B: correos inteligentes, facturas automáticas, agentes IA, seguimiento comercial e integraciones con CRM, ERP, APIs y n8n." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-9 flex flex-col gap-3 sm:flex-row", children: [
          /* @__PURE__ */ jsx(PrimaryCta, { children: "Solicitar diagnóstico" }),
          /* @__PURE__ */ jsx(SecondaryCta, { href: "#automatizar", children: "Ver qué automatizar" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-9 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3", children: signals.map((signal) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx(CircleCheck, { className: "mt-0.5 size-4 shrink-0 text-brand", "aria-hidden": "true" }),
          /* @__PURE__ */ jsx("span", { children: signal })
        ] }, signal)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-white/10 bg-[linear-gradient(180deg,oklch(0.20_0.014_250),oklch(0.145_0.011_250))] p-3 shadow-2xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-white/[0.08] px-3 pb-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "size-2.5 rounded-full bg-white/20" }),
            /* @__PURE__ */ jsx("span", { className: "size-2.5 rounded-full bg-white/20" }),
            /* @__PURE__ */ jsx("span", { className: "size-2.5 rounded-full bg-brand/80" })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: "jarvis-control / operations" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-3 pt-3", children: [
          workflow.map((item) => /* @__PURE__ */ jsx("div", { className: "rounded-lg border border-white/[0.08] bg-white/[0.035] p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "grid size-10 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand", children: /* @__PURE__ */ jsx(item.icon, { className: "size-5", "aria-hidden": "true" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h2", { className: "text-sm font-semibold", children: item.title }),
              /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm leading-6 text-muted-foreground", children: item.text })
            ] })
          ] }) }, item.title)),
          /* @__PURE__ */ jsx("div", { className: "rounded-lg border border-brand/25 bg-brand/10 p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-foreground", children: "Informe diario generado" }),
              /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Prioridades, incidencias, clientes VIP y tareas pendientes." })
            ] }),
            /* @__PURE__ */ jsx(BarChart3, { className: "size-5 shrink-0 text-brand", "aria-hidden": "true" })
          ] }) })
        ] })
      ] }) })
    ] })
  ] });
}
function Positioning() {
  const points = ["Auditoría de procesos y detección de automatizaciones rentables.", "Diseño de agentes IA con instrucciones, permisos y fuentes de datos claras.", "Implementación de flujos n8n, webhooks, APIs y conectores internos.", "Documentación, seguimiento y mejora continua después del despliegue."];
  return /* @__PURE__ */ jsx(Section, { id: "soluciones", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-12 lg:grid-cols-[0.9fr_1.1fr]", children: [
    /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Para equipos B2B", title: /* @__PURE__ */ jsx(Fragment, { children: "Automatización seria para operaciones que no pueden fallar." }), text: "No vendemos una demo bonita aislada de tu negocio. Construimos sistemas prácticos que leen información, deciden con reglas claras y ejecutan tareas en las herramientas que ya usa tu equipo." }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: points.map((point) => /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(Check, { className: "size-5 text-brand", "aria-hidden": "true" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-6 text-foreground/90", children: point })
    ] }, point)) })
  ] }) });
}
function EmailAutomation() {
  const items = [{
    icon: Mail,
    title: "Clasificación de correos",
    text: "Detecta intención, urgencia, departamento y cliente para enrutar cada mensaje sin depender de revisiones manuales."
  }, {
    icon: ReceiptText,
    title: "Facturas automáticas",
    text: "Extrae datos, valida campos, renombra archivos, archiva documentos y prepara la información para contabilidad o ERP."
  }, {
    icon: Star,
    title: "Clientes VIP",
    text: "Identifica cuentas prioritarias, acelera respuestas y alerta al equipo cuando un cliente crítico necesita atención."
  }, {
    icon: MessageSquare,
    title: "Respuesta asistida",
    text: "Redacta borradores con contexto, tono de marca y datos internos para que el equipo apruebe más rápido."
  }, {
    icon: FileCheck2,
    title: "Gestión documental",
    text: "Convierte adjuntos y documentos en datos accionables: contratos, albaranes, facturas, solicitudes y reportes."
  }, {
    icon: BarChart3,
    title: "Briefings diarios",
    text: "Resume incidencias, oportunidades comerciales, bloqueos y tareas pendientes en un informe listo para decidir."
  }];
  return /* @__PURE__ */ jsxs(Section, { id: "correos", children: [
    /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Gestión inteligente de correos", title: "La bandeja de entrada deja de ser una lista infinita y empieza a ser un sistema operativo.", text: "JARVIS convierte correos y documentos en acciones: clasificar, responder, registrar, escalar, archivar y reportar." }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3", children: items.map((item) => /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(item.icon, { className: "size-6 text-brand", "aria-hidden": "true" }),
      /* @__PURE__ */ jsx("h3", { className: "mt-4 text-lg font-semibold", children: item.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-6 text-muted-foreground", children: item.text })
    ] }, item.title)) })
  ] });
}
function Automatizar() {
  const examples = ["Clasificación de correos por intención, cliente, urgencia y departamento.", "Respuesta automática o borradores listos para revisión humana.", "Gestión documental de facturas, contratos, albaranes y solicitudes.", "Seguimiento comercial con recordatorios, tareas y actualización del CRM.", "Atención al cliente por email, WhatsApp, Telegram o chat interno.", "Recordatorios operativos para reuniones, vencimientos y documentación pendiente.", "Generación de informes comerciales, financieros u operativos.", "Resúmenes diarios con prioridades, bloqueos y decisiones pendientes."];
  return /* @__PURE__ */ jsx(Section, { id: "automatizar", children: /* @__PURE__ */ jsx("div", { className: "rounded-lg border border-white/10 bg-[linear-gradient(180deg,oklch(1_0_0/0.055),oklch(1_0_0/0.018))] p-6 md:p-10", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-10 lg:grid-cols-[0.85fr_1.15fr]", children: [
    /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Qué puede automatizar JARVIS", title: "Ejemplos reales para reducir fricción en operaciones, ventas y administración.", text: "Empezamos por procesos repetitivos, medibles y conectados a datos. Cada flujo se diseña con reglas, trazabilidad y puntos de control." }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-3 sm:grid-cols-2", children: examples.map((example) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 rounded-lg border border-white/[0.08] bg-background/45 p-4", children: [
      /* @__PURE__ */ jsx(CircleCheck, { className: "mt-0.5 size-4 shrink-0 text-brand", "aria-hidden": "true" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm leading-6 text-foreground/88", children: example })
    ] }, example)) })
  ] }) }) });
}
function Agents() {
  const agents = [{
    icon: Headphones,
    title: "Agente de atención al cliente",
    text: "Resuelve preguntas frecuentes, consulta información interna y escala conversaciones cuando detecta riesgo."
  }, {
    icon: BriefcaseBusiness,
    title: "Agente comercial",
    text: "Prepara seguimientos, resume oportunidades, crea tareas y mantiene el CRM actualizado."
  }, {
    icon: FileText,
    title: "Agente documental",
    text: "Lee documentos, extrae datos, compara versiones y genera resúmenes accionables."
  }, {
    icon: ShieldCheck,
    title: "Agente operativo",
    text: "Supervisa procesos, detecta bloqueos, lanza avisos y deja rastro de cada acción."
  }];
  return /* @__PURE__ */ jsx(Section, { id: "agentes", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-12 lg:grid-cols-[0.9fr_1.1fr]", children: [
    /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Agentes IA", title: "Asistentes conectados a tus datos, procesos y criterios de negocio.", text: "Cada agente se diseña para una función concreta. No sustituye criterio humano: elimina trabajo repetitivo y prepara decisiones mejor informadas." }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: agents.map((agent) => /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx("div", { className: "grid size-10 place-items-center rounded-lg bg-brand/10", children: /* @__PURE__ */ jsx(agent.icon, { className: "size-5 text-brand", "aria-hidden": "true" }) }),
      /* @__PURE__ */ jsx("h3", { className: "mt-4 text-lg font-semibold", children: agent.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-6 text-muted-foreground", children: agent.text })
    ] }, agent.title)) })
  ] }) });
}
function Integrations() {
  const tools = [{
    icon: Workflow,
    label: "n8n",
    text: "Orquestación visual, webhooks y automatizaciones escalables."
  }, {
    icon: DatabaseZap,
    label: "CRM",
    text: "Leads, oportunidades, tareas, notas y seguimiento comercial."
  }, {
    icon: Layers3,
    label: "ERP",
    text: "Facturación, inventario, pedidos, proveedores y datos maestros."
  }, {
    icon: MessageCircle,
    label: "WhatsApp",
    text: "Alertas, atención al cliente y recordatorios conversacionales."
  }, {
    icon: Send,
    label: "Telegram",
    text: "Notificaciones internas, aprobaciones rápidas y resúmenes."
  }, {
    icon: Network,
    label: "APIs",
    text: "Integraciones a medida con plataformas internas o externas."
  }];
  return /* @__PURE__ */ jsxs(Section, { id: "integraciones", children: [
    /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Integraciones", title: "Conectamos herramientas, datos y equipos sin obligarte a cambiar tu stack.", text: "JARVIS funciona como una capa inteligente sobre tus sistemas: lee, transforma, decide y escribe donde corresponde." }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3", children: tools.map((tool) => /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("span", { className: "grid size-10 place-items-center rounded-lg bg-white/[0.055]", children: /* @__PURE__ */ jsx(tool.icon, { className: "size-5 text-brand", "aria-hidden": "true" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold", children: tool.label })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-6 text-muted-foreground", children: tool.text })
    ] }, tool.label)) })
  ] });
}
function Process() {
  const steps = [{
    title: "Diagnóstico",
    text: "Mapeamos procesos, herramientas, dolores y puntos donde la automatización tendría impacto real."
  }, {
    title: "Diseño",
    text: "Definimos reglas, permisos, fuentes de datos, límites del agente y criterios de revisión humana."
  }, {
    title: "Implementación",
    text: "Construimos flujos, conectores, prompts, acciones, paneles y documentación operativa."
  }, {
    title: "Mejora continua",
    text: "Medimos calidad, ajustamos reglas y añadimos nuevas automatizaciones según uso real."
  }];
  return /* @__PURE__ */ jsxs(Section, { id: "metodo", children: [
    /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Método", title: "De idea a sistema funcionando, con control técnico y criterio de negocio.", text: "La automatización B2B funciona cuando está bien acotada. Por eso empezamos pequeño, validamos rápido y escalamos solo lo que aporta valor." }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-4 md:grid-cols-4", children: steps.map((step, index) => /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs("span", { className: "text-xs font-semibold text-brand", children: [
        "0",
        index + 1
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "mt-4 text-lg font-semibold", children: step.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-6 text-muted-foreground", children: step.text })
    ] }, step.title)) })
  ] });
}
function Engagement() {
  const options = [{
    title: "Sprint de automatización",
    text: "Para validar uno o dos procesos concretos con alcance cerrado y entrega rápida.",
    features: ["Auditoría inicial", "Flujo n8n o integración equivalente", "Documentación de uso"]
  }, {
    title: "Sistema operativo IA",
    text: "Para empresas que quieren conectar correo, CRM, ERP, documentos y canales de comunicación.",
    features: ["Agentes IA por proceso", "Integraciones múltiples", "Panel de control y seguimiento"]
  }, {
    title: "Partner de automatización",
    text: "Para equipos que necesitan mejora continua, mantenimiento y evolución del sistema.",
    features: ["Soporte recurrente", "Nuevos flujos mensuales", "Optimización y control de calidad"]
  }];
  return /* @__PURE__ */ jsxs(Section, { id: "planes", children: [
    /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Modelos de colaboración", title: "Proyectos adaptados a la madurez operativa de cada empresa.", text: "Sin precios inflados ni paquetes genéricos. Definimos alcance, prioridades y retorno esperado antes de construir." }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-4 lg:grid-cols-3", children: options.map((option, index) => /* @__PURE__ */ jsxs("div", { className: `rounded-lg border p-6 ${index === 1 ? "border-brand/35 bg-brand/10 shadow-[0_0_0_1px_oklch(1_0_0/0.04)_inset]" : "border-white/10 bg-white/[0.035]"}`, children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: option.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-6 text-muted-foreground", children: option.text }),
      /* @__PURE__ */ jsx("ul", { className: "mt-6 space-y-3", children: option.features.map((feature) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm text-foreground/90", children: [
        /* @__PURE__ */ jsx(Check, { className: "mt-0.5 size-4 shrink-0 text-brand", "aria-hidden": "true" }),
        feature
      ] }, feature)) }),
      /* @__PURE__ */ jsxs("a", { href: "#contacto", className: "mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/14 bg-white/[0.05] px-4 py-3 text-sm font-semibold transition hover:bg-white/[0.085]", children: [
        "Hablar del alcance",
        /* @__PURE__ */ jsx(ArrowRight, { className: "size-4", "aria-hidden": "true" })
      ] })
    ] }, option.title)) })
  ] });
}
function Contact() {
  const [sent, setSent] = useState(false);
  const fields = "w-full rounded-lg border border-white/10 bg-background/70 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/75 focus:border-brand/70 focus:ring-2 focus:ring-brand/20";
  return /* @__PURE__ */ jsx(Section, { id: "contacto", className: "pb-24", children: /* @__PURE__ */ jsx("div", { className: "rounded-lg border border-white/10 bg-[linear-gradient(180deg,oklch(1_0_0/0.06),oklch(1_0_0/0.02))] p-6 md:p-10", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-10 lg:grid-cols-[0.9fr_1.1fr]", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Eyebrow, { children: "Contacto" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-5 text-balance text-3xl font-semibold leading-tight tracking-normal sm:text-4xl md:text-5xl", children: "Cuéntanos qué proceso te está frenando. Te diremos cómo automatizarlo." }),
      /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-xl text-base leading-7 text-muted-foreground", children: "Recibirás una primera lectura clara: automatizaciones posibles, complejidad, sistemas implicados y siguiente paso recomendado." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 grid gap-3 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Mail, { className: "size-4 text-brand", "aria-hidden": "true" }),
          /* @__PURE__ */ jsx("a", { href: "mailto:hola@jarviscontrol.com", className: "hover:text-foreground", children: "hola@jarviscontrol.com" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CalendarClock, { className: "size-4 text-brand", "aria-hidden": "true" }),
          /* @__PURE__ */ jsx("span", { children: "Diagnóstico inicial para empresas y equipos operativos." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Gauge, { className: "size-4 text-brand", "aria-hidden": "true" }),
          /* @__PURE__ */ jsx("span", { children: "Priorizamos procesos repetitivos, medibles y de alto volumen." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: (event) => {
      event.preventDefault();
      setSent(true);
    }, className: "rounded-lg border border-white/10 bg-background/45 p-4 sm:p-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsx("label", { className: "sr-only", htmlFor: "name", children: "Nombre" }),
        /* @__PURE__ */ jsx("input", { id: "name", name: "name", required: true, placeholder: "Nombre", className: fields }),
        /* @__PURE__ */ jsx("label", { className: "sr-only", htmlFor: "email", children: "Email corporativo" }),
        /* @__PURE__ */ jsx("input", { id: "email", name: "email", required: true, type: "email", placeholder: "Email corporativo", className: fields })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-3 grid gap-3 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsx("label", { className: "sr-only", htmlFor: "company", children: "Empresa" }),
        /* @__PURE__ */ jsx("input", { id: "company", name: "company", placeholder: "Empresa", className: fields }),
        /* @__PURE__ */ jsx("label", { className: "sr-only", htmlFor: "area", children: "Área prioritaria" }),
        /* @__PURE__ */ jsxs("select", { id: "area", name: "area", className: fields, defaultValue: "", children: [
          /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Área prioritaria" }),
          /* @__PURE__ */ jsx("option", { children: "Correos y facturas" }),
          /* @__PURE__ */ jsx("option", { children: "CRM y ventas" }),
          /* @__PURE__ */ jsx("option", { children: "ERP y operaciones" }),
          /* @__PURE__ */ jsx("option", { children: "WhatsApp o Telegram" }),
          /* @__PURE__ */ jsx("option", { children: "Documentación interna" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("label", { className: "sr-only", htmlFor: "message", children: "Qué quieres automatizar" }),
      /* @__PURE__ */ jsx("textarea", { id: "message", name: "message", rows: 5, placeholder: "¿Qué proceso quieres automatizar primero?", className: `${fields} mt-3 resize-none` }),
      /* @__PURE__ */ jsx("button", { type: "submit", className: "mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background", children: sent ? "Solicitud recibida" : /* @__PURE__ */ jsxs(Fragment, { children: [
        "Solicitar diagnóstico",
        /* @__PURE__ */ jsx(Send, { className: "size-4", "aria-hidden": "true" })
      ] }) }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-center text-xs leading-5 text-muted-foreground", children: "Sin compromiso. Mejor si compartes herramientas actuales, volumen de trabajo y objetivo del proceso." })
    ] })
  ] }) }) });
}
function Footer() {
  const links = [["Soluciones", "#soluciones"], ["Qué automatizar", "#automatizar"], ["Agentes IA", "#agentes"], ["Integraciones", "#integraciones"], ["Contacto", "#contacto"]];
  return /* @__PURE__ */ jsxs("footer", { className: "border-t border-white/[0.08] bg-background", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 md:grid-cols-[1.3fr_0.7fr_0.7fr]", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 font-display text-lg font-semibold", children: [
          /* @__PURE__ */ jsx("span", { className: "grid size-8 place-items-center rounded-lg border border-white/10 bg-white/[0.06]", children: /* @__PURE__ */ jsx(Sparkles, { className: "size-4 text-brand", "aria-hidden": "true" }) }),
          "JARVIS",
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Control" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-md text-sm leading-6 text-muted-foreground", children: "Automatización empresarial, agentes IA e integraciones para equipos que quieren operar con más control y menos trabajo repetitivo." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-sm font-semibold", children: "Producto" }),
        /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-2 text-sm text-muted-foreground", children: links.slice(0, 3).map(([label, href]) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href, className: "transition hover:text-foreground", children: label }) }, label)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-sm font-semibold", children: "Empresa" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-2 text-sm text-muted-foreground", children: [
          links.slice(3).map(([label, href]) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href, className: "transition hover:text-foreground", children: label }) }, label)),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "mailto:hola@jarviscontrol.com", className: "transition hover:text-foreground", children: "hola@jarviscontrol.com" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-white/[0.08]", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-muted-foreground sm:px-6 md:flex-row md:items-center md:justify-between", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " JARVIS Control. Todos los derechos reservados."
      ] }),
      /* @__PURE__ */ jsx("span", { children: "Automatización B2B con IA, n8n, CRM, ERP y APIs." })
    ] }) })
  ] });
}
function Landing() {
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen overflow-x-hidden bg-background text-foreground", children: [
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(180deg,oklch(0.13_0.01_250),oklch(0.105_0.008_250)_45%,oklch(0.13_0.01_250))]" }),
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none fixed inset-0 -z-10 grid-bg opacity-80" }),
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(Positioning, {}),
      /* @__PURE__ */ jsx(EmailAutomation, {}),
      /* @__PURE__ */ jsx(Automatizar, {}),
      /* @__PURE__ */ jsx(Agents, {}),
      /* @__PURE__ */ jsx(Integrations, {}),
      /* @__PURE__ */ jsx(Process, {}),
      /* @__PURE__ */ jsx(Engagement, {}),
      /* @__PURE__ */ jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Landing as component
};
