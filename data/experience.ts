import { Locale } from "@/app/i18n/config";

export const experienceEs = [
  {
    period: "Junio 2025 - Actualidad",
    company: "Freelance",
    role: "Software Engineer · Fullstack & UX/UI",
    description:
      "Diseño y desarrollo productos digitales end-to-end, desde la investigación y UX/UI en Figma hasta la implementación fullstack.",
    highlights: [
      "Next.js, Node.js y MongoDB",
      "Integraciones con pagos, mapas, autenticación y mensajería",
      "Foco en performance, escalabilidad y experiencia de usuario",
    ],
  },
  {
    period: "Mayo 2024 - Mayo 2025",
    company: "Vana",
    role: "Backend Software Engineer (SSR)",
    description:
      "Desarrollo y mantenimiento de servicios backend event-driven utilizando AWS Lambdas.",
    highlights: [
      "TypeScript · Domain-Driven Design (DDD)",
      "Arquitectura orientada a eventos",
      "Code reviews y prácticas de calidad",
    ],
  },
  {
    period: "Septiembre 2022 - Septiembre 2023",
    company: "FactoryFix",
    role: "Fullstack Developer (SSR)",
    description:
      "Desarrollo de funcionalidades clave para una plataforma de recursos humanos.",
    highlights: [
      "Optimización de performance",
      "Code reviews",
      "Metodología Shape Up",
    ],
  },
  {
    period: "Julio 2021 - Septiembre 2022",
    company: "GlobalLogic",
    role: "Software Engineer (SSR)",
    description:
      "Desarrollo de aplicaciones para dispositivos Alexa en entornos corporativos.",
    highlights: [
      "AWS Lambdas",
      "Alexa for Business & Hospitality",
      "Testing unitario e integraciones",
    ],
  },
  {
    period: "Julio 2019 - Julio 2021",
    company: "Widergy",
    role: "Backend Developer",
    description:
      "Desarrollo backend de un chatbot multi-tenant y multi-canal para empresas de servicios públicos como Edenor, Eden, Edes y Camuzzi, enfocado en escalabilidad, tiempo real y automatización de flujos de atención al cliente.",
    highlights: [
      "Arquitectura de chatbot multi-tenant y multi-canal (Web, WhatsApp, Facebook)",
      "Integración con Dialogflow para detección de intenciones",
      "Motor de flujos conversacionales configurable y agnóstico al canal",
      "Mensajería en tiempo real con Socket.io y Redis",
      "Transferencia y gestión de conversaciones entre agentes",
      "Integraciones con APIs de clientes (facturas, saldos, reclamos)",
      "Persistencia en MongoDB y PostgreSQL para datos y reportes",
      "Integración con WhatsApp mediante Wavy",
      "Sistema de envío y tracking de emails con AWS SNS y SES",
      "Testing unitario con Mocha y Chai",
      "Trabajo con metodologías Scrum y Kanban usando Jira",
    ],
  },
];

export const experienceEn = [
  {
    period: "June 2025 - Present",
    company: "Freelance",
    role: "Software Engineer · Fullstack & UX/UI",
    description:
      "Design and development of end-to-end digital products, from research and UX/UI in Figma to fullstack implementation.",
    highlights: [
      "Next.js, Node.js and MongoDB",
      "Integrations with payments, maps, authentication and messaging",
      "Focus on performance, scalability and user experience",
    ],
  },
  {
    period: "May 2024 - May 2025",
    company: "Vana",
    role: "Backend Software Engineer (Mid-level)",
    description:
      "Development and maintenance of event-driven backend services using AWS Lambdas.",
    highlights: [
      "TypeScript · Domain-Driven Design (DDD)",
      "Event-driven architecture",
      "Code reviews and quality best practices",
    ],
  },
  {
    period: "September 2022 - September 2023",
    company: "FactoryFix",
    role: "Fullstack Developer (Mid-level)",
    description: "Development of key features for a human resources platform.",
    highlights: [
      "Performance optimization",
      "Code reviews",
      "Shape Up methodology",
    ],
  },
  {
    period: "July 2021 - September 2022",
    company: "GlobalLogic",
    role: "Software Engineer (Mid-level)",
    description:
      "Development of applications for Alexa devices in corporate environments.",
    highlights: [
      "AWS Lambdas",
      "Alexa for Business & Hospitality",
      "Unit and integration testing",
    ],
  },
  {
    period: "July 2019 - July 2021",
    company: "Widergy",
    role: "Backend Developer",
    description:
      "Backend development of a multi-tenant, multi-channel chatbot platform for public utility companies such as Edenor, Eden, Edes and Camuzzi, focused on scalability, real-time communication and automation of customer support workflows.",
    highlights: [
      "Multi-tenant, multi-channel chatbot architecture (Web, WhatsApp, Facebook)",
      "Integration with Dialogflow for intent detection",
      "Configurable, channel-agnostic conversational flow engine",
      "Real-time messaging using Socket.io and Redis",
      "Conversation transfer and management between agents",
      "Integrations with client APIs (invoices, balances, claims)",
      "Data and reporting persistence with MongoDB and PostgreSQL",
      "WhatsApp integration via Wavy",
      "Email delivery and tracking system using AWS SNS and SES",
      "Unit testing with Mocha and Chai",
      "Work using Scrum and Kanban methodologies with Jira",
    ],
  },
];

export const getExperience = (locale: Locale) => {
  return locale === "es" ? experienceEs : experienceEn;
};
