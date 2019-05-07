import Vue from "vue";
import Router from "vue-router";

import GoodsInfo from '../components/goods/GoodsInfo.vue'
import GoodsDesc from '../components/goods/GoodsDesc.vue'
import HomeContainer from '../components/tabbar/HomeContainer.vue'
import MemberContainer from '../components/tabbar/MemberContainer.vue'
import ShopcarContainer from '../components/tabbar/ShopcarContainer.vue'
import SearchContainer from '../components/tabbar/SearchContainer.vue'
import Photolist from "../components/photo/Photolist.vue";
import NewsList from '../components/news/newsList.vue'
import NewsInfo from '../components/news/newsInfo.vue'

Vue.use(Router);

export default new Router({
  linkActiveClass: "mui-active",
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopcarContainer },
    { path: '/search', component: SearchContainer },
    { path: '/home/goodsinfo', component: GoodsInfo },
    { path: '/home/goodsdesc/:id', component: GoodsDesc, name: 'goodsdesc' },
    { path: '/home/newslist', component: NewsList },
    { path: '/home/newsinfo/:id', component: NewsInfo, props: true },
    { path: "/home/photolist", component: Photolist }

  ]
});
