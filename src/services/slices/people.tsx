import { Dispatch } from 'react';
import { createSlice } from '@reduxjs/toolkit';

import { IPeopleSliceState } from '../types';
import { getPeopleData } from '../api';

export const peopleInitialState: IPeopleSliceState = {
  count: 0,
  next: '',
  previous: null,
  results: []
}

export const getPeople = () => {
  return ((dispatch : Dispatch<any>) => {
    dispatch(peopleSlice.actions.request());

    getPeopleData()
      .then((response: {data: IPeopleSliceState}) => {
        dispatch(peopleSlice.actions.success(response.data));
      })
      .catch((error: Error) => {
        console.log(error);
        dispatch(peopleSlice.actions.failed());
      })
  })
}

export const peopleSlice = createSlice({
  name: 'people',
  initialState: peopleInitialState,
  reducers: {
    request(state) {
    //   state.itemsPendingStatus = 'loading';
    },
    failed(state) {
    //   state.itemsPendingStatus = 'error';
    },
    success(state, action) {
    //   state.itemsPendingStatus = 'success';
      state.results = action.payload;
    },
}
}) 