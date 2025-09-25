
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                cinzel: ['Cinzel', 'serif'],
                // jafherb: ['JAFHerb-CondensedRegular', 'sans-serif'],
                jaf: ["JAFHerb-Regular", 'sans-serif']
                
            },
        },
    },
    plugins: [],
    corePlugins: {
        scrollBehavior: true,
    },
}
