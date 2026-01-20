import { Locale } from "@/app/i18n/config";

export const projectsEs = [
  {
    key: "woof",
    title: "Woof!",
    description:
      "Plataforma integral de servicios para mascotas que conecta usuarios con cuidadores, paseadores, veterinarias, entrenadores, fotógrafos, transporte y venta de productos. Diseñé la experiencia UX/UI completa en Figma y desarrollé el producto end-to-end utilizando Next.js y MongoDB. La plataforma integra múltiples servicios externos para autenticación, mapas, mensajería en tiempo real, notificaciones y manejo de archivos, priorizando una experiencia fluida, segura y escalable.",
    images: 6,
    stack: [
      "Next.js",
      "MongoDB",
      "UX/UI Design",
      "Figma",
      "Auth0",
      "Mapbox",
      "HERE API",
      "Mailgun",
      "Pusher",
      "Cloudinary",
      "Rollbar",
    ],
    live: "",
    repo: "",
  },
  {
    key: "mesadigital",
    title: "MesaDigital",
    description:
      "Sistema integral para bares y restaurantes que permite a los clientes escanear un código QR, realizar pedidos y pagar desde el celular. Participé en el diseño y desarrollo completo del producto, tanto frontend como backend, trabajando en conjunto con otro desarrollador. El sistema prioriza performance, escalabilidad y una experiencia de usuario simple e intuitiva.",
    images: 5,
    stack: [
      "Next.js",
      "NestJS",
      "MongoDB",
      "GCP (Cloud Run)",
      "Rollbar",
      "Sentry",
    ],
    live: "",
    repo: "",
  },
  {
    key: "valto",
    title: "Valto",
    description:
      "Plataforma web de gestión para inmobiliarias que permite administrar propiedades, contactos, contratos y liquidaciones. Diseñé la experiencia UX/UI completa en Figma y desarrollé el frontend de la aplicación, enfocándome en usabilidad, claridad visual y eficiencia en los flujos de trabajo.",
    images: 6,
    stack: ["Next.js", "UX/UI Design", "Figma"],
    live: "",
    repo: "",
  },
  {
    key: "venta-de-entradas-acidamente",
    title: "Venta de entradas — Ácidamente",
    description:
      "Plataforma web para la venta de entradas de una banda de rock. Desarrollada con Next.js utilizando Incremental Static Regeneration (ISR) para lograr tiempos de carga rápidos y una excelente performance. La aplicación gestiona shows, asistentes y pagos, ofreciendo una experiencia fluida tanto para usuarios como para organizadores.",
    images: 4,
    stack: ["Next.js", "ISR", "MongoDB"],
    live: "",
    repo: "",
  },
];

export const projectsEn = [
  {
    key: "woof",
    title: "Woof!",
    description:
      "An all-in-one pet services platform that connects users with caregivers, walkers, veterinarians, trainers, photographers, transportation services and product marketplaces. I designed the complete UX/UI experience in Figma and developed the product end-to-end using Next.js and MongoDB. The platform integrates multiple external services for authentication, maps, real-time messaging, notifications and file management, with a strong focus on a smooth, secure and scalable user experience.",
    images: 6,
    stack: [
      "Next.js",
      "MongoDB",
      "UX/UI Design",
      "Figma",
      "Auth0",
      "Mapbox",
      "HERE API",
      "Mailgun",
      "Pusher",
      "Cloudinary",
      "Rollbar",
    ],
    live: "",
    repo: "",
  },
  {
    key: "mesadigital",
    title: "MesaDigital",
    description:
      "An end-to-end system for bars and restaurants that allows customers to scan a QR code, place orders and pay directly from their mobile devices. I worked on the full design and development of the product, both frontend and backend, in collaboration with another developer. The system prioritizes performance, scalability and a simple, intuitive user experience.",
    images: 5,
    stack: [
      "Next.js",
      "NestJS",
      "MongoDB",
      "GCP (Cloud Run)",
      "Rollbar",
      "Sentry",
    ],
    live: "",
    repo: "",
  },
  {
    key: "valto",
    title: "Valto",
    description:
      "A web-based management platform for real estate agencies that enables the administration of properties, contacts, contracts and settlements. I designed the complete UX/UI experience in Figma and developed the frontend of the application, focusing on usability, visual clarity and efficient workflows.",
    images: 6,
    stack: ["Next.js", "UX/UI Design", "Figma"],
    live: "",
    repo: "",
  },
  {
    key: "venta-de-entradas-acidamente",
    title: "Ticket Sales — Ácidamente",
    description:
      "A web platform for selling tickets for a rock band. Built with Next.js using Incremental Static Regeneration (ISR) to achieve fast load times and excellent performance. The application manages shows, attendees and payments, delivering a smooth experience for both users and organizers.",
    images: 4,
    stack: ["Next.js", "ISR", "MongoDB"],
    live: "",
    repo: "",
  },
];

export const getProjects = (locale: Locale) => {
  return locale === "es" ? projectsEs : projectsEn;
};
