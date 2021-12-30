import { useRouter } from "vue-router";
import type { RouteLocationRaw } from 'vue-router';
import { isString } from "@/utils/common";

// ​Omit<T, K>​ 类型让我们可以从另一个对象类型中剔除某些属性，并创建一个新的对象类型
// export type RouteLocationRawEx = Omit<RouteLocationRaw, 'path'> & { path: PageEnum };

function handleError(e: Error) {
  console.error(e);
}

export const useGo = () => {
  const router = useRouter()
  const { push, replace } = router
  function go(opt: RouteLocationRaw | string, isReplace = false) {
    if (!opt) return;
    isReplace ? replace(opt).catch(handleError) : push(opt).catch(handleError)
  }
  return go;
}