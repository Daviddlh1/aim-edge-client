import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import InvoiceDetail from "@/views/InvoiceDetail";
import CreateInvoice from "@/views/CreateInvoice";
import ClientHistory from "@/views/ClientHistory";
import Error from "@/views/Error";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/invoice/:id",
    name: "invoiceDetail",
    component: InvoiceDetail,
  },
  {
    path: "/create-invoice",
    name: "createInvoice",
    component: CreateInvoice,
  },
  {
    path: "/client/clientDetails/:id",
    name: "clientHistory",
    component: ClientHistory,
  },
  {
    path: "*",
    name: "Error",
    component: Error,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
