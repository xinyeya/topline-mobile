<template>
  <div>
    <!-- 头部导航 -->
    <van-nav-bar
      title="黑马头条"
      left-text="返回"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- /头部导航 -->

    <div class="article">
      <!-- 文章标题 -->
      <h2 class="article-title">{{ article.title }}</h2>
      <!-- /文章标题 -->

      <!-- 作者信息 -->
      <AuthInfo :article="article" />
      <!-- /作者信息 -->

      <!-- 文章内容 -->
      <div class="article-content" v-html="article.content"></div>
      <!-- /文章内容 -->

      <!-- 更多操作 -->
      <more-action :article="article" />
      <!-- /更多操作 -->

      <!-- 评论列表 -->
      <comment-list :source="articleId"/>
      <!-- /评论列表 -->

      <!-- 回复列表 -->
      <reply-list :article-id="articleId" />
      <!-- 回复列表 -->

      <!-- 发布文章评论 -->
      <add-comment class="add-comment" :target="articleId" :article="article"/>
      <!-- /发布文章评论 -->
    </div>
  </div>
</template>

<script>
import AuthInfo from './components/auth-info'
import MoreAction from './components/more-action'
import { getArticleDetail } from '@/api/article'
import CommentList from './components/comment-list'
import ReplyList from './components/reply-list'
import AddComment from './components/add-comment'

export default {
  name: 'ArticleIndex',
  components: {
    AuthInfo,
    MoreAction,
    CommentList,
    ReplyList,
    AddComment
  },

  data () {
    return {
      article: {
        // art_id: 12345,
        // attitude: 0,
        // aut_id: 1,
        // aut_name: '森龙',
        // aut_photo: 'http://toutiao.meiduo.site/Fn6-mrb5zLTZIRG3yH3jG8HrURdU',
        // ch_id: 6,
        // content: '<p>xxxxxxxxxxxxxxxxxxxxxx</p>',
        // is_collected: false,
        // is_followed: true,
        // pubdate: '2019-07-16T18:16:38',
        // recomments: [],
        // title: '11111111xxxxxxxxxxx'
      }
    }
  },

  computed: {
    articleId () {
      return this.$route.params.articleId
    }
  },

  created () {
    this.loadArticle()
  },

  methods: {
    async loadArticle () {
      const toast = this.$toast.loading({
        duration: 0, // 配置为 0 表示持续展示 loading
        mask: false, // 是否展示遮罩
        forbidClick: true, // 禁用背景点击
        message: '加载中...'
      })
      try {
        const data = await getArticleDetail(this.$route.params.articleId)
        this.article = data
      } catch (err) {
        this.$toast.fail('加载失败')
      }
      toast.clear()
    }
  }
}
</script>

<style lang="less" scoped>
.article {
  padding: 20px;
  .article-title {
    font-size: 40px;
    font-weight: 400;
  }
  .article-content {
    font-size: 26px;
  }
}

.add-comment {
  position: fixed;
  left: 0;
  bottom: 0;
}
</style>
