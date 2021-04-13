import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Visuals from '../views/Visuals.vue';
import More from '../views/More.vue';


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: '/visul',
        name: "Visuals",
        component: Visuals,
    },
    {
        path: '/More',
        name: "Info",
        component: More,
    },


];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
  
export default router;







