import Main from './main.vue'
import { isTSModuleDeclaration } from 'babel-types';

Main.install = function(Vue) {
    Vue.component(Main.name, Main)
}

export default Main