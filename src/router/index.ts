import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import Login from '../views/Login.vue'

const routes: Array<any> = [
  {
    path: "/home",
    name: "Home",
    // enter page before to login
    meta: {
      requiredAuth: true
    },
    component: () => import('../views/Home.vue'),
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  }
];
const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    document.body.scrollTo(0,0)
  },
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requiredAuth)) {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next({ name: 'Login' })
    }
  } else {
    next()
  }
})

export default router;
