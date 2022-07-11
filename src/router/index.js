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
import Success from "../views/payment/Success";
import Failed from "../views/payment/Failed";
import Checkout from "../views/checkout/CheckOut";
import OrderHistory from "../views/order/OrderHistory";
import OrderDetails from "../views/order/OrderDetails";

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

  {
    path: '/payment/success',
    name: 'PaymentSuccess',
    component:Success
  },
  {
    path: '/payment/failed',
    name: 'FailedPayment',
    component:Failed
  },
  {
    path : '/checkout',
    name : 'CheckOut',
    component : Checkout
  },
  {
    path: '/orders',
    name: 'OrderHistory',
    component: OrderHistory
  },
  {
    path:'/order/:id',
    name:'OrderDetails',
    component: OrderDetails
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router