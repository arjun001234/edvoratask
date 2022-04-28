import React from "react";
import { FILTER_DATA } from "../../store/actions";
import { CITIES, STATES } from "../../utils/contants";
import { AppContext } from "../context/appcontext";

const Filter = () => {

  const {state,dispatch} = React.useContext(AppContext)

  console.log(state)

  const handleStateSelect = (e) => {
      dispatch({type: FILTER_DATA,payload: {state: e.target.value}})
  }

  const handleCitySelect = (e) => {
    dispatch({type: FILTER_DATA,payload: {city: e.target.value}})
  }

  return (
    <div className="filters">
      <p>Filters</p>
      <select onChange={handleStateSelect.bind(null)} name="states" id="states">
        <option value="">none</option>
        {state[STATES].map((s,index) => {
              return <option key={index} value={s}>{s}</option>
        })}
      </select>
      <select onChange={handleCitySelect.bind(null)} name="cities" id="cities">
        <option value="">none</option>
        {state[CITIES].map((c,index) => {
              return <option key={index} value={c}>{c}</option>
        })}
      </select>
    </div>
  );
};

export default Filter;
