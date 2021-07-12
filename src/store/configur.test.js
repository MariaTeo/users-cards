import { setCardDataAction, setSearchAction } from "./configur.action"
import { configurReducer } from "./configur.reducer"

describe('test reducer', () => {
  it('should update the search term', () => {
    const search = 'test'
    const expected = {
      data: [],
      search
    }
    const initialState = {
      data: [],
      search: '',
    }

    const action = setSearchAction(search)
    
    const state = configurReducer(initialState, action)

    expect(state).toEqual(expected)
    console.log(state)
  })

  it('should update the list', () => {
    const data = ['the data', 'is here']
    const initialState = {
      data: [],
      search: '',
    }
    const expected = {
      data,
      search: ''
    }

    const action = setCardDataAction(data)
    const state = configurReducer(initialState, action)

    expect(state).toEqual(expected)
    console.log(state)
  })
})
