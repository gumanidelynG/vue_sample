import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/home.vue";
import ProductList from "../components/ProductList.vue";
import AddProduct from "../components/AddProduct.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/products", component: ProductList },
  { path: "/add", component: AddProduct },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;