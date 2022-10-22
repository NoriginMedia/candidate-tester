import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import ProgramDetails from '../views/ProgramDetails.vue'

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/details",
        name: "ProgramDetails",
        component: ProgramDetails
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;