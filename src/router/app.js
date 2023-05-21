export default [
    {
        name: "admin",
        path: "/admin",
        component: () => import("../resources/app/home"),
        redirect: {
            name: "admin.home",
        },
    },
    {
        name: "admin.home",
        path: "/admin/home",
        component: () => import("../resources/app/home"),
    },
    {
        name : 'admin.booking',
        path : '/admin/booking',
        component : () => import("../resources/app/booking"),
        redirect : {
            name : 'admin.booking'
        },
        children : [
            {
                name : 'admin.booking',
                path : '/admin/booking',
                component : () => import("../resources/app/booking/list.vue")
            }
        ]
    },
    {
        name : 'admin.tour',
        path : '/admin/tour',
        redirect : {
            name : 'admin.tour'
        },
        component : () => import ("../resources/app/tour"),
        children : [
            {
                name : 'admin.tour.list',
                path : '/admin/tour',
                component : () => import("../resources/app/tour/list.vue")
            },
            {
                name : 'admin.tour.create',
                path : '/admin/tour/create',
                component : () => import("../resources/app/tour/create.vue")
            },
            {
                name : 'admin.tour.detail',
                path : '/admin/tour/:id/detail',
                component : () => import("../resources/app/tour/detail.vue")
            },
            {
                name : 'admin.tour.edit',
                path : '/admin/tour/:id/edit',
                component : () => import("../resources/app/tour/edit.vue")
            }
        ]
    },
    {
        name : 'admin.destination',
        path : '/admin/destination',
        redirect : {
            name : 'admin.destination.list'
        },
        component : () => import('@/resources/app/destination'),
        children : [
            {
                name : 'admin.destination.list',
                path : "/",
                component : () => import('@/resources/app/destination/list.vue')
            },
            {
                name : 'admin.destination.create',
                path : "/admin/destination/create",
                component : () => import('@/resources/app/destination/create.vue')
            },
            {
                name : 'admin.destination.edit',
                path : "/admin/destination/edit/:id",
                component : () => import('@/resources/app/destination/edit.vue')
            },
        ]
    },
    {
        name : 'admin.user',
        path : '/admin/user',
        component : () => import("../resources/app/user")
    }
]