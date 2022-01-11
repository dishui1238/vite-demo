
export type Handler<T = any> = (event?: T) => void;
export type EventKey = string | symbol;
export interface Emitter {
  on(key: EventKey, handler: Handler): void
  off(key: EventKey, handler: Handler): void
  emit(key: EventKey, ...args: any[]): void
}

export default function EventEmitter(): Emitter {
  const all = new Map()

  return {
    on(key: EventKey, handler: Handler) {
      if (all.has(key)) {
        all.get(key).push(handler)
      } else {
        all.set(key, [handler])
      }
    },

    off(key: EventKey, handler: Handler) {
      const handlers = all.get(key)
      const index = handlers.indexOf(handler)
      if (handlers && index > -1) {
        handlers.splice(handlers.indexOf(handler), 1)
      }
    },

    emit(key: EventKey, ...args: any[]) {
      ((all.get(key) || []) as Handler[]).forEach(handler => handler(...args))
    }
  }
}