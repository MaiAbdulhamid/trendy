"use client";
import { getCookie } from "cookies-next";
import axiosInstance from "../lib/axios";

export const getCountry: any = async () => {
  const getCountries = async () => {
    const response = await axiosInstance.get("countries");
    return response.data.data.data;
  };
  const countries = await getCountries();
  return countries?.find((c: any) => {
    return c.id == getCookie("country");
  });
};
