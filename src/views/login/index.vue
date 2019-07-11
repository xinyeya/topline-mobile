<template>
  <div class="login-warp">
    <!-- 标题 -->
    <van-nav-bar title="标题"/>
    <!-- /标题 -->

    <!-- 登录 -->
    <form>
      <van-cell-group>
        <van-field
          v-model="user.mobile"
          clearable
          focus
          :border="true"
          label="用户名"
          placeholder="请输入手机号"
          v-validate="'required'"
          name="mobile"
          :error-message="errors.first('mobile')"
        />

        <van-field
          v-model="user.code"
          type="password"
          label="密码"
          v-validate="'required'"
          name="code"
          placeholder="请输入密码"
          :error-message="errors.first('code')"
        />
      </van-cell-group>
      <!-- 按钮登录 -->
      <div class="login-btn-box">
        <van-button
          type="info"
          class="login-btn"
          :loading="loginLoading"
          loading-text="登录中..."
          @click.prevent="handleLogin"
        >登录</van-button>
      </div>
      <!-- /按钮登录 -->
    </form>
    <!-- /登录 -->
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '13241993754',
        code: '246810'
      },
      myErrors: {
        mobile: '',
        code: ''
      },
      loginLoading: false
    }
  },

  created () {
    this.configFormErrorMessages()
  },

  methods: {
    async handleLogin () {
      try {
        // 调用 JavaScript 触发验证
        let valid = await this.$validator.validate()
        console.log(valid)

        // 如果校验失败，则停止后续代码执行
        if (!valid) {
          return
        }

        // 表单通过验证，发送请求，loading 加载
        this.loginLoading = true

        let data = await login(this.user)
        this.$store.commit('setUser', data)
        /**
         * 这里先简单粗暴的跳转到首页
         * 真实的业务要处理跳转到之前过来的页面
         */
        this.$router.push({
          name: 'home'
        })
      } catch (err) {
        console.log(err)
        console.log('登录失败')
      }
      this.loginLoading = false
    },

    // 错误消息提示
    configFormErrorMessages () {
      const dict = {
        custom: {
          mobile: {
            required: '手机号不能为空'
          },
          code: {
            required: '密码不能为空'
          }
        }
      }

      // 如果需要错误消息提示全局失效
      // Validator.localize('en', dict)

      // 组件中这也注册失效
      // or use the instance method
      this.$validator.localize('zh-CN', dict)
    }
  }
}
</script>

<style lang="less" scoped>
.login-btn-box {
  padding: 20px;
  .login-btn {
    width: 100%;
  }
}
</style>
