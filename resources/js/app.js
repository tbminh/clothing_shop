// import 'bootstrap';
import {createApp} from 'vue';
import router from '../../routes';
import {Drawer,Button, message} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.use(Button);
app.use(Drawer);
app.mount("#app");

app.config.globalProperties.$message=message;