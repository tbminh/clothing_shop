const admin =[
    {
        path:"/loginadmin",
        component:() => import("../resources/views/layouts/admin.vue"),
        children:[
            {
                path:"login",
                name: "admin-login",
                component: () => import ("../resources/views/pages/admin/login/index.vue")
            }
        ]
    }
];

export default admin;