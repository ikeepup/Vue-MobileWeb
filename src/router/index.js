import Vue from "vue";
import Router from "vue-router";

import HomeContainer from '../components/tabbar/HomeContainer.vue'
import MemberContainer from '../components/tabbar/MemberContainer.vue'
import ShopcarContainer from '../components/tabbar/ShopcarContainer.vue'
import SearchContainer from '../components/tabbar/SearchContainer.vue'
<<<<<<< HEAD
import GoodsList from '../components/goods/GoodsList.vue'
import GoodsDesc from '../components/goods/goodsDesc.vue'
=======
import Photolist from "../components/photo/Photolist.vue";
import NewsList from '../components/news/newsList.vue'
import NewsInfo from '../components/news/newsInfo.vue'
>>>>>>> e7108ebc20d461fd1a53bc67de1491213fdb7338

Vue.use(Router);

export default new Router({
  linkActiveClass: "mui-active",
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopcarContainer },
    { path: '/search', component: SearchContainer },
    { path: '/home/goodslist', component: GoodsList },
    { path: '/home/goodsdesc/:id', component: GoodsDesc },
    { path: '/home/newslist', component: NewsList },
    { path: '/home/newsinfo/:id', component: NewsInfo, props: true },
    { path: "/home/photolist", component: Photolist }
  ]
});
