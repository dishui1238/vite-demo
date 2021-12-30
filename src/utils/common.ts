const toString = Object.prototype.toString;

export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`;
}

export function isString(val: unknown): val is String {
  return is(val, 'String');
}
export function isFunction(val: unknown): val is Function {
  return is(val, 'Function');
}