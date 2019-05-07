import Vue from 'vue'
import Router from 'vue-router'

import HomeContainer from '../components/tabbar/HomeContainer.vue'
import MemberContainer from '../components/tabbar/MemberContainer.vue'
import ShopcarContainer from '../components/tabbar/ShopcarContainer.vue'
import SearchContainer from '../components/tabbar/SearchContainer.vue'
import Photolist from '../components/photo/Photolist.vue'
import Photoinfo from '../components/photo/Photoinfo.vue'
import NewsList from '../components/news/newsList.vue'
import NewsInfo from '../components/news/newsInfo.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'mui-active',
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopcarContainer },
    { path: '/search', component: SearchContainer },
    { path: '/home/newslist', component: NewsList },
    { path: '/home/newsinfo/:id', component: NewsInfo, props: true },
    { path: '/home/photolist', component: Photolist },
    { path: '/home/photoinfo/:id', component: Photoinfo, porp: true }
  ]
})
