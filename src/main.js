import { createApp } from 'vue'
import {createRouter, createWebHistory} from "vue-router";
import { createPinia } from "pinia";
import App from './App.vue'
import PageBoardGamesDiscounted from "@/components/PageProductsDiscounted.vue";
import PageBoardGamesAll from "@/components/PageProductsAll.vue";
import PageBoardGamesNew from "@/components/PageProductsNew.vue";
import PageProductsAccessories from "@/components/PageProductsAccessories.vue";

const routes = [
    {path: '/products/promotions', component: PageBoardGamesDiscounted},
    {path: '/products/new', component: PageBoardGamesNew},
    {path: '/products/all', component: PageBoardGamesAll},
    {path: '/products/accessories', component: PageProductsAccessories}
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
