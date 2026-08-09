import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2, Database, Globe, Briefcase, ExternalLink, Mail, Phone, MapPin,
  Github, Monitor, FileText, Printer, X, Sun, Moon, Layers,
  Laptop, FileCheck, ArrowUpRight
} from "lucide-react";

/* ========================================================================
   0. FUENTE ÚNICA DE VERDAD (SSOT) — EDITAR AQUÍ LOS DATOS
   ======================================================================== */
const CV_DATA = {
  name: "Francisco Emmanuel Arias López",
  title: "Especialista en Implementación y Soporte Técnico",
  contact: {
    location: "Monterrey, NL",
    email: "emmanuel.arias1998@gmail.com",
    phone: "+52 81 3412 1519",
    portfolio: "https://animarex.xyz",
    cvWeb: "https://animarex.xyz/cv-web/",
    production: "https://www.animarex.xyz/expedientes/",
    github: "github.com/FranciscoEmmanuel1998",
    githubUrl: "https://github.com/FranciscoEmmanuel1998",
  },
  summary:
    "Soy un apasionado por la tecnología y la resolución de problemas. Disfruto desarmar la complejidad de los sistemas para entenderlos desde lo más simple hasta lo más avanzado y complejo, esa mentalidad me permitió comprender los sistemas CONTPAQi para hacer capacitaciones entendibles para las personas. Mi mayor motivación es ayudar al equipo de trabajo a superar obstáculos técnicos y alcanzar las metas propuestas. Me encanta capacitar usuarios, colaborar con mis compañeros y enfrentar los retos operativos con una actitud de servicio.",

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
      description: "Desarrollo interfaces web funcionales y responsivas usando principalmente React. Me enfoco en aterrizar los requerimientos del usuario",
      technologies: ["React 18", "Next.js", "Nuxt 4", "TypeScript", "Tailwind CSS", "Vuetify 3", "Redux Toolkit", "Zustand", "Framer Motion"],
    },
    {
      title: "Data, Infra & DevOps",
      icon: Code2,
      description: "Administro bases de datos relacionales y el despliegue de mis proyectos. Tengo experiencia práctica operando pipelines de integración continua (GitLab CI/CD) y usando herramientas de análisis de código para asegurar que las aplicaciones lleguen estables a producción",
      technologies: ["SQL Server", "MySQL", "WebSockets", "Docker", "GitLab CI/CD", "SonarQube", "Jest", "Cloudflare", "Hostinger"],
    },
    {
      title: "Dominios de Negocio",
      icon: Briefcase,
      description: "Entiendo la lógica operativa de las empresas. Mi experiencia técnica y de soporte me ha dado un conocimiento práctico muy sólido en facturación mexicana (CFDI 4.0, Carta Porte), control de inventarios (POS) e integraciones de pagos.",
      technologies: ["POS Multi-Tenant", "Integraciones Fintech", "CONTPAQi Suite", "CFDI 4.0", "REP 2.0", "Carta Porte", "Gestión Fiscal"],
    },
  ],

  experience: [
    {
      title: "Desarrollador Full-stack",
      company: "Punto Red - Gestopago",
      period: "Nov 2025 – Ene 2026",
      bullets: [
        "Desarrollé servicios backend para estandarizar la integración con proveedores fintech (Nequi y Mafephone).",
        "Implementé el enrutamiento dinámico de datos y el manejo robusto de errores transaccionales para asegurar la integridad de las operaciones financieras.",
        "Mantuve los pipelines de despliegue (GitLab CI/CD) asegurando que las actualizaciones del sistema pasaran los controles de calidad",
        "Contribuí en revisiones de código mejorando escalabilidad y legibilidad.",
      ],
    },
    {
      title: "Desarrollador Web Full-stack",
      company: "Cliente Privado - Sector Retail",
      period: "Sept 2025 – Oct 2025",
      type: "Proyecto Independiente",
      bullets: [
        "Desarrollé un sistema de Gestión de Inventarios centralizado con acceso multiplataforma, conectando directamente a la base de datos SQL Server para el control de stock.",
        "Creé un módulo de reportes de ventas responsivo, permitiendo a la dirección visualizar la operación segmentada por sucursal y fecha.",
        "Implementé la autenticación segura y el control de accesos para proteger la información de la empresa."
      ],
    },
    {
      title: "Soporte técnico y consultoría",
      company: "Asesorías Limac S.A. de C.V.",
      period: "06/2023 – 06/2025",
      bullets: [
        "Instalé y configuré sistemas de la suite CONTPAQi en servidores físicos, virtuales y terminales, asegurando la conectividad y el rendimiento óptimo en red local.",
        "Resolví más de 2,000 tickets de soporte, atendiendo desde la configuración de impresoras y periféricos hasta correcciones de información en bases de datos SQL Server.",
        "Brindé soporte especializado en la implementación técnica de la normativa fiscal (CFDI 4.0 y facturación global), resolviendo errores de timbrado y validación de XML.",
        "Impartí capacitación técnica y asesoría funcional a usuarios operativos, facilitando la adopción de las herramientas al equipo de trabajo de las empresas.",
        "Automaticé la generación de bitácoras de servicio mediante scripts en Python, optimizando la carga operativa del área en un 70%."
      ],
    },
  ],

  projects: [
    {
      title: "Aviva Check",
      role: "Autor / Full-Stack Developer",
      description: "* Desarrollé la arquitectura completa de un punto de venta para gestionar el ciclo total del negocio: operación de caja, cortes, control de inventarios y reportes centralizados. \n  \n* Diseñé el modelo relacional (Supabase) e implementé un sistema estricto de roles para garantizar la seguridad de la información y delimitar los accesos",
      highlights: ["Arquitectura de roles con políticas RLS auditadas en Supabase", "Panel operativo en tiempo real y flujos de corte de caja"],
      stack: "PostgreSQL (Supabase), TypeScript, Modelado Relacional, Autenticación",
    },
    {
      title: "Dashboard de Ventas Corporativo ",
      role: "Autor / Full-Stack Developer",
      description: "* Desarrollé una solución para centralizar la información transaccional de múltiples sucursales, conectando directamente con bases de datos SQL Server. \n* Implementé consultas avanzadas para la exportación de datos operativos y la aplicación de filtros dinámicos, facilitando a la dirección el monitoreo de ventas corporativas en tiempo real.",
      highlights: ["Análisis de KPIs en tiempo real con Chart.js", "API RESTful propia con Next.js y SQL Server"],
      stack: "SQL Server, Node.js (API), TypeScript, Chart.js",
    },
  ],

  skills: {
    "SISTEMAS E INFRAESTRUCTURA": [
      "Arquitectura Servidor-Terminal",
      "Redes Locales (LAN)",
      "Configuración de Impresoras y Periféricos",
      "Soporte Hardware y Software (Sitio/Remoto)"
    ],
    "SOLUCIONES EMPRESARIALES Y NORMATIVA": [
      "Suite CONTPAQi (Comercial, Factura, Nóminas, Contabilidad)",
      "Puntos de Venta (POS)",
      "Normativa Fiscal SAT (CFDI 4.0)"
    ],
    "BASES DE DATOS Y AUTOMATIZACIÓN": [
      "SQL Server",
      "MySQL",
      "PostgreSQL",
      "Python (Automatización de tareas)"
    ],
    "TECNOLOGÍAS WEB Y DESARROLLO": [
      "JavaScript / TypeScript",
      "Node.js",
      "Docker",
      "Git"
    ],
  },

  education: [
    { degree: "Lic. en Multimedia y Animación Digital", institution: "Universidad Autónoma de Nuevo León" },
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
   2. COMPONENTE: COMPACT CV (RECIBE DATOS VÍA PROPS)
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
        <a href={href} target="_blank" className="hover:underline" style={{ color: 'var(--text-sec)' }}>{text}</a>
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
          @page { margin: 6mm; size: A4; }
          body * { visibility: hidden !important; }
          #cv-print, #cv-print * { visibility: visible !important; }
          #cv-print {
            position: fixed !important; top: 0; left: 0;
            width: 100% !important; height: auto !important;
            padding: 0 !important; margin: 0 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .cv-container { box-shadow: none !important; max-width: 100% !important; padding: 6mm !important; }
          .rainbow-bar { animation: none !important; }
          .print-hide { display: none !important; }
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

              <ContactRow icon={<Mail size={12} />} text={data.contact.email} href={`mailto:${data.contact.email}`} />
              <ContactRow icon={<Phone size={12} />} text={data.contact.phone} />
              <ContactRow icon={<MapPin size={12} />} text={data.contact.location} />

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

            <Section title="Proyectos Relevantes" className="mt-2 md:mt-4 print:mt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 print:grid-cols-2 gap-3 md:gap-2 print:gap-2">
                {data.projects.map((p, i) => (
                  <div key={i} className="border border-[var(--card-border)] bg-[var(--card-bg)] p-2 rounded">
                    <div className="flex justify-between items-start mb-0.5">
                      <h4 className="text-[10px] font-bold">{p.title}</h4>
                      <div className="flex gap-1.5">
                        {p.url && <a href={p.url} target="_blank" className="text-[var(--primary)]"><ExternalLink size={10} /></a>}
                        {p.repo && <a href={p.repo} target="_blank" className="text-[var(--text-sec)]"><Github size={10} /></a>}
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
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-blue-500" /><a href={`mailto:${CV_DATA.contact.email}`} className="hover:text-blue-400 transition-colors">{CV_DATA.contact.email}</a></div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-blue-500" /><span>{CV_DATA.contact.phone}</span></div>
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
                        {project.url && <a href={project.url} target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300" title="Ver Proyecto"><ExternalLink className="w-5 h-5" /></a>}
                        {project.repo && <a href={project.repo} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white ml-2" title="Ver Código"><Github className="w-5 h-5" /></a>}
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
                      <p className="text-xs text-gray-500">Desarrollo de interfaces</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {CV_DATA.labProjects.map((lp) => (
                      <div key={lp.title} className="group flex gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/30 transition-all duration-300">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="text-base font-bold text-white">{lp.title}</h4>
                            {lp.url && <a href={lp.url} target="_blank" rel="noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors" title="Ver Proyecto"><ExternalLink className="w-4 h-4" /></a>}
                            {lp.repo && <a href={lp.repo} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors" title="Ver Código"><Github className="w-4 h-4" /></a>}
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