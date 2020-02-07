import {INCREMENT, DECREMENT, RESET, LOOP_ON, LOOP_OFF, TOGGLE_LOOP } from '../actions/actionTypes';

const initialState = {
    count: 1,
    loop: false
  };
  
const CounterReducer = (state=initialState, action) => {
    switch(action.type) {
      case INCREMENT:
        return {
          ...state,
          count: state.count + 1
        };
      case DECREMENT:
        return {
          ...state,
          count: state.count - 1
        };
      case RESET:
        return {
          ...state,
          count: 1
        };
      case LOOP_ON:
        return {
          ...state,
          loop: true
        };
      case LOOP_OFF:
        return {
          ...state,
          loop: false
        };                
      case TOGGLE_LOOP:
        return {
          ...state,
          loop: !state.loop
        };
      default:
        return state;
    }
}

export default CounterReducer