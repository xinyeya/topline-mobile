/**
 * 封装用户相关接口请求函数
 */

import request from '@/utils/request'

/**
 * 用户登录
 */
export const login = ({ mobile, code }) => {
  // 指向其他逻辑
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data: {
      mobile,
      code
    }
  })
}

/**
 * 拉黑用户（加入黑名单）
 */
export const addBlacklist = userId => {
  // 指向其他逻辑
  return request({
    method: 'POST',
    url: '/app/v1_0/user/blacklists',
    data: {
      target: userId
    }
  })
}

/**
 * 关注用户
 */
export const followUser = userId => {
  // 指向其他逻辑
  return request({
    method: 'POST',
    url: '/app/v1_0/user/followings',
    data: {
      target: userId
    }
  })
}

/**
 * 取消关注用户
 */
export const unFollowUser = userId => {
  return request({
    method: 'DELETE',
    url: `/app/v1_0/user/followings/${userId}`
  })
}

/**
 * 获取当前登录用户的个人信息
 */
export const getCurrentUserInfo = () => {
  return request({
    method: 'GET',
    url: `/app/v1_0/user`
  })
}

/**
 * 获取当前登录用户的基本信息
 */
export const getCurrentUserProfile = () => {
  return request({
    method: 'GET',
    url: `/app/v1_0/user/profile`
  })
}
