import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../[locale]/lib/axios";

// create slice

const name = "products";
const initialState = createInitialState();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();

const slice = createSlice({
  name,
  initialState,
  reducers: {
    setMaxAndMinPrice(state, action) {
      state.minPrice = action.payload.min;
      state.maxPrice = action.payload.max;
      console.log(state.maxPrice);
    },
    filter(state, action) {
      if (action.payload.type === "price") {
        state.products = state.products.filter(
          (product: any) =>
            +product.price_after <= action.payload.payload.max &&
            +product.price_after >= action.payload.payload.min
        );
      }
    },
  },
  extraReducers,
});

// exports

export const productsActions = { ...slice.actions, ...extraActions };
const productsReducer = slice.reducer;
export default productsReducer;

// implementation

function createInitialState() {
  return {
    products: [],
    error: null,
    maxPrice: 0,
    minPrice: 0,
  };
}
function createExtraActions() {
  function getProducts() {
    return createAsyncThunk(
      `${name}/products`,
      async () => await axiosInstance.get("products")
    );
  }
  return {
    getProducts: getProducts(),
  };
}

function createExtraReducers() {
  function getProducts() {
    var { pending, fulfilled, rejected } = extraActions.getProducts;
    return {
      [pending as any]: (state: any) => {
        state.error = null;
      },
      [fulfilled as any]: (state: any, action: any) => {
        state.products = action.payload.data.data.data;
      },
      [rejected as any]: (state: any, action: any) => {
        state.error = action.error;
      },
    };
  }
  return {
    ...getProducts(),
  };
}
