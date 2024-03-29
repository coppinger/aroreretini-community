/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            backgroundImage: {
                "twitch-pattern": "url('/twitch-pattern.png')",
            },
            fontFamily: {
                glamour: ["Glamour", "serif"],
                satoshi: ["Satoshi", "sans-serif"],
            },
        },
    },
    plugins: [],
};
