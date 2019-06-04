import Vue from 'vue'
import Router from 'vue-router'
import Login from "@/components/Login"
import Dashboard from "@/components/Dashboard"
import Catalog from "@/components/Catalog"
import Rent from "@/components/Rent"
import Turn from "@/components/Turn"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard
    },
    {
      path: "/catalog",
      name: "Catalog",
      component: Catalog
    },
    {
      path: "/rent",
      name: "Rent",
      component: Rent
    },
    {
      path: "/turn",
      name: "Turn",
      component: Turn
    }
  ]
})
