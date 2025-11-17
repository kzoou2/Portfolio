
module.exports = {
    darkMode: 'class', // 또는 'media'
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
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
