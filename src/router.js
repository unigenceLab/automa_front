import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const 레이아웃 = () => {  return import ("./components/layout.vue")}
const 견적조회 = () => {  return import ("./components/견적조회.vue")}
const 견적등록 = () => {  return import ("./components/견적등록.vue")}


const router = new VueRouter({
    mode: "history",
    routes: [
        {path:"/",component:레이아웃,
        children:[
            {path:"EScheck", component:견적조회},
            {path:"register",component:견적등록},
        ]},

    ]
})



export default router