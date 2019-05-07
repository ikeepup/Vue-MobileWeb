import Vue from 'vue'
import Router from 'vue-router'

import GoodsInfo from '../components/goods/GoodsInfo.vue'
import GoodsDesc from '../components/goods/GoodsDesc.vue'
import HomeContainer from '../components/tabbar/HomeContainer.vue'
import MemberContainer from '../components/tabbar/MemberContainer.vue'
import ShopcarContainer from '../components/tabbar/ShopcarContainer.vue'
import SearchContainer from '../components/tabbar/SearchContainer.vue'
import Photolist from '../components/photo/Photolist.vue'
import NewsList from '../components/news/newsList.vue'
import NewsInfo from '../components/news/newsInfo.vue'
import GoodsList from '../components/goods/goodsList.vue'
import Comment from '../components/share/comment.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'mui-active',
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopcarContainer },
    { path: '/search', component: SearchContainer },
    { path: '/home/goodslist', component: GoodsList },
    { path: '/home/goodsinfo/:id', component: GoodsInfo, props: true },
    { path: '/home/goodsdesc/:id', component: GoodsDesc, props: true },
    { path: '/home/newslist', component: NewsList },
    { path: '/home/newsinfo/:id', component: NewsInfo, props: true },
    { path: '/home/photolist', component: Photolist },
    { path: '/home/comment/:id', component: Comment, props: true }
  ]
})
