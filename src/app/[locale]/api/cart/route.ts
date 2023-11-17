import { showNotification } from "../../components/Notifications/showNotification";
import axiosInstance from "../../lib/axios";

export default async function POST(req: any, res: any) {
  // Extract productId, variationId, and quantity from the request body
  const { product_id, variation_id, qty } = req.body;

  // Perform logic to add to the cart in your backend, considering variations
  axiosInstance
    .post("cart/AddOrUpdate", { product_id, variation_id, qty })
    .then((response) => {
      showNotification({
        type: "success",
        message: response.data.message,
      });
    })
    .catch((error) => {
      showNotification({
        type: "danger",
        message: error.response.data.message,
      });
    });

  // Return the updated cart data
  res.status(200).json({ success: true, message: "Item added to cart" });
}
