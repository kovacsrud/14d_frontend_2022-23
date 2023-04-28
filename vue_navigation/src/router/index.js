
import {createRouter, createWebHistory} from 'vue-router';

import KomponensA from '../components/KomponensA.vue'
import HelloWorld from '../components/HelloWorld.vue'

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            name:'helloworld',
            component:HelloWorld
        },
        {
            path:'/komponensa',
            name:'komponensa',
            component:KomponensA
        }
    ]

});

export default router;