import { combineReducers } from '@reduxjs/toolkit'

import { itemsSlice } from "./items";

const rootReducer = combineReducers(
  {
    items: itemsSlice.reducer,
    people: peopleSlice.reducer
  }
)

export default rootReducer