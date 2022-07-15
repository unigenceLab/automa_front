import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const 레이아웃 = () => {  return import ("./components/layout.vue")}
const 견적조회 = () => {  return import ("./components/견적조회.vue")}
const 견적등록 = () => {  return import ("./components/견적등록.vue")}
const 상세입력모달1 = () => {  return import ("./components/모달/상세입력모달1.vue")}
const 상세입력모달2 = () => {  return import ("./components/모달/상세입력모달2.vue")}
const 상세입력모달3 = () => {  return import ("./components/모달/상세입력모달3.vue")}
const 상세입력모달4 = () => {  return import ("./components/모달/상세입력모달4.vue")}


const router = new VueRouter({
    mode: "history",
    routes: [
        {path:"/",component:레이아웃,
        children:[
            {path:"EScheck", component:견적조회},
            {path:"register",component:견적등록,children:[
                {path:"1", component:상세입력모달1},
                {path:"2", component:상세입력모달2},
                {path:"3", component:상세입력모달3},
                {path:"4", component:상세입력모달4},
            ]},
        ]},

    ]
})



export default router