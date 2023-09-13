import { createApp } from 'vue'
import {createRouter, createWebHistory} from "vue-router";
import { createPinia } from "pinia";
import App from './App.vue'
import PageBoardGamesDiscounted from "@/components/PageBoardGamesDiscounted.vue";
import PageBoardGamesAll from "@/components/PageBoardGamesAll.vue";

const routes = [
    {path: '/Promotions', component: PageBoardGamesDiscounted},
    {path: '/All_board_games', component: PageBoardGamesAll}
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
