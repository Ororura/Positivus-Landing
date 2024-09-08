import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			boxShadow: {
				'black-bottom': '0 10px 10px -5px rgba(0, 0, 0, 1)',
			},
			colors: {
				primary: {
					'light-green': '#B9FF66',
					gray: '#F3F3F3',
					dark: '#191A23',
				},
			},
		},
	},
	plugins: [],
};
export default config;
