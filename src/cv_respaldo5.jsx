import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2, Database, Globe, Briefcase, ExternalLink, Mail, Phone, MapPin,
  Github, Monitor, FileText, Printer, X, Sun, Moon, Layers,
  Laptop, FileCheck, ArrowUpRight
} from "lucide-react";

/* ========================================================================
   0. FUENTE ÚNICA DE VERDAD (SSOT) — NARRATIVA TÉCNICA DE ALTO IMPACTO
   ======================================================================== */
const CV_DATA = {
  name: "Francisco Emmanuel Arias López",
  title: "Desarrollador Full-Stack | Sistemas Empresariales & Bases de Datos",
  contact: {
    location: "Monterrey, NL",
    email: "emmanuel.arias1998@gmail.com",
    phone: "+52 81 3412 1519",
    portfolio: "https://lucky-queen-888f.emmanuel-arias1998.workers.dev/#/welcome",
    cvWeb: "https://solitary-dream-6a00.emmanuel-arias1998.workers.dev/",
    production: "https://bitter-haze-a7a9.emmanuel-arias1998.workers.dev/",
    github: "github.com/FranciscoEmmanuel1998",
    githubUrl: "https://github.com/FranciscoEmmanuel1998",
  },
  summary:
    "Desarrollador de Software especializado en la construcción de aplicaciones web escalables, arquitecturas backend y sistemas de gestión transaccional (ERP / POS). Experiencia práctica diseñando APIs robustas con NestJS, Node.js y TypeScript, integrando interfaces reactivas en React/Next.js y administrando persistencia relacional en PostgreSQL, SQL Server y Supabase con políticas RLS. Amplio dominio de reglas de negocio complejas, facturación electrónica (CFDI 4.0), pipelines CI/CD y pruebas automatizadas (Jest, Playwright) orientadas a maximizar la estabilidad en producción.",

  techStack: [
    {
      title: "Backend & Arquitectura",
      icon: Database,
      description: "Diseño y modelado de arquitecturas backend modulares, microservicios y persistencia relacional. Implementación de patrones de diseño, DTOs, inyección de dependencias y aislamiento de datos multi-inquilino.",
      technologies: ["NestJS", "Node.js", "TypeScript", "PostgreSQL", "SQL Server", "Supabase (RLS)", "REST APIs", "Patrones SOLID", "DTOs & Mappers"],
    },
    {
      title: "Frontend & Interfaces Web",
      icon: Globe,
      description: "Construcción de interfaces de usuario responsivas de alto rendimiento. Optimización de renderizado en cliente, manejo predecible del estado global y consumo eficiente de APIs y WebSockets.",
      technologies: ["React 18", "Next.js", "Nuxt 4", "TypeScript", "Tailwind CSS", "Redux Toolkit", "RTK Query", "Framer Motion", "HTML5 Canvas"],
    },
    {
      title: "DevOps, Infraestructura & QA",
      icon: Code2,
      description: "Automatización de despliegues y suites de pruebas automatizadas. Monitoreo de integridad de código, contenerización con Docker y orquestación de flujos de integración continua.",
      technologies: ["Docker", "GitLab CI/CD", "Playwright (E2E)", "Jest", "SonarQube", "Postman", "Cloudflare Workers", "Linux / Bash"],
    },
    {
      title: "Sistemas ERP & Reglas de Negocio",
      icon: Briefcase,
      description: "Traducción directa de procesos operativos empresariales a código. Dominio práctico en normativas fiscales mexicanas, conciliación transaccional de inventarios y sistemas de punto de venta.",
      technologies: ["ERP OpenBravo", "CONTPAQi Suite", "CFDI 4.0 / Carta Porte", "REP 2.0", "POS Multi-Tenant", "Integraciones Fintech", "Lógica Transaccional"],
    },
  ],

  experience: [
    {
      title: "Especialista en Sistemas ERP OpenBravo & Gestión de Datos",
      company: "Grupo Elibar y Asociados — Asignación en Valoris",
      type: "Tiempo Completo",
      period: "Feb 2026 – Actualidad",
      bullets: [
        "Administración y control operativo del ERP OpenBravo, asegurando la trazabilidad transaccional de recepción de mercancías, órdenes de surtido y emisión de remisiones en tiempo real.",
        "Auditoría y conciliación de discrepancias entre inventario físico y registros contables/fiscales dentro de la base de datos del ERP, manteniendo la consistencia de stock.",
        "Optimización del flujo de documentación fiscal (facturas, remisiones y validación de sellos) para el despacho y entrega de mercancía.",
      ],
    },
    {
      title: "Desarrollador Full-Stack",
      company: "Punto Red — GestoPago",
      type: "Contrato por Proyecto",
      period: "Oct 2025 – Ene 2026",
      bullets: [
        "Diseñé e implementé servicios backend en NestJS con TypeScript para el consumo e integración segura de APIs externas de servicios financieros.",
        "Apliqué arquitectura modular con inyección de dependencias, DTOs, validaciones estrictas y mappers desacoplados del modelo de datos central.",
        "Participé en pipelines de integración continua con GitLab CI/CD, desarrollo de pruebas unitarias en Jest y revisiones estructuradas de código (Pull Requests).",
      ],
    },
    {
      title: "Desarrollador Web & Bases de Datos SQL",
      company: "VIDARE, S.A. de C.V. (El Galeón)",
      type: "Consultoría por Entregable",
      period: "Oct 2025",
      bullets: [
        "Diseñé y desplegué una plataforma web responsiva de reportería analítica y filtrado de ventas por sucursal conectada directamente a Microsoft SQL Server.",
        "Estructuré scripts y consultas complejas en T-SQL con agregaciones, índices y optimización de rendimiento para el análisis de indicadores comerciales e inventarios.",
        "Diseñé la arquitectura inicial del módulo de gestión de inventarios, implementando la autenticación de usuarios y la capa de acceso a datos.",
      ],
    },
    {
      title: "Consultor de Sistemas Empresariales & SQL Server",
      company: "Asesorías Limac / Limnovatech",
      type: "Tiempo Completo",
      period: "Jul 2023 – Jun 2025",
      bullets: [
        "Implementación, mantenimiento y soporte técnico avanzado a la suite empresarial CONTPAQi (Comercial, Factura Electrónica, Nóminas, Contabilidad y Bancos) en arquitecturas cliente-servidor.",
        "Resolución de más de 2,000 incidencias críticas de datos directamente sobre motores SQL Server, realizando corrección de tablas, migraciones y mantenimiento de índices.",
        "Automatización de procesos operativos mediante scripts en Python para generación de bitácoras de servicio, reduciendo en un 70% el tiempo de procesamiento manual.",
        "Capacitación técnica y asesoría a usuarios en normatividad fiscal digital (CFDI 4.0, Recibos Electrónicos de Pago REP 2.0 y Complemento Carta Porte).",
      ],
    },
  ],

  projects: [
    {
      title: "AvivaCheck POS",
      role: "Arquitecto de Software & Desarrollador Full-Stack",
      description: "* Sistema SaaS de punto de venta (POS) y gestión transaccional multi-tenant construido con Nuxt, Vue, Pinia, Vuetify y Supabase.\n* Diseñé el modelo relacional y la lógica transaccional en PostgreSQL/Supabase: organizaciones, perfiles, catálogos, órdenes, sesiones de caja y control de inventarios.\n* Implementé seguridad granular por roles (RBAC) mediante Supabase Auth y políticas Row-Level Security (RLS) en base de datos, funciones RPC y middleware de rutas.\n* Desarrollé suite de pruebas operativas automatizadas de extremo a extremo (E2E) con Playwright y pantalla de cocina (KDS) en tiempo real.",
      highlights: ["Arquitectura Multi-Tenant con PostgreSQL RLS", "Suite automatizada de pruebas E2E con Playwright"],
      stack: "Nuxt 4, Supabase, PostgreSQL, Vuetify 3, Playwright, GitLab CI/CD",
      url: "https://twilight-scene-bd12.emmanuel-arias1998.workers.dev/login",
      repo: "https://github.com/AproachingDark1889/avivamiento-webpage",
    },
    {
      title: "PuntoRed Financial Web",
      role: "Desarrollador Full-Stack",
      description: "* Arquitectura Full-Stack de un sistema de pagos referenciados y transacciones masivas con integración de APIs financieras.\n* Construcción de middleware/servidor proxy seguro para autenticación y consumo de APIs de terceros sin exponer credenciales en el cliente.\n* Interfaz reactiva de ultra-alta velocidad construida en React 18, TypeScript y RTK Query con precarga heurística de datos al cursor y sincronización en segundo plano.\n* Módulo de procesamiento transaccional masivo con barra de progreso en vivo, gestión de estados y exportación de reportes (.xlsx, CSV, PDF).",
      highlights: ["Middleware proxy con caché de autenticación", "Procesamiento concurrente con barra de estado en vivo"],
      stack: "React 18, TypeScript, Redux Toolkit, RTK Query, PHP Backend, Tailwind CSS, Vite",
      url: "https://sparkling-water-8d7f.emmanuel-arias1998.workers.dev/login",
      repo: "https://github.com/FranciscoArias041/PUNTO-RED",
    },
    {
      title: "TradingIA Platform",
      role: "Creador & Desarrollador Full-Stack",
      description: "* Plataforma de monitoreo y análisis de mercados de criptoactivos en tiempo real con integración de múltiples exchanges (Binance, Coinbase, Kraken, KuCoin).\n* Arquitectura orientada a eventos en Node.js utilizando WebSockets y Socket.IO para ingesta, procesamiento y distribución de flujos de datos sin latencia.\n* Dashboard interactivo en React 18 con renderizado de indicadores técnicos, alertas dinámicas y métricas de latencia de conexión.",
      highlights: [
        "Integración multi-exchange y arquitectura dirigida por eventos",
        "Ingesta de datos de baja latencia con WebSockets y Socket.IO",
      ],
      stack: "React 18, TypeScript, Tailwind CSS, Node.js, Socket.IO, WebSockets, Vite",
      url: "https://lingering-butterfly-c663.emmanuel-arias1998.workers.dev/",
      repo: "https://github.com/FranciscoEmmanuel1998/TradingIA",
    },
    {
      title: "Portal de Sistemas en Producción",
      role: "Autor & Ingeniero de Despliegue",
      description: "* Portal web centralizado con demostraciones en video y auditoría visual de sistemas empresariales desarrollados y desplegados en entornos reales.\n* Presenta casos de uso de AvivaCheck POS, PuntoRed, aplicaciones móviles de inventarios y dashboards de métricas comerciales.",
      highlights: ["Exhibición de plataformas funcionales en entornos de producción"],
      stack: "HTML5, CSS Modules, JavaScript, Cloudflare CDN",
      url: "https://bitter-haze-a7a9.emmanuel-arias1998.workers.dev/",
      repo: null,
    },
  ],

  labProjects: [
    {
      title: "Portafolio DIST (Symbiotic Web)",
      desc: "* Portafolio web interactivo de alto impacto técnico con asistente de navegación interactivo y arquitectura modular basada en componentes desacoplados.",
      tags: ["React 18", "TypeScript", "Radix UI", "Gamificación"],
      url: "https://lucky-queen-888f.emmanuel-arias1998.workers.dev/#/welcome",
      repo: "https://github.com/FranciscoEmmanuel1998/Portafolio-DIST",
    },
    {
      title: "Museo Matemático Interactivo",
      desc: "* Experiencia de simulación visual y matemática en Canvas 2D/WebGL integrando el Juego de la Vida de Conway, el atractor de Lorenz y dinámicas de partículas en tiempo real.",
      tags: ["Canvas API", "Web Audio", "TypeScript", "React 18", "Vite"],
      url: "https://royal-snow-cbe3.emmanuel-arias1998.workers.dev/",
      repo: "https://github.com/FranciscoEmmanuel1998/Animaci-n",
    },
  ],

  skills: {
    "Desarrollo & Backend": ["TypeScript", "JavaScript", "NestJS", "Node.js", "React 18", "Next.js", "REST APIs", "Tailwind CSS"],
    "Bases de Datos & Cloud": ["PostgreSQL", "SQL Server (T-SQL)", "Supabase (RLS)", "MySQL", "Docker", "Cloudflare Workers"],
    "Calidad & Testing": ["Git / GitHub", "GitLab CI/CD", "Playwright (E2E)", "Jest", "SonarQube", "Postman"],
    "Sistemas & ERP": ["ERP OpenBravo", "CONTPAQi Suite", "CFDI 4.0 / REP 2.0", "Complemento Carta Porte", "Arquitectura POS"],
  },

  education: [
    { degree: "Licenciatura en Multimedia y Animación Digital", institution: "Universidad Autónoma de Nuevo León (UANL)" },
    { degree: "Bachillerato Tecnológico en TIC", institution: "Escuela y Preparatoria Técnica Álvaro Obregón" },
  ],
};

