const { fontSize, height } = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#ff6363',
                secondary: {
                    100: '#e2e2d5',
                    200: '#888883',
                },
            },
            fontSize: {
                francos: '8rem',
                small: '4rem',
                medium: '2rem',
                large: '12rem'
            },
            height: {
                small: '200px',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}