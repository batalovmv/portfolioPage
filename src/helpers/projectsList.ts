import project01 from "./../img/projects/01.jpg";
import project01Big from "./../img/projects/01-big.jpg";

import project02 from "./../img/projects/02.jpg";
import project02Big from "./../img/projects/02-big.jpg";

import project03 from "./../img/projects/03.jpg";
import project03Big from "./../img/projects/03-big.jpg";

import project04 from "./../img/projects/04.jpg";
import project04Big from "./../img/projects/04-big.jpg";

import project05 from "./../img/projects/05.jpg";
import project05Big from "./../img/projects/05-big.jpg";

import project06 from "./../img/projects/06.jpg";
import project06Big from "./../img/projects/06-big.jpg";

const projects = [
	{
		title: 'MemAlerts — мем-алерты для стримов (channel points)',
		skills:
			'React, TypeScript, Vite, Tailwind CSS, Redux Toolkit, Express, Socket.IO, PostgreSQL, Prisma, Redis, BullMQ',
		img: project01,
		imgBig: project01Big,
		description:
			'Платформа для активации мемов на стримах: зрители запускают мемы за баллы/монеты, стример управляет каталогом и настройками. Есть OBS overlay, чат-боты и real-time события.',
		frontend:
			'React SPA (Vite) + Tailwind CSS, Redux Toolkit, React Router, i18next, Socket.IO client, PWA',
		backend:
			'Node.js (TypeScript), Express, Socket.IO, PostgreSQL (Prisma), Redis (adapters/queues), BullMQ, Twitch OAuth (Passport), S3 uploads',
        gitHubLink: 'https://github.com/batalovmv/memalerts',
        siteLink:'https://twitchmemes.ru/'
	},
  
	{
		title: 'L5R Companion — оффлайн мобильное приложение для L5R 5e',
		img: project02,
		imgBig: project02Big,
		skills:
			'React Native, Expo, TypeScript, SQLite (expo-sqlite), Zustand, Zod, React Hook Form',
		status: 'frozen',
		statusLabel: 'Разработка заморожена',
		description:
			'Приложение-компаньон для Legend of the Five Rings 5e: кампании, персонажи, справочник и инструменты (dice/NPC/encounters). Offline-first — все данные хранятся локально, без аккаунтов и серверов.',
		frontend: 'React Native, Expo Router, TypeScript, Zustand',
		backend: 'Нет: offline-first (SQLite на устройстве), без аккаунтов/серверов.',
		hub: 'Next.js (App Router), TypeScript, Tailwind CSS',
		gitHubLink: 'https://github.com/batalovmv/l5r',
		siteLink: 'https://batalovmv.github.io/l5r-project-site/'
	},
	{
        title: 'Alla Cosmetology — сайт косметолога (SPA) + админка + Telegram бот',
		img: project03,
		imgBig: project03Big,
		skills:
			'React, TypeScript, Vite, Firebase (Auth/Firestore/Storage), Redux Toolkit, React Router, React Hook Form, PWA, Telegram bot (grammY)',
		description:
			'Сайт-визитка с каталогом процедур и формами записи + полноценная админ‑панель для управления контентом и заявками. Интеграции: Firebase (Auth/Firestore/Storage + Cloud Functions) и Telegram бот для сценариев записи/уведомлений.',
		frontend:
			'React SPA (Vite) + TypeScript (strict), React Router, Redux Toolkit, React Hook Form, CSS Modules, lazy-loading/Suspense, PWA',
		backend:
			'Firebase Auth/Firestore/Storage + Cloud Functions (security rules/custom claims), Telegram bot (Node.js + TypeScript + grammY + firebase-admin + node-cron)',
		gitHubLink: 'https://github.com/batalovmv/alla',
        siteLink: 'https://batalovmv.github.io/alla/'
	},
	{
        title: 'заглушка',
		img: project04,
		imgBig: project04Big,
		skills: 'React Native',
        siteLink: '#'
	},
	{
        title: 'заглушка',
		img: project05,
		imgBig: project05Big,
		skills: 'HTML, SCSS, JS',
        siteLink: '#'
	},
	{
        title: 'заглушка',
		img: project06,
		imgBig: project06Big,
		skills: 'React, PHP, MySql',
        siteLink: '#'
	},
];

export {projects}