/* ========================================================================
   1. COMPONENTE: SWITCH TÁCTICO (EPIC TOGGLE)
   ======================================================================== */
const TacticalSwitch = ({ isDark, toggle }) => {
  return (
    <div onClick={toggle} className="cursor-pointer group relative flex items-center gap-3 select-none">
      <span className={`text-[10px] font-bold tracking-widest uppercase transition-colors duration-300 ${!isDark ? 'text-blue-600' : 'text-slate-500'}`}>Paper</span>
      <div className={`w-14 h-7 rounded-full p-1 shadow-inner transition-colors duration-500 ease-out border flex items-center ${isDark ? 'bg-slate-800 border-slate-600' : 'bg-slate-200 border-slate-300'}`}>
        <motion.div
          className={`w-5 h-5 rounded-full shadow-md flex items-center justify-center relative z-10 ${isDark ? 'bg-indigo-500' : 'bg-white'}`}
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          animate={{ x: isDark ? 28 : 0 }}
        >
          {isDark ? <Moon size={10} className="text-white" /> : <Sun size={10} className="text-orange-400" />}
        </motion.div>
      </div>
      <span className={`text-[10px] font-bold tracking-widest uppercase transition-colors duration-300 ${isDark ? 'text-indigo-400' : 'text-slate-500'}`}>Dark</span>
    </div>
  );
};

