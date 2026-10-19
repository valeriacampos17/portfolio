export const profile = {
	name: 'Valeria Andreina Campos Revilla',
	shortName: 'Valeria Campos',
	firstName: 'Valeria',
	role: 'Desarrolladora Frontend',
	roleSecond: 'Ingeniería de Sistemas',
	tagline:
		'Estudiante de Ingeniería de Sistemas (7mo trimestre) con experiencia en desarrollo frontend con Angular y Tailwind CSS, consumo de REST APIs y atención al cliente. Busco integrarme a entornos dinámicos donde pueda aportar en el área técnica y en la optimización de la experiencia del usuario.',
	status: 'Abierta a oportunidades laborales',
	email: 'camposrevillavaleria@gmail.com',
	phone: '0412-7116507',
	phoneHref: '+584127116507',
	whatsapp: 'https://wa.me/584127116507',
	location: 'La Victoria, Aragua',
	linkedin: 'https://www.linkedin.com/in/valeria-andreina-campos-revilla-865422445',
	github: 'https://github.com/valeriacampos17',
};

export interface Project {
	title: string;
	subtitle: string;
	description: string;
	tech: string[];
	link?: string;
	repo?: string;
	image?: string;
	imageAlt?: string;
	insetImage?: string;
	coverStyle?: 'mobile';
	highlights?: string[];
}

export const projects: Project[] = [
	{
		title: 'Vale-Shop',
		subtitle: 'PWA · Solo mobile',
		description:
			'Tienda PWA desarrollada exclusivamente para dispositivos móviles: carrusel de productos destacados, categorías de ropa y accesorios, modo oscuro/claro e instalación en el teléfono con funcionamiento offline gracias a Service Workers.',
		tech: ['HTML5', 'CSS3', 'JavaScript', 'PWA', 'Service Worker'],
		repo: 'https://github.com/valeriacampos17/vale-shop',
		image: 'projects/vale-shop-mobile.webp',
		imageAlt: 'Vale-Shop en un teléfono móvil',
		coverStyle: 'mobile',
		highlights: ['112 commits', '1 fork'],
	},
	{
		title: 'MedControl Clinical Suite',
		subtitle: 'Fullstack · Angular + Express',
		description:
			'Suite clínica fullstack: frontend en Angular 22 y Tailwind 4 con API REST en Express, autenticación JWT, validación con Zod y base SQLite/Turso. Gestión de usuarios e historia clínica con exámenes físicos, tests con Vitest y despliegue continuo en Render.',
		tech: ['Angular', 'TypeScript', 'Tailwind CSS', 'Express', 'JWT', 'SQLite/Turso', 'Vitest'],
		link: 'https://medcontrol-suite-vale.onrender.com',
		repo: 'https://github.com/valeriacampos17/MedControl-Clinical-Suite',
		image: 'projects/medcontrol-dashboard.webp',
		imageAlt: 'Dashboard de citas de MedControl Clinical Suite',
		insetImage: 'projects/medcontrol-login.webp',
		highlights: ['115 commits', 'Desplegado en Render'],
	},
];

export interface Experience {
	role: string;
	company: string;
	period: string;
	bullets: string[];
}

export const experience: Experience[] = [
	{
		role: 'Programador Junior',
		company: 'Soluciones Digitales Go Smart Group',
		period: 'Feb. 2025 – Dic. 2025',
		bullets: [
			'Desarrollo e implementación de interfaces de usuario para aplicaciones web utilizando Angular y Tailwind CSS.',
			'Integración y consumo de servicios REST API para la conexión eficiente entre el Frontend y el Backend.',
			'Gestión y control de versiones colaborativo utilizando Git para el desarrollo en entornos multi-usuario.',
		],
	},
	{
		role: 'Promotora / Atención al Público',
		company: 'Pinturas Coloreal',
		period: 'Ago. 2025 – Dic. 2025',
		bullets: [
			'Atención directa y personalizada a clientes, brindando asesoría sobre productos y garantizando una alta satisfacción.',
			'Impulso de la marca en eventos y puntos de contacto directo, incrementando la visibilidad del catálogo.',
			'Colaboración en la estrategia de comunicación visual y presentación comercial del punto de venta.',
		],
	},
];

export interface Education {
	degree: string;
	school: string;
	period: string;
	status: string;
}

export const education: Education[] = [
	{
		degree: 'Pregrado en Ingeniería de Sistemas',
		school: 'Universidad Bicentenaria de Aragua',
		period: '2024 – Presente',
		status: '7mo trimestre – En curso',
	},
];

export const skills = [
	{
		name: 'Desarrollo Web & Móvil',
		items: [
			'Angular',
			'Tailwind CSS',
			'HTML5 / CSS3',
			'JavaScript / TypeScript',
			'Consumo de REST APIs',
			'Maquetación adaptativa',
			'Git',
		],
	},
	{
		name: 'Entornos & Herramientas',
		items: ['OpenCode', 'Antigravity', 'WordPress', 'Flutter (básico)', 'Canva'],
	},
	{
		name: 'Atención & Servicio',
		items: [
			'Escucha activa',
			'Comunicación asertiva',
			'Resolución de problemas',
			'Fidelización',
			'Promoción comercial',
		],
	},
	{
		name: 'Ingeniería & Gestión',
		items: [
			'Análisis de requerimientos',
			'Lógica de sistemas',
			'Optimización de procesos',
			'Trabajo en equipo',
		],
	},
];

export const languages = [
	{ name: 'Español', level: 'Nativo', value: 100 },
	{ name: 'Inglés', level: 'Básico / Intermedio', value: 55 },
];

export const focusAreas = [
	{ name: 'Desarrollo Frontend', value: 90 },
	{ name: 'Ingeniería de Sistemas', value: 85 },
	{ name: 'Atención al Cliente', value: 75 },
];

export const quickFacts = [
	{ label: 'Formación', value: 'Ing. Sistemas – 7mo trimestre' },
	{ label: 'Ubicación', value: 'La Victoria, Aragua' },
	{ label: 'Experiencia', value: '1+ año (desarrollo & servicio)' },
	{ label: 'Idiomas', value: 'Español / Inglés básico-intermedio' },
];

export const socials = [
	{ name: 'LinkedIn', url: profile.linkedin, icon: 'linkedin' },
	{ name: 'GitHub', url: profile.github, icon: 'github' },
	{ name: 'WhatsApp', url: profile.whatsapp, icon: 'whatsapp' },
	{ name: 'Email', url: `mailto:${profile.email}`, icon: 'mail' },
];
