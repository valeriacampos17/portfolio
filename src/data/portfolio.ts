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
	description: string;
	tech: string[];
	link: string;
	repo?: string;
	featured?: boolean;
}

export const projects: Project[] = [
	{
		title: 'Panel de Gestión de Usuarios',
		description:
			'Interfaz administrativa construida con Angular para la gestión de usuarios y permisos, con consumo de servicios REST API y diseño responsivo aplicando Tailwind CSS.',
		tech: ['Angular', 'TypeScript', 'Tailwind CSS', 'REST API'],
		link: '',
		repo: '',
		featured: true,
	},
	{
		title: 'Landing Page Corporativa',
		description:
			'Sitio promocional de una página con maquetación adaptativa, optimizado para carga rápida y preparado para posicionamiento en buscadores.',
		tech: ['HTML5', 'CSS3', 'Tailwind CSS', 'WordPress'],
		link: '',
		repo: '',
		featured: true,
	},
	{
		title: 'App de Consultas con API REST',
		description:
			'Aplicación web que consume una API REST para mostrar y filtrar información en tiempo real, con manejo de estados y validación de formularios.',
		tech: ['Angular', 'TypeScript', 'REST API'],
		link: '',
		repo: '',
	},
	{
		title: 'Portafolio Personal',
		description:
			'Sitio estático de portafolio desarrollado con Astro y Tailwind CSS, desplegado de forma automática mediante flujos de integración continua.',
		tech: ['Astro', 'Tailwind CSS', 'Git'],
		link: '',
		repo: '',
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
	{ name: 'Desarrollo Frontend', value: 85 },
	{ name: 'Atención al Cliente', value: 90 },
	{ name: 'Ingeniería & Gestión', value: 75 },
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
