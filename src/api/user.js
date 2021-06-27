import request from '@/utils/request'

/**
 *
 * @param {*} data
 * @returns 登录接口
 */
export function login(data) {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

export function getInfo(token) {
}

export function logout() {
}