/* ========================================================================
   2. COMPONENTE: COMPACT CV (RENDERIZADO ATS Y VISTA IMPRESIÓN A4)
   ======================================================================== */
const CompactCV = ({ isDarkMode, data }) => {
  const Section = ({ title, children, className = "" }) => (
    <section className={`mb-4 md:mb-3 print:mb-3 break-inside-avoid ${className}`}>
      <h3 className="text-sm md:text-xs print:text-xs font-bold border-b-2 pb-0.5 mb-2 md:mb-2 print:mb-2 uppercase tracking-wider text-[var(--primary)] border-[var(--border)]">{title}</h3>
      {children}
    </section>
  );

  const ContactRow = ({ icon, text, href }) => (
    <div className="flex items-center gap-2 text-xs md:text-[11px] print:text-[11px] mb-2 md:mb-1.5 print:mb-1.5 break-all sm:break-normal">
      <span className="text-[var(--primary)]">{icon}</span>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: 'var(--text-sec)' }}>{text}</a>
      ) : (
        <span style={{ color: 'var(--text-sec)' }}>{text}</span>
      )}
    </div>
  );

  return (
    <div id="cv-print" className={`w-full print:p-0 transition-colors duration-300 ${isDarkMode ? 'cv-dark' : 'cv-light'}`}>
      <style>{`
        .cv-light { 
          --bg: #ffffff; --text-main: #1e293b; --text-sec: #475569; 
          --primary: #1e3a8a; --border: #cbd5e1; --tag-bg: #f8fafc; 
          --card-bg: #ffffff; --card-border: #e2e8f0;
        }
        .cv-dark { 
          --bg: #0f172a; --text-main: #f8fafc; --text-sec: #94a3b8; 
          --primary: #818cf8; --border: #334155; --tag-bg: #1e293b; 
          --card-bg: #1e293b; --card-border: #334155;
        }
        .cv-container {
          background-color: var(--bg);
          color: var(--text-sec);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }
        .cv-container h1, .cv-container h2, .cv-container h4 { color: var(--text-main); }
        .cv-container p, .cv-container span, .cv-container li { color: var(--text-sec); }
        .cv-container a { color: var(--text-sec); text-decoration: none; }
        .cv-tag { background: var(--tag-bg); color: var(--text-main); }
        
        @keyframes rainbow { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        .rainbow-bar { 
          background: linear-gradient(90deg, #1e3a8a, #3b82f6, #60a5fa, #9333ea); 
          background-size: 200% 200%; animation: rainbow 6s ease infinite; 
          height: 3px; width: 100%; border-radius: 99px; margin-top: 0.25rem; 
        }
        .cv-dark .rainbow-bar { background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899); background-size: 200% 200%; animation: rainbow 6s ease infinite; }

        @media print {
          @page { size: A4; margin: 8mm; }
          .app-ui, .print-hide { display: none !important; }
          html, body, #root, [class*="fixed"], [class*="overflow-y-auto"] {
            background: #ffffff !important;
            color: #1e293b !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: visible !important;
            height: auto !important;
            max-height: none !important;
            position: static !important;
          }
          #cv-print {
            display: block !important;
            position: static !important;
            visibility: visible !important;
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            padding: 0 !important;
            margin: 0 !important;
            overflow: visible !important;
            box-shadow: none !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          #cv-print * { visibility: visible !important; }
          a, a[href] {
            display: inline !important;
            position: relative !important;
            color: #1d4ed8 !important;
            text-decoration: underline !important;
            cursor: pointer !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .cv-container { box-shadow: none !important; max-width: 100% !important; padding: 0 !important; }
          .rainbow-bar { animation: none !important; }
          .print-page-2 {
            break-before: page !important;
            page-break-before: always !important;
            margin-top: 15px !important;
          }
          article, .break-inside-avoid {
            break-inside: avoid !important;
            page-break-inside: avoid !important;
          }
        }
      `}</style>

      <div className="cv-container max-w-[210mm] mx-auto shadow-2xl bg-[var(--bg)] p-4 sm:p-6 rounded-none sm:rounded-lg print:rounded-none">

        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-[210px_1fr] print:grid-cols-[210px_1fr] gap-4 md:gap-5 mb-4 md:mb-3">
          <div className="text-center md:text-left print:text-left">
            <h1 className="text-2xl md:text-xl print:text-xl font-extrabold uppercase tracking-tight leading-none mb-1">
              {data.name.split(" ")[0]} <br className="hidden md:block print:block" /> <span className="md:hidden print:hidden"> </span> {data.name.split(" ").slice(1).join(" ")}
            </h1>
            <div className="rainbow-bar w-24 mx-auto md:w-full md:mx-0 print:w-full print:mx-0"></div>
          </div>
          <div className="flex flex-col justify-center text-center md:text-left print:text-left">
            <h2 className="text-base md:text-sm print:text-sm font-semibold text-[var(--primary)] md:text-inherit print:text-inherit">{data.title}</h2>
            <p className="text-[11px] md:text-[10px] print:text-[10px] mt-2 md:mt-1.5 text-justify leading-relaxed md:leading-snug print:leading-snug">{data.summary}</p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[210px_1fr] print:grid-cols-[210px_1fr] gap-5 md:gap-5 print:gap-5">

          {/* SIDEBAR */}
          <aside className="space-y-4 md:space-y-3 print:space-y-3 mb-6 md:mb-0 print:mb-0">
            <Section title="Contacto">
              <ContactRow icon={<MapPin size={12} />} text={data.contact.location} />
              <ContactRow icon={<Mail size={12} />} text={data.contact.email} href={`mailto:${data.contact.email}`} />
              <ContactRow icon={<Phone size={12} />} text={data.contact.phone} href={`tel:${data.contact.phone.replace(/\s+/g, '')}`} />
              <ContactRow icon={<Globe size={12} />} text="Portafolio Web" href={data.contact.portfolio} />
              <ContactRow icon={<Github size={12} />} text="GitHub Perfil" href={data.contact.githubUrl} />
              <ContactRow icon={<FileCheck size={12} />} text="CV Web Interactivo" href={data.contact.cvWeb} />
              <ContactRow icon={<Laptop size={12} />} text="Sistemas en Producción" href={data.contact.production} />
            </Section>

            <Section title="Habilidades Técnicas">
              <div className="space-y-2">
                {Object.entries(data.skills).map(([group, items]) => (
                  <div key={group}>
                    <p className="text-[9px] font-bold uppercase opacity-70 mb-0.5">{group}</p>
                    <div className="flex flex-wrap gap-1">
                      {items.map((skill) => (
                        <span key={skill} className="cv-tag px-1.5 py-0.5 rounded text-[9px] font-medium border border-[var(--border)]">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Formación">
              <div className="space-y-2">
                {data.education.map((ed, i) => (
                  <div key={i}>
                    <p className="text-[10px] font-bold leading-tight">{ed.degree}</p>
                    <p className="text-[9px] opacity-80">{ed.institution}</p>
                  </div>
                ))}
              </div>
            </Section>
          </aside>

          {/* MAIN COLUMN */}
          <main>
            <Section title="Experiencia Profesional">
              <div className="space-y-3 md:space-y-2.5">
                {data.experience.map((exp, i) => (
                  <article key={i} className="mb-3 md:mb-2 print:mb-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1 md:mb-0.5 print:mb-0.5 gap-1 sm:gap-0">
                      <h4 className="text-sm md:text-xs print:text-xs font-bold">{exp.title}</h4>
                      <span className="text-[10px] md:text-[9px] print:text-[9px] font-mono border border-[var(--border)] px-1.5 py-0.5 md:py-0 print:py-0 rounded inline-block w-fit">{exp.period}</span>
                    </div>
                    <p className="text-xs md:text-[10px] print:text-[10px] font-semibold mb-1 md:mb-0.5 print:mb-0.5 text-[var(--primary)]">
                      {exp.company} {exp.type && <span className="text-[var(--text-sec)] font-normal text-[9px] ml-1">({exp.type})</span>}
                    </p>
                    <ul className="list-disc pl-4 md:pl-3 print:pl-3 space-y-1 md:space-y-0.5 print:space-y-0.5">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="text-[11px] md:text-[9px] print:text-[9px] leading-snug md:leading-snug print:leading-snug pl-0.5 marker:text-[var(--primary)]">{b}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </Section>

            <Section title="Proyectos de Ingeniería Destacados" className="mt-2 md:mt-4 print:mt-2 print-page-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 print:grid-cols-2 gap-3 md:gap-2 print:gap-2">
                {data.projects.map((p, i) => (
                  <div key={i} className="border border-[var(--card-border)] bg-[var(--card-bg)] p-2 rounded">
                    <div className="flex justify-between items-start mb-0.5">
                      <h4 className="text-[10px] font-bold">{p.title}</h4>
                      <div className="flex gap-1.5">
                        {p.url && <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:opacity-80 transition-opacity"><ExternalLink size={10} /></a>}
                        {p.repo && <a href={p.repo} target="_blank" rel="noopener noreferrer" className="text-[var(--text-sec)] hover:opacity-80 transition-opacity"><Github size={10} /></a>}
                      </div>
                    </div>
                    <p className="text-[8px] leading-tight opacity-90 mb-1 whitespace-pre-line">{p.description}</p>
                    <div className="flex flex-wrap gap-0.5">
                      {p.stack.split(", ").map((tech) => (
                        <span key={tech} className="cv-tag px-1 py-0 rounded text-[7px] font-medium border border-[var(--border)]">{tech}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Lab Banner — PDF */}
            {data.labProjects?.length > 0 && (
              <div className="mt-2 border border-[var(--card-border)] rounded p-2" style={{ background: 'var(--tag-bg)' }}>
                <h4 className="text-[10px] md:text-[9px] print:text-[9px] font-bold uppercase tracking-wider mb-2 md:mb-1.5 print:mb-1.5 text-center md:text-left print:text-left" style={{ color: 'var(--primary)' }}>
                  ◆ Proyectos de Investigación & Interfaz
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 print:grid-cols-2 gap-3 md:gap-2 print:gap-2">
                  {data.labProjects.map((lp, i) => (
                    <div key={i} className="flex flex-col">
                      <div className="flex items-center gap-1 mb-0.5">
                        <span className="text-[9px] font-bold" style={{ color: 'var(--text-main)' }}>{lp.title}</span>
                        {lp.url && <a href={lp.url} target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:opacity-80"><ExternalLink size={8} /></a>}
                        {lp.repo && <a href={lp.repo} target="_blank" rel="noopener noreferrer" className="text-[var(--text-sec)] hover:opacity-80"><Github size={8} /></a>}
                      </div>
                      <p className="text-[7.5px] leading-tight opacity-85 whitespace-pre-line" style={{ color: "var(--text-sec)" }}>{lp.desc}</p>
                      <div className="flex flex-wrap gap-0.5 mt-0.5">
                        {lp.tags.map((t) => (
                          <span key={t} className="cv-tag px-1 py-0 rounded text-[6.5px] font-semibold border border-[var(--border)]">{t}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

/* ========================================================================
   3. COMPONENTE PRINCIPAL (APP — USA CV_DATA)
   ======================================================================== */
const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [printDarkMode, setPrintDarkMode] = useState(false);

  const TechStackCard = ({ stack }) => {
    const Icon = stack.icon;
    return (
      <div className="glass-effect rounded-xl p-6 hover-glow transition-all duration-300 group h-full flex flex-col">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all duration-300">
            <Icon className="w-6 h-6 text-blue-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2">{stack.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{stack.description}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-auto">
          {stack.technologies.map((tech) => (
            <span key={tech} className="px-2.5 py-1 bg-gradient-to-r from-blue-500/10 to-purple-600/10 text-blue-300 text-xs rounded-full border border-blue-500/20 hover:border-blue-500/40 transition-colors duration-200">
              {tech}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* --- MODAL DE IMPRESIÓN --- */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-md flex flex-col"
          >
            <div className="p-3 sm:p-4 flex justify-between items-center bg-slate-900/50 border-b border-slate-800 print-hide z-50">
              <button onClick={() => setShowModal(false)} className="flex items-center gap-1 sm:gap-2 text-slate-400 hover:text-white transition-colors">
                <X size={20} /> <span className="font-medium hidden sm:inline">Cerrar</span>
              </button>
              <TacticalSwitch isDark={printDarkMode} toggle={() => setPrintDarkMode(!printDarkMode)} />
              <button onClick={() => window.print()} className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-bold shadow-lg shadow-indigo-500/20 transition-all flex items-center gap-2 text-sm sm:text-base">
                <Printer size={18} /> <span className="hidden sm:inline">Imprimir PDF</span><span className="sm:hidden">PDF</span>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-0 sm:p-4 bg-slate-950/50">
              <div className="max-w-[210mm] mx-auto">
                <CompactCV isDarkMode={printDarkMode} data={CV_DATA} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30 font-sans app-ui">

        <style>{`
          .glass-effect {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          }
          .text-gradient {
            background: linear-gradient(to right, #60a5fa, #a855f7);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
          }
          .hover-glow:hover {
            box-shadow: 0 0 20px rgba(96, 165, 250, 0.15);
            border-color: rgba(96, 165, 250, 0.3);
          }
          ::-webkit-scrollbar { width: 8px; }
          ::-webkit-scrollbar-track { background: #0f172a; }
          ::-webkit-scrollbar-thumb { background: #334155; border-radius: 4px; }
          ::-webkit-scrollbar-thumb:hover { background: #475569; }
          @media print { .app-ui { display: none !important; } }
        `}</style>

        {/* --- BOTÓN FLOTANTE --- */}
        {!showModal && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => setShowModal(true)}
            className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-40 p-3 sm:p-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 flex items-center gap-2 font-bold group"
            title="Generar PDF"
          >
            <Layers className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" />
            <span className="hidden sm:inline">Versión PDF</span>
          </motion.button>
        )}

        {/* --- FONDO APP --- */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-purple-600/10 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">

          {/* Header Inmersivo */}
          <header className="text-center mb-16">
            <div className="inline-block mb-4 p-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
              <div className="px-4 py-1 rounded-full bg-slate-950/80 backdrop-blur-sm">
                <span className="text-xs font-medium text-blue-300 tracking-wider uppercase">Trayectoria profesional de:</span>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              <span className="text-gradient">{CV_DATA.name}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 font-light">{CV_DATA.title}</p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-gray-400 mb-8">
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-500" /><span>{CV_DATA.contact.location}</span></div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-blue-500" /><a href={`mailto:${CV_DATA.contact.email}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">{CV_DATA.contact.email}</a></div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-blue-500" /><a href={`tel:${CV_DATA.contact.phone.replace(/\s+/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">{CV_DATA.contact.phone}</a></div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                { text: "Portafolio Web", url: CV_DATA.contact.portfolio, icon: Globe },
                { text: "Sistemas en Producción", url: CV_DATA.contact.production, icon: Monitor },
                { text: "GitHub", url: CV_DATA.contact.githubUrl, icon: Github },
              ].map((link) => (
                <a key={link.text} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 text-sm text-gray-300 hover:text-white">
                  <link.icon className="w-4 h-4" />
                  {link.text}
                </a>
              ))}
              <button onClick={() => setShowModal(true)} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 text-sm text-gray-300 hover:text-white">
                <FileText className="w-4 h-4" />
                CV Web Interactivo
              </button>
            </div>
          </header>

          {/* Resumen */}
          <section className="mb-20">
            <div className="glass-effect rounded-xl p-8 border-l-4 border-l-blue-500">
              <h2 className="text-2xl font-bold mb-4 text-white">Resumen Profesional</h2>
              <p className="text-gray-300 leading-relaxed text-lg">{CV_DATA.summary}</p>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-3"><Database className="w-8 h-8 text-blue-500" /><span className="text-gradient">Stack Técnico</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CV_DATA.techStack.map((stack) => <TechStackCard key={stack.title} stack={stack} />)}
            </div>
          </section>

          {/* Proyectos */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-3"><Code2 className="w-8 h-8 text-purple-500" /><span className="text-gradient">Proyectos de Ingeniería Destacados</span></h2>
            <div className="space-y-6">
              {CV_DATA.projects.map((project) => (
                <article key={project.title} className="glass-effect rounded-xl p-6 hover-glow transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                        {project.title}
                        {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300" title="Ver Proyecto"><ExternalLink className="w-5 h-5" /></a>}
                        {project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white ml-2" title="Ver Código"><Github className="w-5 h-5" /></a>}
                      </h3>
                      <p className="text-sm font-medium text-blue-400 mt-1">{project.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed border-l-2 border-slate-700 pl-4 whitespace-pre-line">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
                    {project.stack.split(", ").map((tech) => <span key={tech} className="px-2.5 py-1 bg-slate-800 text-gray-300 text-xs rounded-lg border border-slate-700">{tech}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Trayectoria Profesional */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-3"><Briefcase className="w-8 h-8 text-blue-500" /><span className="text-gradient">Trayectoria Profesional</span></h2>
            <div className="relative border-l border-slate-800 ml-3 space-y-12">
              {CV_DATA.experience.map((exp, index) => (
                <article key={index} className="relative pl-8 sm:pl-12">
                  <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500" />
                  <div className="glass-effect rounded-xl p-6 hover:bg-slate-900/40 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-blue-400 font-medium text-lg">{exp.company} {exp.type && <span className="text-gray-500 text-sm font-normal ml-2">({exp.type})</span>}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-slate-800 text-xs text-gray-400 border border-slate-700 whitespace-nowrap">{exp.period}</span>
                    </div>
                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start gap-3">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Formación Académica */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8"><span className="text-gradient">Formación Académica</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CV_DATA.education.map((edu, index) => (
                <div key={index} className="glass-effect rounded-xl p-6 border-b-2 border-b-transparent hover:border-b-blue-500 transition-all">
                  <h3 className="text-lg font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-sm text-gray-400">{edu.institution}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Lab Banner — Immersive */}
          {CV_DATA.labProjects?.length > 0 && (
            <section className="mb-12">
              <div className="relative overflow-hidden rounded-2xl border border-purple-500/20" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(168,85,247,0.12) 50%, rgba(236,72,153,0.08) 100%)' }}>
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, #6366f1, #a855f7, #ec4899)' }} />
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-purple-500/15 border border-purple-500/20">
                      <Monitor className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">Laboratorio de Innovación & Interfaces Avanzadas</h3>
                      <p className="text-xs text-gray-500">Simulaciones matemáticas, Canvas 2D y micro-interacciones</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {CV_DATA.labProjects.map((lp) => (
                      <div key={lp.title} className="group flex gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/30 transition-all duration-300">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="text-base font-bold text-white">{lp.title}</h4>
                            {lp.url && <a href={lp.url} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors" title="Ver Proyecto"><ExternalLink className="w-4 h-4" /></a>}
                            {lp.repo && <a href={lp.repo} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" title="Ver Código"><Github className="w-4 h-4" /></a>}
                          </div>
                          <p className="text-sm text-gray-400 leading-relaxed mb-3">{lp.desc}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {lp.tags.map((t) => (
                              <span key={t} className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">{t}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          <footer className="text-center text-gray-600 text-sm py-8 border-t border-slate-900">
          </footer>

        </div>
      </div>
    </>
  );
};

export default App;