const URLS = {
  home: "/",
  auth: {
    auth: "/auth",
    login: "?mode=login",
    signup: "?mode=signup",
    forgotPassword: "/forgot-password",
    verificationCode: "/verification-code",
    registerVerifyCode: "/register-verify-code",
    resetPassword: "/reset-password",
  },
  account: {
    dashboard: "/account",
    wishlist: "/wishlist",
    cart: "/cart",
    resetPassword: "/reset-password",
    editProfile: "/profile",
    orders: "/orders",
    addressBook: "/addresses",
    wallet: "/wallet"
  },
  category: {
    dashboard: "/category"
  },
  deals: "/deals",
  products: "/products",
  viewProduct: (product: any) => `/products/${product.id}`,
  orders: "/orders",
  viewOrder: (order: any) => `/orders/${order.id}`,
  categories: "/categories",
  about: "/about-us",
  privacyPolicy: "/privacy-policy",
  returnPolicy: "/return-policy",
  termsAndConditions: "/terms-and-conditions",
  contactUs:"/contact-us",
  shareApp: "/share-app",
  faq:"/faq",
  country: "/country",
  checkout: "/checkout",
  addAddress: "/addresses/add-address",
  notFound: "/404",
};

export default URLS;
