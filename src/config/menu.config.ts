import { MenuItem } from '@/types/config.d';

const menuList: MenuItem[] = [
  {
    path: "/dashboard",
    name: "dashboard",
    orderNo: 0,
    hideMenu: false,
    title: 'Dashboard',
    children: [
      {
        name: "dashboard.workplace",
        path: '/workplace',
        icon: '',
        title: '工作台',
        orderNo: 1,
        hideMenu: false,
      },
      {
        path: "/lucky-wheel",
        name: "dashboard.luckywheel",
        title: "抽奖系统",
        orderNo: 2,
        hideMenu: false,
      },
      {
        path: "/editor",
        name: "dashboard.editor",
        title: "富文本编辑器",
        orderNo: 3,
        hideMenu: false,
      },
    ],
  },
  {
    name: "permisson",
    path: '/permisson',
    icon: '',
    title: '权限管理',
    orderNo: 2,
    hideMenu: false,
  }
]

export default menuList;