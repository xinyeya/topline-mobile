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

/**
 * 获取用户自己的信息
 */
export const getMyInfo = () => {
  return request({
    method: 'GET',
    url: `/app/v1_0/user`
  })
}

/**
 * 获取用于编辑的用户信息
 */
export const getUserProfile = () => {
  return request({
    method: 'GET',
    url: `/app/v1_0/user/profile`
  })
}

/**
 * 获取用于编辑的用户信息
 */
export const updateUserProfile = ({
  name = null,
  photo = null,
  gender = null,
  birthday = null,
  realName = null,
  idNumber = null,
  idCardFront = null,
  idCardBack = null,
  idCardHandheld = null,
  intro = null
}) => {
  return request({
    method: 'PATCH',
    url: `/app/v1_0/user/profile`,
    data: {
      name,
      photo,
      gender,
      birthday,
      real_name: realName,
      id_number: idNumber,
      id_card_front: idCardFront,
      id_card_back: idCardBack,
      id_card_handheld: idCardHandheld,
      intro
    }
  })
}

/**
 * 更新用户头像|身份证照片
 */
export const updateUserProfilePhoto = formData => {
  return request({
    method: 'PATCH',
    url: `/app/v1_0/user/photo`,
    // Content-Type 为 multipart/form-data 需要传递 FormData
    data: formData

    // 注意：对象只适用于 Content-Type 为 application/json 的数据格式
    // data: {
    //   photo,
    //   id_card_front: idCardFront,
    //   id_card_back: idCardBack,
    //   id_card_handheld: idCardHandheld
    // }
  })
}
