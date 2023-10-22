import { authActions } from "..";
import { store } from "..";
import Cookies, { getCookie } from 'cookies-next';
import cookies from "browser-cookies"
export const fetchWrapper = {
  get: request("GET"),
  post: request("POST"),
  put: request("PUT"),
  delete: request("DELETE"),
};

function request(method: any) {
  return (url: any, body: any) => {
    const requestOptions : any = {
      method,
      headers: authHeader(url),
    };
    if (body) {
      console.log(cookies.get('user-ip'))
      requestOptions.headers["Content-Type"] = "application/json";
      requestOptions.headers["lang"] = "en";
      requestOptions.headers["device_token"] = getCookie('user-ip');
      requestOptions.body = JSON.stringify(body);
    }
    return fetch(url, requestOptions).then(handleResponse);
  };
}

// helper functions

function authHeader(url: any) {
  // return auth header with jwt if user is logged in and request is to the api url
  const token = authToken();
  const isLoggedIn = !!token;
  const isApiUrl = url.startsWith(process.env.NEXT_PUBLIC_API_URL);
  if (isLoggedIn && isApiUrl) {
    return { Authorization: `Bearer ${token}` };
  } else {
    return {};
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
