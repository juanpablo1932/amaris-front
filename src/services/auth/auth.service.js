import {jwtDecode} from "jwt-decode";
import {setItem, removeItem} from "../localStorage";

export function isLoggedIn() {
  const token = localStorage.getItem("token");
  return !token || isTokenExpired(token) ? false : true;
}
export function isTokenExpired(token) {
  const decoded = jwtDecode(token);
  const expirationDate = decoded.exp * 1000;
  return Date.now() > expirationDate;
}

export const loginService = async (token) => {
  let response = await fetch(import.meta.env.VITE_API_HOST + "/analytics/back/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  if (!response.ok) throw new Error("Unauthorized");
  response = await response.json();
  localStorage.setItem("token", response.data.access_token);
  localStorage.setItem("refreshToken", response.data.refresh_token);
  setItem("user", response.data.user);
  return true;
};

export const logout = async () => {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
  removeItem("user");
};
