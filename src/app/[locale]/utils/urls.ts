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
  },
  category: {
    dashboard: "/category"
  },
  deals: "/deals",
  products: "/products",
  viewProduct: (product: any) => `/products/${product.id}/${product.slug}`,
  categories: "/categories",
  about: "/about",
  privacyPolicy: "/privacy-policy",
  returnPolicy: "/return-policy",
  termsAndConditions: "/terms-and-conditions",
  contactUs:"/contact-us",
  shareApp: "/share-app",
  faq:"/faq",
  country: "/country",
  notFound: "/404",
};

export default URLS;
