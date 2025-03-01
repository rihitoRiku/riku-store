import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		backgroundImage: {},
  		fontFamily: {
  			sans: [
  				'var(--font-rethink-sans)'
  			],
  			passionConflict: [
  				'var(--font-passion-conflict)'
  			],
  			inter: [
  				'var(--font-inter)'
  			]
  		},
  		colors: {
  			primary: {
  				DEFAULT: '#'
  			},
  			secondary: {
  				DEFAULT: '#'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))'
  			},
  			custom: {
  				dark: '#09090B',
  				secdark: '#3f3f46 ',
  				light: '#FAFAFA',
  				gray: '#58626C',
  				beige: '#DAC8BE',
  				peach: '#ECC1A1',
  				cream: '#F5F1EE'
  			},
  			keyframes: {
  				'caret-blink': {
  					'0%,70%,100%': {
  						opacity: '1'
  					},
  					'20%,50%': {
  						opacity: '0'
  					}
  				}
  			},
  			animation: {
  				'caret-blink': 'caret-blink 1.25s ease-out infinite'
  			},
  			'color-1': 'hsl(var(--color-1))',
  			'color-2': 'hsl(var(--color-2))',
  			'color-3': 'hsl(var(--color-3))',
  			'color-4': 'hsl(var(--color-4))',
  			'color-5': 'hsl(var(--color-5))'
  		},
  		keyframes: {
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			},
  			rainbow: {
  				'0%': {
  					'background-position': '0%'
  				},
  				'100%': {
  					'background-position': '200%'
  				}
  			},
  			gradient: {
  				to: {
  					backgroundPosition: 'var(--bg-size, 300%) 0'
  				}
  			}
  		},
  		animation: {
  			marquee: 'marquee var(--duration) infinite linear',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
  			rainbow: 'rainbow var(--speed, 2s) infinite linear',
  			gradient: 'gradient 8s linear infinite'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
