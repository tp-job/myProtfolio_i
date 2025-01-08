tailwind.config = {
    theme: {
        extend: {
            gridTemplateColumns: {
                auto: 'repeat(auto-fit, minmax(100px, 1fr))',
            },
            fontFamily: {
                Inter: ["Inter", 'sans-serif'],
                Zen: ["Zen Kaku Gothic New", 'sans-serif'],
            },
            colors: {
                lightHover: '#fcf4ff',
                darkHover: '#3c3c3c',
                darkTheme: '#222222',
            },
            boxShadow: {
                black: '4px 4px 0 #000',
                white: '4px 4px 0 #fff',
            },
        }
    },
    darkMode: 'selector',
}