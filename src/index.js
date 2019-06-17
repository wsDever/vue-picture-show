
import Vue from 'vue';
import App from './app.vue';
import pictureShow from './components/pic-show'
// import pictureShow from '../dist/main.js'

Vue.use(pictureShow)
new Vue({
    el: '#app',
    render: h => h(App),
});
