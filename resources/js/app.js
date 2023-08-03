
import {createApp} from 'vue';
import router from '../../routes';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


const app = createApp(App);
// app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount("#app");

// app.config.globalProperties.$message=message;