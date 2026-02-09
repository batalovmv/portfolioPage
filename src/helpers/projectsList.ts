import project01 from "./../img/projects/01.jpg";
import project01Big from "./../img/projects/01-big.jpg";

import project02 from "./../img/projects/02.jpg";
import project02Big from "./../img/projects/02-big.jpg";

import project03 from "./../img/projects/03.jpg";
import project03Big from "./../img/projects/03-big.jpg";

import project04 from "./../img/projects/04.jpg";
import project04Big from "./../img/projects/04-big.jpg";

const projects = [
	{
		title: 'MemAlerts — мем-алерты для стримов',
		skills:
			'React, TypeScript, Vite, Tailwind CSS, Redux Toolkit, Express, Socket.IO, PostgreSQL, Prisma, Redis, BullMQ',
		img: project01,
		imgBig: project01Big,
		description:
			'Платформа для активации мемов на стримах: зрители запускают мемы за баллы/монеты, стример управляет каталогом и настройками. OBS overlay, мульти-платформенные чат-боты и real-time события.',
		frontend:
			'React SPA (Vite) + Tailwind CSS, Redux Toolkit, React Router, i18next, Socket.IO client, PWA',
		backend:
			'Node.js (TypeScript), Express, Socket.IO, PostgreSQL (Prisma), Redis, BullMQ, Twitch OAuth (Passport), S3',
		gitHubLink: 'https://github.com/batalovmv/memalerts',
		siteLink: 'https://memelab.ru/',
	},

	{
		title: 'L5R Companion — мобильное приложение для L5R 5e',
		img: project02,
		imgBig: project02Big,
		skills:
			'React Native, Expo, TypeScript, SQLite, Zustand, Zod, React Hook Form',
		status: 'frozen',
		statusLabel: 'Разработка заморожена',
		description:
			'Приложение-компаньон для Legend of the Five Rings 5e: кампании, персонажи, справочник и инструменты. Offline-first — все данные локально, без аккаунтов.',
		frontend: 'React Native, Expo Router, TypeScript, Zustand',
		backend: 'Нет: offline-first (SQLite на устройстве)',
		hub: 'Next.js (App Router), TypeScript, Tailwind CSS',
		gitHubLink: 'https://github.com/batalovmv/l5r',
		siteLink: 'https://batalovmv.github.io/l5r-project-site/',
	},
	{
		title: 'Alla Cosmetology — сайт косметолога + админка',
		img: project03,
		imgBig: project03Big,
		skills:
			'React, TypeScript, Vite, Firebase, Redux Toolkit, React Hook Form, PWA, Telegram bot (grammY)',
		description:
			'Сайт-визитка с каталогом процедур и формами записи + админ-панель для управления контентом. Интеграции: Firebase и Telegram бот для уведомлений.',
		frontend:
			'React SPA (Vite), React Router, Redux Toolkit, React Hook Form, CSS Modules, PWA',
		backend:
			'Firebase Auth/Firestore/Storage + Cloud Functions, Telegram bot (grammY + firebase-admin)',
		gitHubLink: 'https://github.com/batalovmv/alla',
		siteLink: 'https://batalovmv.github.io/alla/',
	},
	{
		title: 'MemeLab Neiro — AI-компаньон для стримов',
		img: project04,
		imgBig: project04Big,
		skills:
			'Python, OpenAI, Anthropic Claude, Google Gemini, edge-tts, ElevenLabs, faster-whisper, ChromaDB, OBS WebSocket',
		description:
			'AI-ассистент для стримеров: следит за стримом, читает чат и отвечает как настоящий зритель. Мульти-провайдерные LLM, TTS/STT, RAG с векторной БД.',
		frontend: 'HTML, CSS, JavaScript (лендинг)',
		backend:
			'Python, FastAPI, OpenAI/Claude/Gemini API, edge-tts, ElevenLabs, faster-whisper, ChromaDB, OBS WebSocket',
		gitHubLink: 'https://github.com/batalovmv/memlab-neiro',
		siteLink: 'https://neiro-api.memelab.ru',
	},
];

export { projects };
