import app from "./app";
import auth from "./auth";

export default [
    {
        name: "auth",
        path: "/auth",
        component: () => import("../resources/auth/login.vue"),
        meta: {
            auth: false,
        },
        redirect: {
            name: "auth.login",
        },
        children: auth,
    },
    {
        path: '/admin',
        name: 'app',
        component: () => import('../resources/app'),
        meta: {
          auth: true,
        },
        redirect: '/admin/home',
        children: app,
      },
      {
        path: '*',
        redirect: '/admin/home',
      },
];
