import { serializeProductList } from "./../serializeProductList";
import { serializeSingleProduct } from "./../serializeProductList";

const Api = {
  baseUrl: "http://159.65.126.180/api/",

  getData: (url, params, method = "get", token) => {
    function objectToQueryString(obj) {
      return Object.keys(obj)
        .map((key) => key + "=" + obj[key])
        .join("&");
    }

    let options;
    if (token) {
      options = {
        method,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
    } else {
      options = {
        method,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };
    }
    method = method.toUpperCase();
    if (params) {
      if (method === "GET") {
        url += "?" + objectToQueryString(params);
      } else {
        options.body = JSON.stringify(params);
      }
    }
    return fetch(Api.baseUrl + url, options).then((resp) => {
      if (!resp.ok && token) {
        resp.text().then((text) => {
          localStorage.removeItem("token");
          throw Error(text);
        });
      } else {
        return resp.json();
      }
    });
  },

  getProductList: (url) => {
    return Api.getData(url).then((json) => {
      return serializeProductList(json.data);
    });
  },

  getSingleItem: (id) => {
    return Api.getData("products/" + id).then((el) => {
      return serializeSingleProduct(el);
    });
  },

  signInApi: (params) => {
    return Api.getData("auth/login", params, "POST", undefined);
  },
  signUpApi: (params) => {
    return Api.getData("register", params, "POST", undefined);
  },

  getFilteredList: (limit) => {
    return Api.getData("products?limit=" + limit).then((json) => {
      return serializeProductList(json.data);
    });
  },

  getPages: (p) => {
    return Api.getData("products?page=" + p).then((json) => {
      return serializeProductList(json.data);
    });
  },

  getMe: (token) => {
    return Api.getData("auth/me", undefined,'POST', token);
  },
};

export default Api;
