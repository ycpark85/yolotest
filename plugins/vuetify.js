import Vue from 'vue'
import Vuetify from 'vuetify'


// You can also specify those components you are going to use for "a la carte" build:
// https://github.com/vuetifyjs/nuxt/blob/master/template/plugins/vuetify.js
// https://github.com/vuetifyjs/a-la-carte/blob/master/template/src/main.js

Vue.use(Vuetify, {
    theme: {
        primary: '#52c3f1',
        secondary: '#1abc9c',
        accent: '#fdd000',
        error: '#e74c3c',
        action: '#23DB2A'
    }
})