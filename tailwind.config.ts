import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
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
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
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
					foreground: 'hsl(var(--card-foreground))',
					border: 'hsl(var(--card-border))'
				},
				glass: {
					DEFAULT: 'hsl(var(--glass))',
					border: 'hsl(var(--glass-border))',
					hover: 'hsl(var(--glass-hover))'
				},
				cyber: {
					primary: 'hsl(var(--cyber-primary))',
					secondary: 'hsl(var(--cyber-secondary))',
					accent: 'hsl(var(--cyber-accent))',
					warning: 'hsl(var(--cyber-warning))',
					danger: 'hsl(var(--cyber-danger))'
				},
				neon: {
					blue: 'hsl(var(--neon-blue))',
					purple: 'hsl(var(--neon-purple))',
					green: 'hsl(var(--neon-green))',
					pink: 'hsl(var(--neon-pink))'
				}
			},
			fontFamily: {
				cyber: ['Orbitron', 'monospace'],
				display: ['Orbitron', 'monospace'],
				heading: ['Orbitron', 'monospace'],
				body: ['Inter', 'sans-serif'],
				sans: ['Inter', 'sans-serif']
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
				'hologram': 'hologram 3s ease-in-out infinite',
				'floating': 'floating 3s ease-in-out infinite',
				'glitch-1': 'glitch-1 0.3s linear infinite',
				'glitch-2': 'glitch-2 0.3s linear infinite',
				'matrix-rain': 'matrix-rain 2s linear infinite',
				'fade-in': 'fadeIn 0.6s ease-out',
				'slide-up': 'slideUp 0.6s ease-out',
				'scale-in': 'scaleIn 0.4s ease-out'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'glow-pulse': {
					'0%': { boxShadow: '0 0 20px hsl(var(--cyber-primary) / 0.3)' },
					'100%': { boxShadow: '0 0 40px hsl(var(--cyber-primary) / 0.6)' }
				},
				hologram: {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				floating: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'glitch-1': {
					'0%': { transform: 'translateX(0)' },
					'20%': { transform: 'translateX(-2px)' },
					'40%': { transform: 'translateX(2px)' },
					'60%': { transform: 'translateX(-2px)' },
					'80%': { transform: 'translateX(2px)' },
					'100%': { transform: 'translateX(0)' }
				},
				'glitch-2': {
					'0%': { transform: 'translateX(0)' },
					'20%': { transform: 'translateX(2px)' },
					'40%': { transform: 'translateX(-2px)' },
					'60%': { transform: 'translateX(2px)' },
					'80%': { transform: 'translateX(-2px)' },
					'100%': { transform: 'translateX(0)' }
				},
				'matrix-rain': {
					'0%': { transform: 'translateY(-100vh)', opacity: '1' },
					'100%': { transform: 'translateY(100vh)', opacity: '0' }
				},
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(40px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				scaleIn: {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				}
			},
			backgroundImage: {
				'gradient-cyber': 'linear-gradient(45deg, hsl(var(--cyber-primary)), hsl(var(--cyber-accent)), hsl(var(--cyber-secondary)))',
				'gradient-glow': 'linear-gradient(135deg, hsl(var(--neon-blue) / 0.3), hsl(var(--neon-purple) / 0.3))',
				'gradient-primary': 'linear-gradient(135deg, hsl(var(--cyber-primary)), hsl(var(--cyber-secondary)))'
			},
			boxShadow: {
				'cyber': '0 0 20px hsl(var(--neon-blue) / 0.3)',
				'neon': '0 0 30px hsl(var(--cyber-primary) / 0.5)',
				'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
				'glow': '0 0 40px hsl(var(--cyber-primary) / 0.6)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;