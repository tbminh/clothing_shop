const admin = [
    {
        path: "/admin",
        component: () => import("../resources/views/layouts/admin.vue"),
        children: [
            {
                path: "",
                name: "admin-home",
                component: () =>
                    import("../resources/views/pages/admin/home/index.vue"),
            },
            {
                path: "users",
                name: "admin-users",
                component: () =>
                    import("../resources/views/pages/admin/users/index.vue"),
            },
            {
                path: "roles",
                name: "admin-roles",
                component: () =>
                    import("../resources/views/pages/admin/roles/index.vue"),
            },
        ],
    },
];

export default admin;
