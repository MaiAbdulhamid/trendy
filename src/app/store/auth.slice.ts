"use client";
import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { history, fetchWrapper } from "./helpers";
import { setCookie } from "cookies-next";
import cache from "@mongez/cache";

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
    // user: JSON.parse(localStorage.getItem("user") as any),
    token: "",
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
    setCookie('token', '');
    cache.set('token', '');
    cache.set('country', '');
    setCookie("country", "")
  }
  return {
    logout,
  };
}

function createExtraActions() {

  function signup() {
    return createAsyncThunk(
      `${name}/signup`,
      async (keys: any) =>
        await fetchWrapper.post(`register`, {
          ...keys,
        })
    );
  }

  function login() {
    return createAsyncThunk(
      `${name}/login`,
      async ({ key, password, type }: any) => {
        await fetchWrapper.post(`login`, {
          key,
          password,
          type,
        });
      },

    );
  }

  function forgotPassword() {
    return createAsyncThunk(
      `${name}/forget-password`,
      async ({ email }: any) =>
        await fetchWrapper.post(`check-email`, {
          email,
        })
    );
  }

  function verifyEmail() {
    return createAsyncThunk(
      `${name}/verify-email`,
      async ({ code }: any) => {
        const email = JSON.parse(localStorage.getItem("email") as any);

        await fetchWrapper.post(`activate-account`, {
          email,
          code
        })
      }
    );
  }

  function newPassword() {
    return createAsyncThunk(
      `${name}/new-password`,
      async ({ new_password }: any) => {
        const email = JSON.parse(localStorage.getItem("email") as any);

        await fetchWrapper.post(`change-forget-password`, {
          email,
          new_password
        })
      }
    );
  }


  return {
    signup: signup(),
    login: login(),
    forgotPassword: forgotPassword(),
    verifyEmail: verifyEmail(),
    newPassword: newPassword(),
  };
}

function createExtraReducers() {
  function signup() {
    var { pending, fulfilled, rejected }: any = extraActions.signup;
    return {
      [pending]: (state: any) => {
        state.error = null;
      },
      [fulfilled]: (state: any, action: any) => {
        const user = action.payload?.data;
        const token = action.payload?.data.jwt_token;

        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem("email", JSON.stringify(user.email));
        setCookie("token", JSON.stringify(token));
        localStorage.setItem("user", JSON.stringify(user));

        state.user = user;
        state.token = token
      },
      [rejected]: (state: any, action: any) => {
        state.error = action.error;
      },
    };
  }
  function login() {
    var { pending, fulfilled, rejected }: any = extraActions.login;
    return {
      [pending]: (state: any) => {
        state.error = null;
      },
      [fulfilled]: (state: any, action: any) => {
        const user = action.payload?.data;
        const token = action.payload?.data?.jwt_token;

        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("email", JSON.stringify(user?.email));
        setCookie("token", JSON.stringify(token));

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
        localStorage.setItem("email", JSON.stringify(action.meta.arg.email));
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

      },
      [rejected]: (state: any, action: any) => {
        state.forgotPassword.error = action.error;
      },
    };
  }

  function newPassword() {
    var { pending, fulfilled, rejected }: any = extraActions.newPassword;
    return {
      [pending]: (state: any) => {
        state.forgotPassword.error = null;
      },
      [fulfilled]: (state: any, action: any) => {
        console.log(action)
      },
      [rejected]: (state: any, action: any) => {
        state.forgotPassword.error = action.error;
      },
    };
  }

  return {
    ...signup(),
    ...login(),
    ...forgotPassword(),
    ...verifyEmail(),
    ...newPassword()
  };
}
