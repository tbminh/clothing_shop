const user =[
    {
        path:"/",
        name: 'home',
        component:() => import("../resources/views/layouts/user.vue"),
        children:[
            {
                path:"/",
                name: "screenspage",
                component: () => import ("../resources/views/pages/screens/home/index.vue")
            },
            {
                path:"/home",
                name: "screenspage2",
                component: () => import ("../resources/views/pages/screens/home/index.vue")
            },
            {
                path:"login",
                name: "auth",
                component: () => import ("../resources/views/pages/auth/auth.vue")
            },
            {
                path:"product",
                name: "screens-product",
                component: () => import ("../resources/views/pages/screens/product/index.vue")
            },
            {
                path:"blog",
                name: "screens-blog",
                component: () => import ("../resources/views/pages/screens/blog/index.vue")
            },
           
        ]
    }
];

export default user;