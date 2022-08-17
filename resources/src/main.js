
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('../js/bootstrap');
window.Vue = require('vue');
window.moment = require('moment');

import Vue from 'vue';
import * as AOS from 'aos';
import * as loader from '../helpers/loader.js';
import * as table from '../helpers/table.js';
import * as sidebar from '../helpers/sidebar.js';

Vue.prototype.$loader = loader;
Vue.prototype.$table =  table;
Vue.prototype.$sidebar =  sidebar;

import VueSimpleAlert from 'vue-simple-alert';
import Multiselect from 'vue-multiselect'

import VueDatePicker from '@mathieustan/vue-datepicker';
import '@mathieustan/vue-datepicker/dist/vue-datepicker.min.css';
Vue.use(VueDatePicker);

Vue.use(VueSimpleAlert, { reverseButtons: true });
Vue.component('multiselect',Multiselect);

Vue.component('app-navbar',require('./landing/Navbar.vue').default);
Vue.component('app-footer',require('./landing/Footer.vue').default);
Vue.component('data-loader',require('./components/DataLoader.vue').default);

AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
});
 const app = new Vue({
     el: '#app',
     components:{
        'landing-view' : () => import('./landing/Landing.vue'),
     }
 });
 