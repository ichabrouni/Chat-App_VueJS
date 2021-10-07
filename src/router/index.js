import { createRouter, createWebHistory } from 'vue-router'
import welcome from '../views/welcome.vue'
import Chatroom from '../views/Chatroom.vue'

const routes = [{
        path: '/',
        name: 'welcome',
        component: welcome
    },
    {
        path: '/chatroom',
        name: 'Chatroom',
        component: Chatroom
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router