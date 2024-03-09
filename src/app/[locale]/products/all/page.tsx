import React from 'react'
import axiosInstance from '../../lib/axios';

export async function getAllProducts() {
  await axiosInstance.get(`products/widget_id=4`);
}
const Page = async () => {
  const products = await getAllProducts();
  console.log(products)
  return (
    <div>page</div>
  )
}

export default Page;