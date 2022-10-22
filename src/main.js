import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App);
// icons config
import {OhVueIcon, addIcons} from "oh-vue-icons";
import {FaHome, OiSearch, BiPersonFill, MdLivetv, GiRead, FaThList, BiPlayCircle} from "oh-vue-icons/icons";

addIcons(FaHome, OiSearch, BiPersonFill, MdLivetv, GiRead, FaThList, BiPlayCircle);
app.component("v-icon", OhVueIcon);


app.use(router).mount("#app")