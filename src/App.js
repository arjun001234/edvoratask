
import React from 'react';
import './App.css';
import { AppContext } from './components/context/appcontext';
import Container from './components/ride/container';
import Layout from './components/ui/layout';
import Tab from './components/ui/tab';
import { ALL_RIDES, ERROR, IS_LOADED, NEAREST_RIDES } from './utils/contants';

function App() {

  const [rideType,setRideType] = React.useState(NEAREST_RIDES);

  const {state} = React.useContext(AppContext)

  if (state[ERROR]){
     return <div className='error'>
       <h1>Something went wrong!</h1>
       <p>Reload Page</p>
     </div>
  }

  if (!state[IS_LOADED]) {
    return <div className='loader'>Loading...</div>
  }

  const setTypeOfRide = (ride) => {
      setRideType(ride)
  }

  return (
      <Layout>
        <Tab setTypeOfRide={setTypeOfRide} state={state} rideType={rideType} />
        <Container rides={state[rideType]} />
      </Layout>
  );
}

export default App;
