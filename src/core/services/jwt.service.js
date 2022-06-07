const ID_TOKEN_KEY = "id_token";

export const getToken = () => {
  return window.localStorage.getItem(ID_TOKEN_KEY);
};

export const saveToken = (token) => {
  // let d = new Date();
  // d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
  // let expires = "expires=" + d.toUTCString();
  // this.$cookie.set("user_token", token, expires);
  window.localStorage.setItem(ID_TOKEN_KEY, token);
};

export const destroyToken = () => {
  window.localStorage.removeItem(ID_TOKEN_KEY);
};

export default { getToken, saveToken, destroyToken };
