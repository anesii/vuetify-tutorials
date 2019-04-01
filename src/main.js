import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

Vue.config.productionTip = false;

Vue.use(Vuetify, {
    iconfont: 'md',
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');