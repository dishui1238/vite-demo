import { setRouteChange } from '@/utils/routeChange';
import type { Router } from 'vue-router'


function createPageGuard(router: Router) {
  router.beforeEach((to) => {
    const { meta = {} } = to
    if (!meta.hideMenu) {
      setRouteChange(to)
    }
  })
}

export function setupRouterGuard(router: Router): void {
  createPageGuard(router);
}