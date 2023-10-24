import { authActions } from "..";
import { store } from "..";
import { getCookie } from "cookies-next";

export const fetchWrapper = {
  get: request("GET"),
  post: request("POST"),
  put: request("PUT"),
  delete: request("DELETE"),
};

function request(method: any) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  return (url: any, body: any) => {
    const fullUrl = `${baseUrl + url}`
    const requestOptions: any = {
      method,
      headers: authHeader(fullUrl),
    };
    if (body) {
      requestOptions.headers["Content-Type"] = "application/json";
      requestOptions.body = JSON.stringify(body);
    }
    return fetch(fullUrl, requestOptions).then(handleResponse);
  };
}

// helper functions

function authHeader(url: any) {
  // return auth header with jwt if user is logged in and request is to the api url
  const token = authToken();
  const isLoggedIn = !!token;
  const isApiUrl = url.startsWith(process.env.NEXT_PUBLIC_API_URL);
  if (isLoggedIn && isApiUrl) {
    return {
      Authorization: `Bearer ${token}`,
      lang: "en",
      device_token: getCookie("user-ip"),
    };
  } else {
    return {
      lang: "en",
      device_token: getCookie("user-ip"),
    };
  }
}

function authToken() {
  return store.getState().auth?.token;
}

function handleResponse(response: any) {
  return response.text().then((text: any) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      if ([401, 403].includes(response.status) && authToken()) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        const logout = () => store.dispatch(authActions.logout());
        logout();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
