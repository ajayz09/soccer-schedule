import Vue from "vue";
import Router from "vue-router";
import DropDown from "@/components/DropDown";
import Results from "@/components/Results";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/search"
    },
    {
      path: "/search",
      name: "DropDown",
      component: DropDown
    },
    {
      path: "/results",
      name: "Results",
      component: Results
    }
  ]
});
