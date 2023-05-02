require('./bootstrap');

import Vue from 'vue';
//import App from "./App";            // х\з куда его
//import App from "./components/App"  // или это

// Вроде так как то должно быть но npm ругается на эту строку
app.component('app', require('./components/App'))//.default) // не робит
const app = new Vue({
    el: '#app'
})//.mount('#app') //не уверен что это нужно



/* // не робит
 import { createApp } from 'vue'
 import App from './App.vue'
 createApp(App).mount('#app')
 */

