import { useRouter } from 'vue-router';
import type { Router } from 'vue-router'
import { REDIRECT_NAME } from '@/config/const.config';

export function useRedo(_router?: Router) {
  const { currentRoute, push } = _router || useRouter()
  const { params = {}, name, fullPath, query } = currentRoute.value

  function redo(): Promise<boolean> {
    return new Promise((resolve) => {
      if (name && Object.keys(params).length > 0) {
        params['_redirect_type'] = 'name';
        params['path'] = String(name);
      } else {
        params['_redirect_type'] = 'path';
        params['path'] = fullPath;
      }
      push({ name: REDIRECT_NAME, params, query }).then(() => resolve(true));
    })
  }

  return redo
}