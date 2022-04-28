
import React from 'react'
import { AppContext } from '../context/appcontext';
import Ride from './ride';

const Container = ({rides}) => {

    if (!rides) {
        return <div className='loader'>Loading...</div>
    }

    if (rides.length === 0){
        return <div className='empty'>No rides available</div>
    }

  return (
     <div className='ride-container'>
        {rides.map((ride,index) => {
            return <Ride key={index} ride={ride} />
        })}
     </div>
  )
}

export default Container