import events from "@mongez/events";
import Is from "@mongez/supportive-is";
import { cartItemAtom } from "../../shared/atoms/cart-atom";
import axiosInstance from "../../lib/axios";
import cache from "@mongez/cache";

export class CartManager {
  /**
   * Loaded Products
   */
  protected cart: any;

  /**
   * cart Widget
   */

  protected cartWidget: any;

  /**
   * Current loaded options
   */
  protected cartOptions = {};

  /**
   * Current loaded sellers
   */
  protected sellers: any;

  /**
   * Current loaded workTimes
   */
  protected workTimes: any;

  /**
   * Load cart products
   */
  public load(): Promise<any> {
    this.trigger("loading", true);

    return new Promise((resolve, reject) => {
      axiosInstance
        .get("/cart", { ...this.cartOptions })
        .then((response) => {
          // TODO: FIX FRONTend provider
          console.log(response);
          this.cart = response.data.data;
          this.cartWidget = response.data.widget;
          if (typeof window !== 'undefined') {
            cache.set('cartWidget', response.data.data.widget);
          }
          this.trigger("loading", false);

          cartItemAtom.update({
            cart: this.cart,
          } as any);

          resolve(this);
        })
        .catch((error) => {
          reject(error);
          this.trigger("loading", false);
        });
    });
  }

  public update(cart: any) {
    this.cart = cart;

    cartItemAtom.update({
      cart: this.cart,
    } as any);
  }

  /**
   * Add event to cart
   */
  public on(event: "loading" | "makingAction" | "update", callback: any) {
    return events.subscribe(`cart.${event}`, callback);
  }

  /**
   * Trigger cart event
   */
  public trigger(event: any, ...values: any) {
    return events.trigger(`cart.${event}`, ...values);
  }

  /**
   * Load cart with the given options
   */
  public loadWith(params: any) {
    this.cartOptions = { ...this.cartOptions, ...params };

    return this.load();
  }

  /**
   * Add Item to cart
   */
  public add(itemId: number, quantity: number, options: any): Promise<any> {
    return new Promise((resolve, reject) => {
      axiosInstance
        .post("cart/AddOrUpdate", {
          product_id: itemId,
          qty: quantity,
          variation_id: options,
        })
        .then((response) => {
          this.cart = response.data.data;

          cartItemAtom.update({
            cart: this.cart,
          } as any);

          resolve(this);
        })
        .catch(reject);
    });
  }

  /**
   * Delete Item from cart
   */
  public delete(cartId: number): Promise<any> {
    this.trigger("makingAction", true);

    return new Promise((resolve, reject) => {
      axiosInstance
        .delete(`cart/delete/${cartId}`)
        .then((response) => {
          this.cart = response.data.data; 

          cartItemAtom.update({
            cart: this.cart,
          } as any);

          this.trigger("makingAction", false);
          resolve(this);
        })
        .catch((error) => {
          reject(error);
          this.trigger("makingAction", false);
        });
    });
  }

  /**
   * Update item quantity
   */
  public updateQuantity(
    quantity: number,
    productId: number
  ) {
    this.trigger("makingAction", true);

    return new Promise((resolve, reject) => {
      axiosInstance
        .post("cart/AddOrUpdate", {
          qty: quantity,
          product_id: productId,
        })
        .then((response) => {
          // this.cart = response.data.data;

          // cartItemAtom.update({
          //   cart: this.cart,
          // } as any);

          this.trigger("makingAction", false);

          resolve(this);
        })
        .catch((error) => {
          reject(error);
          this.trigger("makingAction", false);
        });
    });
  }

  /**
   * Clear cart
   */
  // public flush(): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     flushCart()
  //       .then(() => {
  //         this.cart = null;

  //         resolve(this);
  //       })
  //       .catch(reject);
  //   });
  // }

  public get items(): any[] {
    return this.cart?.items || [];
  }

  public get count(): number {
    return this.items.length;
  }

  public get finalPrice(): any {
    return this.cart?.finalPrice || "";
  }

  /**
   * Determine if current cart is empty
   */
  public isEmpty(): boolean {
    return this.cart.items.length === 0;
  }

  /**
   * Determine if cart has coupon
   */
  public hasCoupon(): boolean {
    return !Is.empty(this.cart?.coupon);
  }

  /**
   * Determine if current cart is not empty
   */
  public isNotEmpty(): boolean {
    return this.items.length > 0;
  }

  /**
   * Add coupon to cart
   */
  public addCoupon(couponCode: string) {
    this.trigger("makingAction", true);

    return new Promise((resolve, reject) => {
      axiosInstance
        .post("promo/apply", { promo_code: couponCode })
        .then((response) => {
          this.cart = response.data.cart;

          cartItemAtom.update({
            cart: this.cart,
          } as any);

          this.trigger("makingAction", false);

          resolve(this);
        })
        .catch((error) => {
          reject(error);

          this.trigger("makingAction", false);
        });
    });
  }

  /**
   * Remove coupon
   */
  public removeCoupon() {
    return this.addCoupon("");
  }

  public get atom() {
    const atomCart = cartItemAtom.useValue().cart;
    return {
      cartItemId: atomCart?.cart_item,
      items: atomCart?.data,
      widget: atomCart?.widget,
      count: atomCart?.count,
      isEmpty: Is.empty(atomCart?.data),
    };
  }
}

const cart: CartManager = new CartManager();

export default cart;
