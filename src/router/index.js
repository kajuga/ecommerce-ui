import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView'
import AddCategory from "../views/category/AddCategory";
import Category from "../views/category/Category";
import EditCategory from "../views/category/EditCategory";
import AddProduct from "../views/product/AddProduct";
import Product from "../views/product/Product";
import EditProduct from "../views/product/EditProduct";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/AboutView"),
  },
  {
    path: "/admin/category/add",
    name: "AddCategory",
    component: AddCategory,
  },
  {
    path: "/admin/category",
    name: "AdminCategory",
    component: Category,
  },
  {
    path: "/admin/category/:id",
    name: "EditCategory",
    component: EditCategory
  },
  {
    path: "/admin/product/add",
    name: "AddProduct",
    component: AddProduct,
  },
  {
    path: "/admin/product",
    name: "AdminProduct",
    component: Product,
  },
  {
    path: "/admin/product/:id",
    name: "EditProduct",
    component: EditProduct,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
