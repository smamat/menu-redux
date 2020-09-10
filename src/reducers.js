import initialState from './database.js'
import { SET_MEAL, SET_DISH, } from './actions';

const makeSupper = (state = initialState, action) => {
  switch (action.type) {

    /* e.g. action --- { type: SET_MEAL, mealType: THREE } */
    case SET_MEAL:
      return Object.assign({}, state, {
        mealType: action.mealType
      })

    /* e.g. action --- { type: SET_DISH, course: SECONDO, id: 11 } */
    case SET_DISH:
      return Object.assign({}, state, {
        choice: state.choice.map((item) => {
          if (item.course === action.course) {
            return Object.assign({}, item, { id: action.id })
          }
          return item
        })
      })

    default:
      return state
  }
}

export default makeSupper
