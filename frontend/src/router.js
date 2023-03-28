import { createWebHistory, createRouter} from "vue-router";

const routes = [
    {
        path: "/",
        alias: "/rams",
        name: "rams",
        component: () => import("./components/RamsList.vue")
    },
    {
        path: "/rams/:id",
        name: "ram-details",
        component: () => import("./components/RAM")
    },
    {
        path: "/add",
        name: "add",
        component: () => import("./components/AddRAM.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;