const admin = [
    {
        path: "/admin",
        component: () => import("../resources/views/layouts/admin.vue"),
        children: [
            {
                path: "roles",
                name: "admin-roles",
                component: () =>
                    import("../resources/views/pages/admin/roles/index.vue"),
            },
            {
                path: "settings",
                name: "admin-settings",
                component: () =>
                    import("../resources/views/pages/admin/settings/index.vue"),
            },
        ],
    },
];

export default admin;
