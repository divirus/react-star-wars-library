import { Dispatch } from 'react';
import { createSlice } from '@reduxjs/toolkit';

import { IPeopleData, IPeopleSliceState } from '../types';
import { getPeopleData } from '../api';

export const peopleInitialState: IPeopleSliceState = {
  data: [],
  dataLoadPending: false,
  dataLoadSuccess: false,
  dataLoadError: false,
}

export const getPeople = () => {
  return ((dispatch: Dispatch<any>) => {
    dispatch(peopleSlice.actions.request());

    getPeopleData()
      .then((response: IPeopleData) => {
        dispatch(peopleSlice.actions.success(response.results));
      })
      .catch((error: Error) => {
        console.error(error);
        dispatch(peopleSlice.actions.failed());
      })
  })
}

export const peopleSlice = createSlice({
  name: 'people',
  initialState: peopleInitialState,
  reducers: {
    request(state) {
      state.dataLoadPending = true;
      state.dataLoadSuccess = false;
      state.dataLoadError = false;
    },
    failed(state) {
      state.dataLoadPending = false;
      state.dataLoadSuccess = false;
      state.dataLoadError = true;
    },
    success(state, action) {
      state.dataLoadPending = false;
      state.dataLoadSuccess = true;
      state.dataLoadError = false;
      state.data = action.payload;
    },
}
}) 