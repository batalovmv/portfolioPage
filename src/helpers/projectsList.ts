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
		title: 'Лента постов с лайками и комментариями',
		skills: 'React, Redux, Node.js, MySQL, Docker, Vite, JWT-token',
		img: project01,
		imgBig: project01Big,
        gitHubLink: 'https://github.com/batalovmv/attractor-homework_92',
        siteLink:'http://5.181.108.207:81'
	},
  
	{
		title: 'L5R Project Hub — приложение для ролевой игры',
		img: project02,
		imgBig: project02Big,
		skills: 'Next.js, TypeScript, Tailwind CSS',
		description:
			'Хаб оффлайн‑приложения для L5R 5e: страница проекта с возможностями, дорожной картой и FAQ. Без серверов, аккаунтов и подписок.',
		frontend: 'Next.js, TypeScript, Tailwind CSS',
		backend: 'Нет серверной части (offline‑first, без аккаунтов/серверов).',
		gitHubLink: 'https://github.com/batalovmv/l5r-project-site',
        siteLink: 'https://batalovmv.github.io/l5r-project-site/'
	},
	{
        title: 'заглушка',
		img: project03,
		imgBig: project03Big,
		skills: 'Vue JS, Node.js, MongoDB',
		gitHubLink: 'https://github.com',
        siteLink: '#'
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
