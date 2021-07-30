import { serializeProductList } from "./../serializeProductList";
import { serializeSingleProduct } from "./../serializeProductList";

const Api = {
  baseUrl: "https://fakestoreapi.com/",

  getData: (url, params, method = "get") => {
    return fetch(Api.baseUrl + url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }).then((resp) => {
      if (!resp.ok) {
        resp.text().then((text) => {
          throw Error(text);
        });
      } else {
        return resp.json();
      }
    });
  },

  getProductList: function (url) {
    return Api.getData(url)
      .then((json) => {
        console.log(json);
        return serializeProductList(json);
      })
      .catch((err) => {
        console.log("Caught it: ", err);
      });
  },

  getSingleItem: (id) => {
    return Api.getData("products/" + id)
      .then((el) => {
        console.log(el);
        return serializeSingleProduct(el);
      })
      .catch((err) => {
        console.log("Caught it: ", err);
      });
  },

  signInApi: (email, password) => {
    return fetch("http://159.65.126.180/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((resp) => {
      if (!resp.ok) {
        resp.text().then((text) => {
          throw Error(text);
        });
      } else {
        return resp.json();
      }
    });
  },
  signUpApi: (name, email, password, password_confirmation) => {
    console.log(name, email, password, password_confirmation);
    return fetch("http://159.65.126.180/api/register", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        password_confirmation: password_confirmation,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  },

  getFilteredList: (limit) => {
    return Api.getData("products?limit=" + limit)
      .then((json) => {
        console.log(json);
        return serializeProductList(json);
      })
      .catch((err) => {
        console.log("Caught it: ", err);
      });
  },

  getPages: (p) => {
    return Api.getData("products?page=" + p)
      .then((json) => {
        console.log(json);
        return serializeProductList(json);
      })
      .catch((err) => {
        console.log("Caught it: ", err);
      });
  },
};

export default Api;
