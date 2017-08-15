import App from './App.vue'
import router from './router/router'
import { sync } from 'vuex-router-sync'
import mixins from './mixins'
// import Vuex from 'vuex'
import store from './vuex/store'

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store,router)

// register global mixins.
Vue.mixin(mixins)

// App.el = '#root'
// export default new Vue(App);

//or
export default new Vue(Vue.util.extend({el:'#root',router,store},App));
router.push('/')
