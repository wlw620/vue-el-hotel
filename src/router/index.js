import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)
const routes = [{
  path: '/',
  component: resolve => require(['../views/hotel/home/ihotel.vue'], resolve)
}];

const router = new Router({
  mode: 'history',
  routes
});

// if (typeof window !== "undefined") {
//     router.beforeEach((to, from, next) => {
//         NProgress.start()
//         next()
//     })
//     router.afterEach((to, from) => {
//         NProgress.done();
//     })
// }

export default router;
