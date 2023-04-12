import { createRouter, createWebHistory } from "vue-router";


import TeamsList from "./pages/TeamsList.vue";
import UsersList from "./pages/UsersList.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import NotFound from "./pages/NotFound.vue";
import TeamsFooter from "./pages/TeamsFooter.vue";
import UsersFooter from "./pages/UsersFooter.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/", redirect: "/teams" },
      {
        name: "teams",
        path: "/teams",
        meta: { needsAuth: true},
        //   component: TeamsList,
        components: { default: TeamsList, footer: TeamsFooter },
        children: [
          {
            name: "team-member",
            path: ":teamId",
            component: TeamMembers,
            props: true,
          }, // /teams/t1
        ],
      }, //, alias: '/'
      {
        path: "/users",
        components: { default: UsersList, footer: UsersFooter },
        beforeEnter(to, from, next) {
          console.log('user beforeEnter')
          console.log(to, from)
          next()
  
        },
      },
      { path: "/:notFound(.*)", component: NotFound },
    ],
  
    linkActiveClass: "active",
    scrollBehavior(to, from, savedPosition) {
      // console.log(to, from, savedPosition)
      if (savedPosition) {
        return savedPosition;
      }
      return { left: 0, top: 0 };
    },
  });
  
  router.beforeEach(function (to, from, next) {
    console.log("Global beforeEach");
    console.log(to, from);
    if (to.meta.needsAuth) {
      console.log('Needs auth!')
      next();
    } else {
      next();
    }
    // if (to.name === 'team-member'){
    //     next()
    // }else {
    //     next({name: 'team-member' , params: {teamId: 't2'}})
    // }
    next();
  });
  
  router.afterEach((to, from) => {
    // 가드는 할 수 없고 로그 쌓는 정도
  })
  

  export default router