import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2, Database, Globe, Briefcase, ExternalLink, Mail, Phone, MapPin,
  Github, Monitor, FileText, Printer, X, Sun, Moon, Layers,
  Laptop, FileCheck, ArrowUpRight
} from "lucide-react";

/* ========================================================================
   0. FUENTE ÚNICA DE VERDAD (SSOT) — EDITAR AQUÍ LOS DATOS ACTUALIZADOS
   ======================================================================== */
const CV_DATA = {
  name: "Francisco Emmanuel Arias López",
  title: "Desarrollador Full-Stack | Sistemas empresariales y bases de datos",
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
    "Desarrollador de software enfocado en construir aplicaciones web y sistemas de gestión empresarial desde la base de datos hasta la experiencia de usuario. He trabajado con React, Next.js, TypeScript, NestJS, Node.js y bases de datos SQL Server/PostgreSQL/Supabase. Integro buenas prácticas de ingeniería usando Docker, Git/GitLab CI/CD y pruebas automatizadas (Jest/Playwright), además de experiencia con sistemas empresariales y normativa fiscal (CONTPAQi, ERP OpenBravo, CFDI 4.0), lo que me ayuda a convertir la operación diaria y las reglas de negocio en soluciones funcionales y escalables.",

  techStack: [
    {
      title: "Backend & Arquitectura",
      icon: Database,
      description: "He modelado y orquestado bases de datos relacionales (SQL Server, PostgreSQL) y APIs, aplicando patrones empresariales para resolver desde la lógica transaccional de integraciones fintech hasta arquitecturas multi-tenant.",
      technologies: ["NestJS", "Node.js (Express)", "REST APIs", "PostgreSQL", "Supabase", "Patrones SOLID", "DTOs & Mappers", "Integración Fintech"],
    },
    {
      title: "Frontend & UX",
      icon: Globe,
      description: "Desarrollo interfaces web funcionales y responsivas usando principalmente React. Me enfoco en aterrizar los requerimientos del usuario y traducir la operativa de negocio en UI eficiente.",
      technologies: ["React 18", "Next.js", "Nuxt 4", "TypeScript", "Tailwind CSS", "Vuetify 3", "Redux Toolkit", "Zustand", "Framer Motion"],
    },
    {
      title: "Data, Infra & DevOps",
      icon: Code2,
      description: "Administro bases de datos relacionales y el despliegue de mis proyectos. Tengo experiencia práctica operando pipelines de integración continua (GitLab CI/CD) y usando herramientas de análisis de código para asegurar que las aplicaciones lleguen estables a producción.",
      technologies: ["SQL Server", "MySQL", "WebSockets", "Docker", "GitLab CI/CD", "SonarQube", "Jest", "Cloudflare", "Hostinger"],
    },
    {
      title: "Dominios de Negocio",
      icon: Briefcase,
      description: "Entiendo la lógica operativa de las empresas. Mi experiencia técnica y de soporte me ha dado un conocimiento práctico muy sólido en facturación mexicana (CFDI 4.0, Carta Porte), control de inventarios (POS) e integraciones de pagos.",
      technologies: ["POS Multi-Tenant", "Integraciones Fintech", "CONTPAQi Suite", "CFDI 4.0", "REP 2.0", "Carta Porte", "Gestión Fiscal", "ERP OpenBravo"],
    },
  ],

  experience: [
    {
      title: "Operador de Logística y ERP OpenBravo",
      company: "Grupo Elibar y Asociados — Asignación en Valoris",
      period: "Feb 2026 – Actualidad",
      bullets: [
        "Gestiono el flujo de picking, escaneo, recepción de mercancía y emisión de remisiones en OpenBravo para mantener la trazabilidad del inventario en tiempo real.",
        "Reviso y controlo la recepción de mercancía con proveedores, conciliando entregas físicas contra documentación contable/fiscal y corrigiendo diferencias de stock en el sistema.",
        "Planifico rutas de reparto local, controlo entregas y manejo la documentación (facturas y firmas) en la entrega al cliente final.",
        "Rol Previo (MotoRed): Repartidor de autopartes en rutas locales, reasignado a almacén y ERP por puntualidad, confiabilidad y buen desempeño."
      ],
    },
    {
      title: "Desarrollador Full-Stack",
      company: "Punto Red — GestoPago",
      period: "Oct 2025 – Ene 2026",
      bullets: [
        "Desarrollé en NestJS funcionalidades y servicios para integrarme con APIs externas, trabajando con rutas, peticiones HTTP y manejo de respuestas y errores.",
        "Trabajé con estructuras como DTOs, mappers e inyección de dependencias, adaptándome a la forma de trabajo del equipo y al backend existente.",
        "Participé en flujos de GitLab CI/CD, pruebas con Jest y revisiones de código antes de integrar cambios a la rama de desarrollo."
      ],
    },
    {
      title: "Desarrollador Web Full-Stack",
      company: "VIDARE, S.A. de C.V. (El Galeón)",
      period: "Oct 2025",
      bullets: [
        "Diseñé y desarrollé una aplicación web responsiva de reportes de ventas por sucursal, conectada a SQL Server para consultar y filtrar ventas por sucursal y periodo.",
        "Desarrollé scripts y consultas complejas en SQL Server para la extracción, estructuración y análisis de métricas clave de inventarios y comercialización requeridas por coordinación.",
        "Diseñé e implementé lógica de negocio y algoritmos de procesamiento para automatizar el cálculo de indicadores comerciales, optimizando la toma de decisiones operativas.",
        "Inicié el módulo de gestión de inventarios, dejando definida la estructura base de la aplicación, la conexión a datos y la autenticación de usuarios."
      ],
    },
    {
      title: "Consultor y Soporte Técnico CONTPAQi",
      company: "Asesorías Limac / Limnovatech",
      period: "Jul 2023 – Jun 2025",
      bullets: [
        "Implementé, configuré y brindé soporte técnico a la suite CONTPAQi (Comercial Premium, Start/Pro, Factura Electrónica, Nóminas, Contabilidad y Bancos) en entornos servidor–terminal y sesiones remotas.",
        "Resolví más de 2,000 tickets de incidencias y requerimientos, corrigiendo datos directamente en SQL Server y dando mantenimiento/migración a bases de datos, licenciamiento y timbrado.",
        "Capacité a usuarios finales en normativa fiscal (CFDI 4.0, REP 2.0, Carta Porte) y en el uso diario de procesos contables y de nómina.",
        "Automaticé la generación de bitácoras de servicio mediante un script propio en Python, reduciendo en un 70% el tiempo de procesamiento manual.",
        "Creé asistentes GPT de cada sistema de escritorio para la autocapacitación y resolución de dudas tanto propias como del equipo."
      ],
    },
    {
      title: "Agente de Call Center",
      company: "MAXIMS LLC / REFERENCE ZES",
      period: "Ene 2021 – Mar 2023",
      bullets: [
        "Gestión de llamadas para transacciones de envío de dinero internacional, aplicando flujos de comunicación, empatía y apego a protocolos de atención.",
        "Captura, confirmación y resguardo de datos operativos y de clientes en tiempo real dentro del software interno de la empresa, asegurando alta precisión en la información."
      ],
    },
  ],

  /* --- PROYECTOS INTACTOS Y ENLACES ACTUALIZADOS --- */
  projects: [
    {
      title: "Aviva Check",
      role: "Creador & Desarrollador Full-Stack",
      description: "* Desarrollé AvivaCheck, un sistema web de punto de venta (POS) multi-tenant para iglesias y sus departamentos, construido con Nuxt, Vue, Pinia, Vuetify y Supabase.\n* Diseñé e implementé el modelo de datos y la lógica transaccional en PostgreSQL/Supabase para organizaciones, perfiles, catálogos de productos, órdenes, detalle de ventas y sesiones de caja.\n* Implementé control de acceso por roles —super_admin, pastor, leader, cashier y kitchen— mediante Supabase Auth, Row-Level Security (RLS), políticas de base de datos, funciones RPC y middleware de rutas.\n* Desarrollé los flujos de POS, apertura y cierre de caja compartida o independiente, pantalla de cocina (KDS) en tiempo real, catálogo de productos, administración de usuarios, reportes y pruebas operativas automatizadas con Playwright.",
      highlights: ["Arquitectura de roles con políticas RLS auditadas en Supabase", "Panel operativo en tiempo real y flujos de corte de caja"],
      stack: "Nuxt 4, Supabase, Vuetify 3, GitLab CI/CD",
      url: "https://twilight-scene-bd12.emmanuel-arias1998.workers.dev/login",
      repo: "https://github.com/AproachingDark1889/avivamiento-webpage",
    },
    {
      title: "PuntoRed",
      role: "Desarrollador Full-Stack",
      description: "* Diseñé e implementé la arquitectura Full-Stack de un sistema de pagos referenciados, construyendo un servidor proxy en PHP para conectar de forma segura la API de Gestopago sin exponer credenciales en la web.\n* Desarrollé una interfaz rápida y fluida en React 18, TypeScript y RTK Query, que precarga la información al pasar el mouse por la pantalla para dar respuestas al instante y actualiza los estados de pago automáticamente en segundo plano.\n* Implementé un módulo de cancelación masiva que permite procesar múltiples transacciones al mismo tiempo con barra de progreso en vivo y control de errores.\n* Creé un sistema de reportes con exportación a Excel (.xlsx), descargas en CSV, generación de comprobantes en PDF y notificaciones automáticas.",
      highlights: ["Servidor proxy seguro con autenticación en caché", "Interfaz de respuesta instantánea y procesamiento masivo de transacciones"],
      stack: "React 18, TypeScript, Redux Toolkit, RTK Query, PHP, Tailwind CSS, Vite",
      url: "https://sparkling-water-8d7f.emmanuel-arias1998.workers.dev/login",
      repo: "https://github.com/FranciscoArias041/PUNTO-RED",
    },
    {
      title: "TradingIA",
      role: "Creador & Desarrollador Full-Stack",
      description: "* Diseñé y desarrollé una plataforma de monitorización de mercados de criptoactivos en tiempo real, integrando fuentes de datos y conectores para Binance, Coinbase, Kraken y KuCoin.\n* Construí una arquitectura de comunicación en tiempo real con Node.js, Socket.IO y WebSockets para recibir, procesar y distribuir datos de mercado hacia la interfaz.\n* Implementé una interfaz analítica e interactiva con React 18, TypeScript y Tailwind CSS, incorporando visualización de precios, señales, alertas dinámicas y paneles de monitorización del sistema.\n",
      highlights: [
        "Integración multi-exchange y procesamiento de datos de mercado en tiempo real",
        "Backend Node.js con Socket.IO y WebSockets para gestión de conexiones y feeds",
        "Dashboard analítico con señales, alertas visuales y monitorización operativa"
      ],
      stack: "React 18, TypeScript, Tailwind CSS, Node.js, Socket.IO, WebSockets, Vite",
      url: "https://lingering-butterfly-c663.emmanuel-arias1998.workers.dev/",
      repo: "https://github.com/FranciscoEmmanuel1998/TradingIA",
    },
    {
      title: "Portal web con vídeos de mis sistemas desplegados del mundo laboral",
      role: "Autor / Exhibición de Proyectos",
      description: "* Portal web donde presento demostraciones en video de algunos de los sistemas que he desarrollado y lanzado a producción.\n* Incluye videos demostrando el funcionamiento de Aviva Check POS, PuntoRed, una App Móvil de Inventarios y Dashboard de ventas.",
      highlights: ["Demostraciones en video de sistemas desplegados"],
      stack: "HTML5, JavaScript, CSS",
      url: "https://bitter-haze-a7a9.emmanuel-arias1998.workers.dev/",
      repo: null,
    },
  ],

  labProjects: [
    {
      title: "Portafolio Web",
      desc: "* Creé mi portafolio web interactivo para mostrar mis proyectos, habilidades y estilo como desarrollador.\n* La navegación principal se realiza mediante un robot-asistente personalizable en tres estilos.\n* Desde el robot se puede entrar a secciones del portafolio como diversas aplicaciones y paginas desarrolladas por mi.",
      tags: ["React 18", "TypeScript", "Radix UI", "Gamificación"],
      url: "https://lucky-queen-888f.emmanuel-arias1998.workers.dev/#/welcome",
      repo: "https://github.com/FranciscoEmmanuel1998/Portafolio-DIST",
    },
    {
      title: "Museo Matemático",
      desc: "* Creé un museo matemático interactivo que combina el Juego de la Vida de Conway, el atractor de Lorenz y un sistema de partículas en tiempo real.\n* Desarrollé la experiencia con React, TypeScript y HTML5 Canvas, agregando una animación de Big Bang, interacción con el cursor, música y efectos de audio.",
      tags: ["Canvas API", "Web Audio", "TypeScript", "React ", "Vite", "Tailwind"],
      url: "https://royal-snow-cbe3.emmanuel-arias1998.workers.dev/",
      repo: "https://github.com/FranciscoEmmanuel1998/Animaci-n",
    },
  ],

  skills: {
    "Desarrollo": ["JavaScript", "TypeScript", "React", "Next.js", "NestJS", "Node.js", "REST APIs", "Tailwind CSS"],
    "Datos e infra": ["SQL Server", "PostgreSQL", "Supabase", "MySQL", "Docker", "Cloudflare"],
    "Calidad & Tools": ["Git", "GitLab CI/CD", "Postman", "Jest", "SonarQube", "Playwright"],
    "Negocio & ERP": ["CONTPAQi Suite", "CFDI 4.0", "Carta Porte", "REP 2.0", "ERP OpenBravo", "POS Multi-Tenant"],
  },

  education: [
    { degree: "Licenciatura en Multimedia y Animación Digital", institution: "Universidad Autónoma de Nuevo León" },
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
   2. COMPONENTE: COMPACT CV (DISEÑO ORIGINAL CON SALTO A PÁGINA 2)
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
          --primary: #1e3a8a; --border: #e2e8f0; --tag-bg: #f1f5f9; 
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
          
          .app-ui, .print-hide {
            display: none !important;
          }

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

          #cv-print * {
            visibility: visible !important;
          }

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

          /* Salto de página para Proyectos Relevantes */
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
              <ContactRow icon={<Globe size={12} />} text="Portafolio" href={data.contact.portfolio} />
              <ContactRow icon={<Github size={12} />} text="FranciscoEmmanuel1998" href={data.contact.githubUrl} />
              <ContactRow icon={<FileCheck size={12} />} text="CV Web Interactivo" href={data.contact.cvWeb} />
              <ContactRow icon={<Laptop size={12} />} text="Sistemas en Producción" href={data.contact.production} />
            </Section>

            <Section title="Habilidades">
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

            <Section title="Educación">
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
              <div className="space-y-2.5">
                {data.experience.map((exp, i) => (
                  <article key={i} className="mb-4 md:mb-0 print:mb-0">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1 md:mb-0.5 print:mb-0.5 gap-1 sm:gap-0">
                      <h4 className="text-sm md:text-xs print:text-xs font-bold">{exp.title}</h4>
                      <span className="text-[10px] md:text-[9px] print:text-[9px] font-mono border border-[var(--border)] px-1.5 py-0.5 md:py-0 print:py-0 rounded inline-block w-fit">{exp.period}</span>
                    </div>
                    <p className="text-xs md:text-[10px] print:text-[10px] font-semibold mb-1 md:mb-0.5 print:mb-0.5 text-[var(--primary)]">{exp.company}</p>
                    <ul className="list-disc pl-4 md:pl-3 print:pl-3 space-y-1 md:space-y-0.5 print:space-y-0.5">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="text-[11px] md:text-[9px] print:text-[9px] leading-snug md:leading-snug print:leading-snug pl-0.5 marker:text-[var(--primary)]">{b}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </Section>

            <Section title="Proyectos Relevantes" className="mt-2 md:mt-4 print:mt-2 print-page-2">
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
                  ◆ Laboratorio de Innovación e Interfaz
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
      {/* --- MODAL DE IMPRESIÓN (FUERA de app-ui) --- */}
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
                { text: "Portafolio", url: CV_DATA.contact.portfolio, icon: Globe },
                { text: "Sistemas", url: CV_DATA.contact.production, icon: Monitor },
                { text: "GitHub", url: CV_DATA.contact.githubUrl, icon: Github },
              ].map((link) => (
                <a key={link.text} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 text-sm text-gray-300 hover:text-white">
                  <link.icon className="w-4 h-4" />
                  {link.text}
                </a>
              ))}
              <button onClick={() => setShowModal(true)} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 text-sm text-gray-300 hover:text-white">
                <FileText className="w-4 h-4" />
                CV Web
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
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-3"><Code2 className="w-8 h-8 text-purple-500" /><span className="text-gradient">Proyectos Destacados</span></h2>
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
                {/* Accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, #6366f1, #a855f7, #ec4899)' }} />
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-purple-500/15 border border-purple-500/20">
                      <Monitor className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">Laboratorio de interfaz de usuario avanzado y tarjeta de presentación</h3>
                      <p className="text-xs text-gray-500">Desarrollo de interfaces</p>
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