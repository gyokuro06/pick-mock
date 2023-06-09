import { createRouter, createWebHashHistory } from "vue-router";
import DeliveryListPageVue from "../pages/DeliveryListPage.vue";

const routes = [
    {
        path: "/",
        name: "DeliveryList",
        component: DeliveryListPageVue,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;