import React from "react";
import {
  NEAREST_RIDES,
  PAST_RIDES,
  UPCOMING_RIDES,
} from "../../utils/contants";
import Filter from "./filter";

const Tab = ({ setTypeOfRide, state, rideType }) => {

  const [open, setOpen] = React.useState(false);

  return (
    <div className="tabs">
      <div>
        <section
          className={`${
            rideType === NEAREST_RIDES ? "tabs-active" : "tabs-inactive"
          }`}
          onClick={() => setTypeOfRide(NEAREST_RIDES)}
        >
          <h1>Nearest Rides</h1>
          {rideType !== NEAREST_RIDES && <p>({state[NEAREST_RIDES].length})</p>}
        </section>
        <section
          className={`${
            rideType === UPCOMING_RIDES ? "tabs-active" : "tabs-inactive"
          }`}
          onClick={() => setTypeOfRide(UPCOMING_RIDES)}
        >
          <h1>Upcoming Rides</h1>
          {rideType !== UPCOMING_RIDES && (
            <p>({state[UPCOMING_RIDES].length})</p>
          )}
        </section>
        <section
          className={`${
            rideType === PAST_RIDES ? "tabs-active" : "tabs-inactive"
          }`}
          onClick={() => setTypeOfRide(PAST_RIDES)}
        >
          <h1>Past Rides</h1>
          {rideType !== PAST_RIDES && <p>({state[PAST_RIDES].length})</p>}
        </section>
      </div>
      <div>
        <section className="tabs-inactive" onClick={() => setOpen((prev) => !prev)}>
           <h1>Filters</h1>
        </section>
      </div>
      {open && <Filter />}
    </div>
  );
};

export default Tab;
