import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/index.vue'

Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        name: 'Index',
        component: Index,
        children: [

            {
                path: "/members",
                name: 'Members',
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/meMbers/index.vue'),
            }
        ]
    },

]

const router = new VueRouter({
    routes
})

export default router