/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Editorial / light theme palette.
        // Token names kept (bg/card/ink/muted/pink/violet) so existing components cascade.
        bg: '#FBF8F4',        // warm cream paper background
        card: '#FFFFFF',      // clean surface
        warm: '#F2EDE5',      // warm gray section background
        ink: '#1B1B1F',       // deep charcoal text
        'ink-soft': '#2D2D33',
        muted: '#6B6B72',     // warm gray secondary text
        rule: '#E9E3DA',      // subtle warm border / divider
        pink: {
          soft: '#F4D9E2',    // light wash (tags, hovers)
          DEFAULT: '#B84D6A', // dusty rose accent — readable on cream
          deep: '#8E2F4A',    // hover / pressed
          glow: 'rgba(184, 77, 106, 0.15)',
        },
        violet: {
          soft: '#9B7BAE',
          DEFAULT: '#6E4B6B', // muted plum, used sparingly
          glow: 'rgba(110, 75, 107, 0.12)',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Lora"', 'serif'],
        sans: ['Inter', '"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', '"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        bob: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '50.01%, 100%': { opacity: '0' },
        },
      },
      animation: {
        bob: 'bob 4s ease-in-out infinite',
        bounceSoft: 'bounceSoft 2s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
        blink: 'blink 1s steps(1) infinite',
      },
    },
  },
  plugins: [],
};
