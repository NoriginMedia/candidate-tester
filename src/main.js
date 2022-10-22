import {createApp} from 'vue'
import './style.css'
import App from './App.vue'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaHome,OiSearch, BiPersonFill , MdLivetv, GiRead, FaThList, BiPlayCircle} from "oh-vue-icons/icons";
addIcons(FaHome, OiSearch,BiPersonFill, MdLivetv, GiRead, FaThList, BiPlayCircle);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");