import Vue from 'vue'
import Router from 'vue-router'

import HomeContainer from '../components/tabbar/HomeContainer.vue'
import MemberContainer from '../components/tabbar/MemberContainer.vue'
import ShopcarContainer from '../components/tabbar/ShopcarContainer.vue'
import SearchContainer from '../components/tabbar/SearchContainer.vue'
import GoodsList from '../components/goods/GoodsList.vue'
import GoodsDesc from '../components/goods/goodsDesc.vue'

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
    { path: '/home/goodsdesc/:id', component: GoodsDesc },
  ]
})
