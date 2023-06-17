import { createRouter, createWebHashHistory } from "vue-router";
import DeliveryListPageVue from "../components/pages/DeliveryListPage.vue";
import DeliveryOrderPageVue from "../components/pages/DeliveryOrderPage.vue";
import PickupLocationSelectorPageVue from "../components/pages/PickupLocationSelectorPage.vue";
import DeliveryDestSelectorPageVue from "../components/pages/DeliveryDestSelectorPage.vue";
import RegisterPickupLocationDetailPageVue from "../components/pages/RegisterPickupLocationDetailPage.vue";
import RegisterDeliveryDestDetailPageVue from "../components/pages/RegisterDeliveryDestDetailPage.vue";
import RefrigeratorCarTypePickPageVue from "../components/pages/RefrigeratorCarTypePickPage.vue";

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
        path: "/order/car",
        name: "RefrigeratorCarTypePick",
        component: RefrigeratorCarTypePickPageVue
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