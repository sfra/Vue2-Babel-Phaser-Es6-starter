import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const PageHome = () => import(/* webpack-chunk-name: "PageHome" */ `./components/page/PageHome.vue`);
const PageArticle = () => import(/* webpack-chunk-name: "PageArticle" */ `./components/page/PageArticle.vue`);
const PageList = () => import(/* webpack-chunk-name: "PageList" */ `./components/page/PageList.vue`);

const PageGamePlay = () => import(/* webpack-chunk-name: "PageList" */ `./components/page/PageGameplay.vue`);

export default new VueRouter({
  routes: [
    {
      name: `home`,
      path: `/`,
      component: PageHome,
    },
    {
      name: `article`,
      path: `/article`,
      component: PageArticle,
    },
    {
      name: `list`,
      path: `/list`,
      component: PageList,
    },

    {
      name: `gameplay`,
      path: `/gameplay`,
      component: PageGamePlay,
    },
  ],
  mode: `history`,
});
