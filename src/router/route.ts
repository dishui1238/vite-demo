import DefaultLayout from "@/layouts/index.vue";

export const RootRoute = {
  path: "/",
  name: "Root",
  // redirect: HOME,
  meta: {
    title: "Root",
  },
};

// export const LoginRoute = {
//   path: "/login",
//   name: "Login",
//   component: () => import("/@/views/sys/login/Login.vue"),
//   meta: {
//     title: t("routes.basic.login"),
//   },
// };

export const CommonRoute = [
  {
    path: "/",
    name: "Root",
    redirect: "/workplace",
    component: DefaultLayout,
    children: [
      {
        path: "workplace",
        name: "Workplace",
        component: () => import("../views/workplace/index.vue"),
        meta: {
          title: "工作台",
        },
      },
      {
        path: "lucky-wheel",
        name: "LuckyWheel",
        component: () => import("../views/luckDraw/index.vue"),
        meta: {
          title: "抽奖系统",
        },
      },
    ],
  },
];

export const basicRoutes = [...CommonRoute];
