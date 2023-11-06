import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import links from './links';
import cards from './cards';

const store = new Vuex.Store({
    modules: {
        links,
        cards,
    },
})

export default store