import { createApp } from 'vue'
import App from './App.vue';
import router from './router/index';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import store from './store/index.ts';

const app = createApp(App);
app.use(router);
app.use(Antd);
app.use(store);
app.mount('#app');

// createApp(App).use(router).mount('#app')