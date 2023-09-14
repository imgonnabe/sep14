import { createRouter, createWebHistory } from 'vue-router'
import indexPage from '@/views/IndexPage.vue'
import boardList from '@/views/BoardList.vue'
import mainPage from '@/views/MainPage.vue'
import loginPage from '@/views/LoginPage.vue'
import joinPage from '@/views/JoinPage.vue'
const routes = [
 {path: '/', name: 'index', component: indexPage},
 {path: '/join', name: 'join', component: joinPage},
 {path: '/boardList', name: 'boardList', component: boardList},
 {path: '/main', name: 'main', component: mainPage},
 {path: '/login', name: 'login', component: loginPage}
]
const router = createRouter({
 history: createWebHistory(process.env.BASE_URL),
 routes
})
export default router