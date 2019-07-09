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
          required
          clearable
          focus
          :border="true"
          label="用户名"
          placeholder="请输入手机号"
          :error-message="errors.mobile"
          @click-right-icon="$toast('question')"
        />

        <van-field
          v-model="user.code"
          :border="true"
          type="password"
          label="验证码"
          placeholder="请输入验证码"
          :error-message="errors.code"
          required
        />
      </van-cell-group>
      <!-- 按钮登录 -->
      <div class="login-btn-box">
        <van-button
          type="info"
          class="login-btn"
          :loading="loadingLogin"
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
        code: '123456'
      },
      errors: {
        mobile: '',
        code: ''
      },
      loadingLogin: false
    }
  },

  methods: {
    async handleLogin () {
      try {
        const { mobile, code } = this.user
        let errors = this.errors
        if (mobile.length) {
          errors.mobile = ''
        } else {
          errors.mobile = '手机号不能为空'
          return
        }

        if (code.length) {
          errors.code = ''
        } else {
          errors.code = '验证码不能为空'
          return
        }

        this.loadingLogin = true
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
      this.loadingLogin = false
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
