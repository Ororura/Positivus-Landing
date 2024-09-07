import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			maxWidth: {
				'1440': '1440px',
			},
			height: {
				'68': '68px',
			},
			margin: {
				'60-custom': '60px auto auto auto',
			},
			spacing: {
				'100': '100px',
			},
		},
	},
	plugins: [],
};
export default config;
