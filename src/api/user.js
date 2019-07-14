/**
 * 用户相关接口封装模块
 * 最佳实践：建议将所有的请求都封装装成一个一个的小函数，在需要的时候直接调用
 * 好处：1. 好维护，同一管理，2. 可重用
 * 遵循一个原则：不要直接在组件中发请求，都封装成函数进行调用
 */
import request from '@/utils/request'

export const login = ({ mobile, code }) => {
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
 * 拉黑用户（添加黑名单）
 */
export const addBlacklist = userId => {
	return request({
		method: 'POST',
		url: '/app/v1_0/user/blacklists',
		data: {
			target: userId
		}
	})
}
