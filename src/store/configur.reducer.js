import * as constant from './configur.constant'

const initialState = {
  data: [],
  search: '',
}

export const configurReducer = (state = initialState, action) => {
  switch(action.type) {
    case constant.SET_SEARCH:
      return {
        ...state,
        search: action.search
      }
    case constant.SET_CARD_DATA:
      return {
        ...state,
         data: action.data
      }
    
    default: 
      return state
  }

}
