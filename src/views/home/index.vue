<template>
  <div>
    <!-- 首页 -->
    <van-nav-bar fixed title="首页"/>
    <!-- /首页 -->

    <!-- 频道标签 -->
    <van-tabs class="channel-tabs" v-model="activeChannelIndex">
      <van-tab title="标签1">
        <!--
          下拉刷新组件
          isLoading 控制下拉的 loading 状态
          refresh 下拉之后触发的事件
         -->
        <van-pull-refresh v-model="pullRefreshLoading" @refresh="onRefresh">
          <!--
            下拉刷新组件
            isLoading 控制下拉的 loading 状态
            refresh 下拉之后触发的事件
           -->
            <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad"
            >
            <!--
              列表中的内容
            -->
            <van-cell
              v-for="item in list"
              :key="item"
              :title="item"
            />
          </van-list>
        </van-pull-refresh>
      </van-tab>
      <van-tab title="标签2"></van-tab>
      <van-tab title="标签3"></van-tab>
      <van-tab title="标签4"></van-tab>
      <van-tab title="标签5"></van-tab>
      <van-tab title="标签6"></van-tab>
      <van-tab title="标签7"></van-tab>
      <van-tab title="标签8"></van-tab>
    </van-tabs>
    <!-- /频道标签 -->
    <!-- 底部导航 -->
    <van-tabbar route>
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="qa" icon="search">问答</van-tabbar-item>
      <van-tabbar-item to="video" icon="friends-o">视频</van-tabbar-item>
      <van-tabbar-item to="my" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
    <!-- /底部导航 -->
  </div>
</template>

<script>
export default {
  name: 'HomeIndex',
  data () {
    return {
      activeChannelIndex: 0,
      list: [],
      loading: false,
      finished: false,
      pullRefreshLoading: false
    }
  },

  created () {},

  methods: {
    onLoad () {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 500)
    },

    onRefresh () {
      setTimeout(() => {
        this.pullRefreshLoading = false
      }, 3000)
    }
  }
}
</script>

<style lang="less" scoped>
.channel-tabs {
  margin-bottom: 100px;
}
// /deep/ 的作用（深度作用选择器）
// 参考文档：https://vue-loader.vuejs.org/zh/guide/scoped-css.html#%E6%B7%B1%E5%BA%A6%E4%BD%9C%E7%94%A8%E9%80%89%E6%8B%A9%E5%99%A8
// 注意：你在页面上测量的是设备像素，我们的样式规则转换是基于 75 进行转换的，所以在这里写的时候都 * 2
.channel-tabs /deep/ .van-tabs__wrap {
  position: fixed;
  top: 92px;
}
.channel-tabs /deep/ .van-tabs__content {
  margin-top: 92px;
}
</style>
