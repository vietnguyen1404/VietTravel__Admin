import VueRouter from "vue-router";
import routes from "./router/index";
// import store from '@/stores';

const router = new VueRouter({
    // history: VueRouter.createWebHistory(),
    routes,
    mode: "history",
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    },
});

const originalPush = router.push;
router.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) {
        return originalPush.call(this, location, onResolve, onReject);
    }

    return originalPush.call(this, location).catch((err) => {
        if (VueRouter.isNavigationFailure(err)) {
            return err;
        }

        return Promise.reject(err);
    });
};

// router.beforeEach((routeTo, routeFrom, next) => {
    // const auth = routeTo.matched.some((route) => route.meta.auth ?? false);
    // if (!auth) return next();
    // // if (store.getters["users/getUser"]) {
    // //     return store.dispatch("users/GetProfile").then((user) => {
    // //         let permission = routeTo.matched.some((route) => {
    // //             return route.meta.can ?? null;
    // //         });
    // //         permission = permission ? routeTo.meta.can : permission;
    // //         user ? checkPermission(permission, next) : redirectToLogin(next);
    // //     });
    // // }
    // redirectToLogin(next);
// });

// function checkPermission(permission, next) {
//     return store.dispatch('users/hasPermission', permission).then((nextRoute) => {
//       return nextRoute ? next() : next({name: 'errors.403'});
//     });
//   }

// function redirectToLogin(next) {
//     next({ name: "auth.login" });
// }
export default router;
