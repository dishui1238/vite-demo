import { REDIRECT_NAME } from "@/config/const.config";
import DefaultLayout from "@/layouts/index.vue";

export const RootRoute = {
  path: "/",
  name: "Root",
  // redirect: HOME,
  meta: {
    title: "Root",
  },
};

const REDIRECT_ROUTE = {
  path: '/redirect',
  name: 'RedirectTo',
  component: DefaultLayout,
  meta: {
    hideBreadcrumb: true,
    hideMenu: true,
  },
  children: [
    {
      path: '/redirect/:path(.*)',
      name: REDIRECT_NAME,
      component: () => import('@/views/sys/redirect/index.vue'),
      meta: {
        title: REDIRECT_NAME,
        hideBreadcrumb: true,
      },
    }
  ]
}

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
      {
        path: "tinymce-editor",
        name: "TinymceEditor",
        component: () => import("../views/Editor/Tinymce/index.vue"),
        meta: {
          title: "tinymce富文本编辑器",
        },
      },
    ],
  },
];

export const basicRoutes = [REDIRECT_ROUTE, ...CommonRoute];
