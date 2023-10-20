"use client";
import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

import { history, fetchWrapper } from "./helpers";

// create slice

const name = "auth";
const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();

// exports
export const authSlice = createSlice({
  name,
  initialState,
  reducers,
  extraReducers,
});
export const authActions = { ...authSlice.actions, ...extraActions };
const authReducer = authSlice.reducer;
export default authReducer;

// implementation

function createInitialState() {
  return {
    // initialize state from local storage to enable user to stay logged in
    user: JSON.parse(localStorage.getItem("user") as any),
    error: null,
    forgotPassword: {
      email: "",
      code: "",
      error: null
    },
  };
}

function createReducers() {
  function logout(state: any) {
    state.user = null;
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    history.navigate("/login");
  }
  return {
    logout,
  };
}

function createExtraActions() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  function login() {
    return createAsyncThunk(
      `${name}/login`,
      async ({ key, password, type }: any) =>
        await fetchWrapper.post(`${baseUrl}login`, {
          key,
          password,
          type,
        })
    );
  }

  function forgotPassword() {
    return createAsyncThunk(
      `${name}/forget-password`,
      async ({ email }: any) =>
        await fetchWrapper.post(`${baseUrl}check-email`, {
          email,
        })
    );
  }

  function verifyEmail() {
    return createAsyncThunk(
      `${name}/verify-email`,
      async ({ email, code }: any) =>
        await fetchWrapper.post(`${baseUrl}activate-account`, {
          email,
          code
        })
    );
  }
  return {
    login: login(),
    forgotPassword: forgotPassword(),
    verifyEmail: verifyEmail()
  };
}

function createExtraReducers() {
  function login() {
    var { pending, fulfilled, rejected }: any = extraActions.login;
    return {
      [pending]: (state: any) => {
        state.error = null;
      },
      [fulfilled]: (state: any, action: any) => {
        const user = action.payload.data;
        const token = action.payload.data.jwt_token;
        console.log(current(state))

        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", JSON.stringify(token));

        state.user = user;
      },
      [rejected]: (state: any, action: any) => {
        state.error = action.error;
      },
    };
  }

  function forgotPassword() {
    var { pending, fulfilled, rejected }: any = extraActions.forgotPassword;
    return {
      [pending]: (state: any) => {
        state.forgotPassword.error = null;
      },
      [fulfilled]: (state: any, action: any) => {
        state.forgotPassword.email = action.meta.arg.email;
        console.log(action)
        console.log(state)

      },
      [rejected]: (state: any, action: any) => {
        state.forgotPassword.error = action.error;
      },
    };
  }
  function verifyEmail() {
    var { pending, fulfilled, rejected }: any = extraActions.verifyEmail;
    return {
      [pending]: (state: any) => {
        state.forgotPassword.error = null;
      },
      [fulfilled]: (state: any, action: any) => {
        state.forgotPassword.code = action.code;
        console.log(state)

      },
      [rejected]: (state: any, action: any) => {
        state.forgotPassword.error = action.error;
      },
    };
  }

  return {
    ...login(),
    ...forgotPassword(),
    ...verifyEmail()
  };
}
