<template>
  <div class="article-warp">
    <AuthInfo />
    <CommentList />
    <MoreAction />
    <RecommendArticle />
    <RecommendSearch />
    <ReplyList />
    <WriteComment />
  </div>
</template>

<script>
import AuthInfo from './components/auth-info'
import CommentList from './components/comment-list'
import MoreAction from './components/more-action'
import RecommendArticle from './components/recommend-article'
import RecommentSearch from './components/recommend-search'
import ReplyList from './components/reply-list'
import WriteComment from './components/write-comment'

export default {
  name: '',
  components: {
  	AuthInfo,
    CommentList,
    MoreAction,
    RecommendArticle,
    RecommendSearch,
    ReplyList,
    WriteComment
  },
  data () {
    return {}
  },

  created () {},

  computed: {},

  methods: {}
}
</script>

<style lang="less" scoped>
</style>
