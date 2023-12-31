import type { Config } from 'tailwindcss';

const config: Config = {
	mode: 'jit',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			fontSize: {
				'2xs': '0.625rem'
			},
			maxWidth: {
				'6.5xl': '1172px'
			},
			colors: {
				neutral: {
					750: '#303030'
				}
			}
		},
	},
};

export default config;
