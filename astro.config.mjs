import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import './src/styles/styles.css';

export default defineConfig({
	integrations: [
		starlight({
			title: '🧗 SaarClimb Docs',
			social: {
				github: 'https://github.com/kreutzermaik',
			},
			sidebar: [
				{
					label: 'Benutzerhandbuch',
					items: [
						{ label: 'Allgemein', link: '/benutzerhandbuch/allgemein/' }
					],
				},
				{
					label: 'Development Guide',
					items: [
						{ label: 'Einführung', link: '/guides/introduction/' },
						{ label: 'Features', link: '/guides/features/' },
						{ label: 'Backend Setup', link: '/guides/backend-setup/' },
						{ label: 'Hosting', link: '/guides/hosting/' },
					],
				},
				{
					label: 'Performance',
					autogenerate: { directory: 'performance' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			customCss: [
				'./src/styles/styles.css',
			],
		}),
	],
});
