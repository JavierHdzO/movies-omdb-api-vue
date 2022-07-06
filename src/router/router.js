import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {path:'/', name:'home', component: () => import ('@/views/Home')  },
    {path:'/movie/:id', name:'movie-id', component: () => import ('@/views/MovieDetail')},
    {path:'/:patmatch(.*)*', redirect:'/'}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router