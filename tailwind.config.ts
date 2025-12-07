import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx,js,jsx}",
		"./styles/**/*.css"
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'

				}, //  THE COLOR // 
				gold: {
					DEFAULT: '#D4AF37',//Main Color for text and Basic identity ,CTA page , border , inputs
					light: '#F5EFD8', //secondary color for gradient
					dark: '#A38728' //marginal color of identity
				},
				charcoal: {
					DEFAULT: '#222222', // MAIN texts throughout the site , Headings (H1, H2, H3) , Home index CTA Section , label
					light: '#444444',// For header pages bg , Secondary texts in some sections , text in projects pages , 
					dark: '#111111' //footer bg .
				},
				cream: '#F5F5F0' // Secondary Section Backgrounds , Secondary Card Backgrounds ,Soft Contrast with White or the main back ground ,sapces
			},
			fontFamily: {
				'playfair': ['Playfair Display', 'serif'],
				'tajawal': ['Tajawal', 'sans-serif'],
				'roboto': ['Roboto', 'sans-serif'],
				'cairo': ['Cairo', 'sans-serif'],
			},
			fontSize: {
				// Standardized font sizes
				'heading-1': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
				'heading-2': ['2rem', { lineHeight: '1.25', fontWeight: '700' }],
				'heading-3': ['1.75rem', { lineHeight: '1.3', fontWeight: '600' }],
				'heading-4': ['1.5rem', { lineHeight: '1.35', fontWeight: '600' }],
				'heading-5': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
				'body-large': ['1.125rem', { lineHeight: '1.5' }],
				'body': ['1rem', { lineHeight: '1.5' }],
				'body-small': ['0.875rem', { lineHeight: '1.5' }],
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-out': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(10px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.8s ease-out',
				'accordion-up': 'accordion-up 0.8s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'fade-out': 'fade-out 0.8s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],

} satisfies Config;
