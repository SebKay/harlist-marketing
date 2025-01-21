/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./assets/**/*.js",
    ],

    theme: {
        fontFamily: {
            'text': ['DM Sans', 'sans-serif'],
            'heading': ['DM Sans', 'sans-serif'],
        },

        fontSize: {
            'xss': '0.563rem', // 9px
            'xs': '0.688rem', // 11px
            'sm': '0.813rem', // 13px
            'base': '0.938rem', // 15px
            'lg': '1.063rem', // 17px
            'xl': '1.188rem', // 19px
            '2xl': '1.375rem', // 22px
            '3xl': '1.625rem', // 26px
            '4xl': '2.125rem', // 34px
            '5xl': '2.5rem', // 40px
            '6xl': '3.25rem', // 52px
            '7xl': '3.875rem', // 62px
            '8xl': '4.5rem', // 72px
        },

        extend: {
            colors: {
                'brand': '#4bc18b',
            },

            borderRadius: {
                DEFAULT: '0.313rem', // 5px
                '3xl': '1.25rem', // 20px
            },

            boxShadow: {
                'lg': '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
            },

            maxWidth: {
                'lg': '32.5rem', // 520px
                '3xl': '49.375rem', // 790px
                '8xl': '100rem', // 1600px
            },

            screens: {
                'xs': '376px',
                'sm': '501px',
                'md': '671px',
                'lg': '769px',
                'xl': '1025px',
                '2xl': '1281px',
                '3xl': '1441px',
                '4xl': '1921px',
            },

        },
    },

    plugins: [
        require('@tailwindcss/forms'),
    ],
}

