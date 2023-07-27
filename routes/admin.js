const admin =[
    {
        path:"/admin",
        component:() => import("../resources/views/layouts/admin.vue"),
        children:[
            {
                path:"login",
                name: "admin-login",
                component: () => import ("../resources/views/pages/admin/login/index.vue")
            },
            {
                path:"roles",
                name: "admin-roles",
                component: () => import ("../resources/views/pages/admin/roles/index.vue")
            },
            {
                path:"settings",
                name: "admin-settings",
                component: () => import ("../resources/views/pages/admin/settings/index.vue")
            }
        ]
    }
];

export default admin;