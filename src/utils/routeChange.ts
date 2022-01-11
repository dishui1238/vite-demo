import type { RouteLocationNormalized } from 'vue-router';
import EventEmitter from './EventEmitter'

const emitter = EventEmitter()
const key = Symbol()

let lastChangeTab: RouteLocationNormalized;

export function setRouteChange(lastChangeRoute: RouteLocationNormalized) {
  emitter.emit(key, lastChangeRoute)
  lastChangeTab = lastChangeRoute
}


export function listenRouteChange(listener: (route: RouteLocationNormalized) => void, immediate = true) {
  emitter.on(key, listener)
  immediate && lastChangeTab && listener(lastChangeTab)
}