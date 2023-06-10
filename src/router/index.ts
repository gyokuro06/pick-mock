import { createRouter, createWebHashHistory } from "vue-router";
import DeliveryListPageVue from "../pages/DeliveryListPage.vue";
import DeliveryOrderPageVue from "../pages/DeliveryOrderPage.vue";
import PickupLocationSelectorPageVue from "../pages/PickupLocationSelectorPage.vue";
import DeliveryDestSelectorPageVue from "../pages/DeliveryDestSelectorPage.vue";

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
    },
    {
        path: "/order/pickup",
        name: "PickupLocationSelector",
        component: PickupLocationSelectorPageVue,
    },
    {
        path: "/order/dest",
        name: "DeliveryDestinationSelector",
        component: DeliveryDestSelectorPageVue,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;