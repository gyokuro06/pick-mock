import { createRouter, createWebHashHistory } from "vue-router";
import DeliveryListPageVue from "../pages/DeliveryListPage.vue";
import DeliveryOrderPageVue from "../pages/DeliveryOrderPage.vue";

const routes = [
    {
        path: "/",
        name: "DeliveryList",
        component: DeliveryListPageVue,
    },
    {
        path: "/order",
        name: "OrderDelivery",
        component: DeliveryOrderPageVue,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;