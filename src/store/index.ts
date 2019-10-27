import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import {ITodo} from '../types/todo'

interface IList {
    lists: ITodo[];
}
export default new Vuex.Store<IList>({
  state: {
    lists: [ // 数据
        {text: '吃饭', complete: false},
        {text: '睡觉', complete: true},
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
