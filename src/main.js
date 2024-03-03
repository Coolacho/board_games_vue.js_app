import { createApp } from 'vue'
import {createRouter, createWebHistory} from "vue-router";
import { createPinia } from "pinia";
import App from './App.vue'
import PageBoardGamesDiscounted from "@/components/PageProductsDiscounted.vue";
import PageBoardGamesAll from "@/components/PageProductsAll.vue";
import PageBoardGamesNew from "@/components/PageProductsNew.vue";
import PageProductsAccessories from "@/components/PageProductsAccessories.vue";

const routes = [
    {path: '/Products/Promotions', component: PageBoardGamesDiscounted},
    {path: '/Products/New', component: PageBoardGamesNew},
    {path: '/Products/All', component: PageBoardGamesAll},
    {path: '/Products/Accessories', component: PageProductsAccessories}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
