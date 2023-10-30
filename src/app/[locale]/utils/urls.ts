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
  products: "/products",
  viewProduct: (product: any) => `/products/${product.id}/${product.slug}`,
  categories: "/categories",
  notFound: "/404",
};

export default URLS;
