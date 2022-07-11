import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView'
import AddCategory from "../views/category/AddCategory";
import Category from "../views/category/Category";
import EditCategory from "../views/category/EditCategory";
import AddProduct from "../views/product/AddProduct";
import Product from "../views/product/Product";
import EditProduct from "../views/product/EditProduct";
import ShowDetails from "../views/product/ShowDetail";
import SignUp from "../views/SignUp";
import SignIn from "../views/SignIn";
import WishList from "../views/product/WishList";
import CartView from "../views/cart/Cart";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
    component: EditCategory,
  },
  {
    path: "/admin/product/add",
    name: "AddProduct",
    component: AddProduct,
  },
  {
    path: "/admin/product",
    name: "AdminProduct",
    component: Product
  },
  {
    path: "/admin/product/:id",
    name: "EditProduct",
    component: EditProduct,
  },
  {
    path : '/product/show/:id',
    name : 'ShowDetails',
    component: ShowDetails
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/wishlist',
    name: 'WishList',
    component: WishList
  },
  {
    path : '/cart',
    name : 'Cart',
    component : CartView
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router