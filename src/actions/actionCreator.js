import { INCREMENT, DECREMENT, RESET, LOOP_ON, LOOP_OFF, INCREMENT_ASYNC,TOGGLE_LOOP } from './actionTypes'
export const increment = () => ({    type: INCREMENT})
export const decrement = () => ({    type: DECREMENT})
export const reset = () => ({    type: RESET})
export const loop_on = () => ({    type: LOOP_ON})
export const loop_off = () => ({    type: LOOP_OFF})
export const increment_async = () => ({    type: INCREMENT_ASYNC})
export const toggle_loop = () => ({    type: TOGGLE_LOOP})