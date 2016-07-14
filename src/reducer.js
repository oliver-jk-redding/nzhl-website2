import {fromJS} from 'immutable'

const INITIAL_STATE = fromJS({
  title: 'nzhl-website2'
})

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state
  }
}