import * as ActionTypes from './actionTypes'

// 设置皮肤
export function setSkin (skin) {
  return { type: ActionTypes.SET_SKIN, skin }
}