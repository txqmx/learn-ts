import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        lists: [
            { text: '吃饭', complete: false },
            { text: '睡觉', complete: true },
        ],
    },
    mutations: {},
    actions: {},
    modules: {},
});
//# sourceMappingURL=index.js.map