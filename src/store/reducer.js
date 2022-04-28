import { addDistanceToData, filterRides, getCities, getNearestRides, getPastRides, getStates, getUpcomingRides } from "../utils/helper";
import { FILTER_DATA, HANDLE_ERROR, LOAD_DATA } from "./actions";
import {ALL_RIDES, CITIES, ERROR, IS_LOADED, NEAREST_RIDES,PAST_RIDES,SELECTED_CITY,SELECTED_STATE,STATES,UPCOMING_RIDES, USER} from '../utils/contants'

export const initailState = {
  [ALL_RIDES]: [],
  [NEAREST_RIDES]: {
    count: 0,
    data: [],
  },
  [UPCOMING_RIDES]: {
    count: 0,
    data: [],
  },
  [PAST_RIDES]: {
    count: 0,
    data: [],
  },
  [CITIES]: [],
  [STATES]: [],
  [USER]: null,
  [SELECTED_CITY]: "",
  [SELECTED_STATE]: "",
  [IS_LOADED]: false,
  [ERROR]: false
};

export const reducer = (state, action) => {
  switch (action.type) {
    case LOAD_DATA:
      const rides = addDistanceToData(action.payload.rides,action.payload.user);
      return {
          ...state,
          [ALL_RIDES]: rides,
          [NEAREST_RIDES]: getNearestRides(rides),
          [UPCOMING_RIDES]: getUpcomingRides(rides),
          [PAST_RIDES]: getPastRides(rides),
          [CITIES]: getCities(rides),
          [STATES]: getStates(rides),
          [USER]: action.payload.user,
          [IS_LOADED]: true
       }
    case FILTER_DATA: 
       const s = action.payload.state ?? state[SELECTED_STATE]
       const c =  action.payload.city ?? state[SELECTED_CITY]
       const newRides = filterRides(state[ALL_RIDES],s,c)
       return {
         ...state,
        [NEAREST_RIDES]: getNearestRides(newRides),
        [UPCOMING_RIDES]: getUpcomingRides(newRides),
        [PAST_RIDES]: getPastRides(newRides),
        [SELECTED_CITY]: c,
        [SELECTED_STATE]: s,
      }
    case HANDLE_ERROR:
      return {...state,[ERROR]: true}
    default: 
      return {...state}
  }
};
