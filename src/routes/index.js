// import AdminPage from "../pages/AdminPage/AdminPage";
// import DetailsOrderPage from "../pages/DetailsOrderPage/DetailsOrderPage";
import ForgetPass from "../pages/ForgetPass/ForgetPass";
import HomePage from "../pages/HomePage/HomePage";
// import MyOrderPage from "../pages/MyOrder/MyOrder";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
// import OrderSucess from "../pages/OrderSuccess/OrderSuccess";
// import PaymentPage from "../pages/PaymentPage/PaymentPage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
// import ProfilePage from "../pages/Profile/ProfilePage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";

export const routes = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "/order",
    page: OrderPage,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "/products",
    page: ProductsPage,
    isShowHeader: true,
    isShowFooter: true,
  },
  // {
  //     path: '/my-order',
  //     page: MyOrderPage,
  //     isShowHeader: true
  // },
  // {
  //     path: '/details-order/:id',
  //     page: DetailsOrderPage,
  //     isShowHeader: true
  // },
  // {
  //     path: '/payment',
  //     page: PaymentPage,
  //     isShowHeader: true
  // },
  // {
  //     path: '/orderSuccess',
  //     page: OrderSucess,
  //     isShowHeader: true
  // },
  {
    path: "/:type",
    page: TypeProductPage,
    isShowHeader: true,
  },
  {
    path: "/sign-in",
    page: SignInPage,
    isShowHeader: false,
  },
  {
    path: "/sign-up",
    page: SignUpPage,
    isShowHeader: false,
  },
  {
    path: "/forget-pass",
    page: ForgetPass,
    isShowHeader: false,
  },
  {
    path: "/product-details",
    page: ProductDetailPage,
    isShowHeader: true,
  },
  // {
  //     path: '/profile-user',
  //     page: ProfilePage,
  //     isShowHeader: true
  // },
  // {
  //     path: '/system/admin',
  //     page: AdminPage,
  //     isShowHeader: false,
  //     isPrivated: true
  // },
  {
    path: "*",
    page: NotFoundPage,
  },
];
