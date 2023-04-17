import { combineReducers } from '@reduxjs/toolkit'

import { peopleSlice } from './people';

const rootReducer = combineReducers(
  {
    people: peopleSlice.reducer
  }
)

export default rootReducer