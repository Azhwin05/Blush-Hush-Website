import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                ivory: "#F7F3EE",
                white: "#FFFFFF",
                ink: {
                    DEFAULT: "#161616",
                    secondary: "#5C5C5C",
                },
                navy: "#0B1F3B",
                brass: "#B08D57",
                sage: "#7C8F83",
                hairline: "#E7DED5",
                // Dedicated Healthcare Palette
                hc: {
                    yellow: "#FFE78B",
                    grey: "#D9DADA",
                    teal: "#57A7B3",
                    sky: "#A2D9F7",
                    olive: "#898778",
                    surface: "#FEFEFE",
                }
            },
            fontFamily: {
                serif: ["var(--font-fraunces)", "serif"],
                sans: ["var(--font-manrope)", "sans-serif"],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
};
export default config;
