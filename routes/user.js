const user =[
    {
        path:"/",
        component:() => import("../resources/views/layouts/user.vue"),
        children:[
            {
                path:"login",
                name: "auth-home",
                component: () => import ("../resources/views/pages/auth/auth.vue")
            },
            {
                path:"/",
                name: "screens-home",
                component: () => import ("../resources/views/pages/screens/home/index.vue")
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