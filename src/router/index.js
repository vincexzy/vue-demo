import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Detail from "@/components/Detail";
// import DetailAnaPage from "@/components/analysis";
import DetailAnaPage from "../components/analysis";
import DetailCouPage from "../components/count";
import DetailForPage from "../components/forecast";
import DetailPubPage from "../components/publish";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path:"/ttt",
      component:DetailAnaPage
    },
    {
      path: "/detail",
      name: "Detail",
      component: Detail,
      redirect: "/detail/forecast",
      children: [
        {
          path: 'analysis',
          component: DetailAnaPage
        },
        {
          path: 'count',
          component: DetailCouPage
        },
        {
          path: 'forecast',
          component: DetailForPage
        },
        {
          path: 'publish',
          component: DetailPubPage
        }
      ]
    }
  ]
});
