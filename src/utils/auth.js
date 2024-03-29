import Cookies from 'js-cookie'

const TokenKey = 'hrsaas-ihrm-token' // 设置独一无二的token值

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
