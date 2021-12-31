// 找父路由
export function findPath<T = any>(
  tree: any,
  func: Function,
): T | T[] | null {
  const path: T[] = [];
  const list = [...tree];
  const visitedSet = new Set();
  while (list.length) {
    const node = list[0];
    if (visitedSet.has(node)) {
      path.pop();
      list.shift();
    } else {
      visitedSet.add(node);
      // 将子路由加入 list
      node['children'!] && list.unshift(...node['children'!]);
      path.push(node);
      // 找到当前的路由为止
      if (func(node)) {
        return path;
      }
    }
  }
  return null;
}
