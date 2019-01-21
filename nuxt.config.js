module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'yolo',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: "width=device-width, initial-scale=1.0" },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
        ],
        script: [{
            src: 'https://code.jquery.com/jquery-3.1.1.slim.min.js'
        }]
    },
    plugins: [
        '~plugins/vuetify.js',
    ],
    css: [
        '~assets/CSS/style.css',
        '~assets/CSS/main.css',
        {
            src: '~assets/CSS/app.styl',
            lang: 'styl'
        },

    ],

    /*
     ** Customize the progress bar color
     */
    loading: { color: '#3B8070' },
    /*
     ** Build configuration
     */
    build: {

        vendor: ['axios', 'vuetify'],
        extractCSS: true,
        /*
         ** Run ESLint on save
         */
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })


            }


        }
    },

}