import { createRouter, createWebHashHistory } from "vue-router";
import DeliveryListPageVue from "../pages/DeliveryListPage.vue";
import DeliveryOrderPageVue from "../pages/DeliveryOrderPage.vue";
import PickupLocationSelectorPageVue from "../pages/PickupLocationSelectorPage.vue";
import DeliveryDestSelectorPageVue from "../pages/DeliveryDestSelectorPage.vue";
import RegisterPickupLocationDetailPageVue from "../pages/RegisterPickupLocationDetailPage.vue";
import RegisterDeliveryDestDetailPageVue from "../pages/RegisterDeliveryDestDetailPage.vue";

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
        path: "/order/pickup/detail",
        name: "RegisterPickupLocationDetail",
        component: RegisterPickupLocationDetailPageVue,
    },
    {
        path: "/order/dest",
        name: "DeliveryDestinationSelector",
        component: DeliveryDestSelectorPageVue,
    },
    {
        path: "/order/dest/detail",
        name: "RegisterDeliveryDestDetail",
        component: RegisterDeliveryDestDetailPageVue,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;