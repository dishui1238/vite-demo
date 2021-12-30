import _ from 'lodash';

export function transformRouteToMenu(routeModList:any, routerMapping = false) {
  // const cloneRouteModList = _.cloneDeep(routeModList);
  // const routeList: AppRouteRecordRaw[] = [];

  // cloneRouteModList.forEach((item) => {
  //   if (routerMapping && item.meta.hideChildrenInMenu && typeof item.redirect === 'string') {
  //     item.path = item.redirect;
  //   }
  //   if (item.meta?.single) {
  //     const realItem = item?.children?.[0];
  //     realItem && routeList.push(realItem);
  //   } else {
  //     routeList.push(item);
  //   }
  // });
  // const list = treeMap(routeList, {
  //   conversion: (node: AppRouteRecordRaw) => {
  //     const { meta: { title, hideMenu = false } = {} } = node;

  //     return {
  //       ...(node.meta || {}),
  //       meta: node.meta,
  //       name: title,
  //       hideMenu,
  //       path: node.path,
  //       ...(node.redirect ? { redirect: node.redirect } : {}),
  //     };
  //   },
  // });
  // joinParentPath(list);
  // return cloneDeep(list);
}