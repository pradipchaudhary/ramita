import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            sm: "375px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
        },
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            backgroundImage: {
                bannerImg: "url('/home-banner-01.jpg')",
                blackOverlay:
                    "linear-gradient(to bottom,rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)",
            },
        },
    },
    plugins: [],
} satisfies Config;
