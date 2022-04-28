import React from 'react'

const Ride = ({ride}) => {
  return (
    <div className='ride'>
        <img src={ride.map_url} />
        <section>
          {Object.entries(ride).map(([key,value]) => {
              if (key === "map_url" || key === "state" || key === "city") {
                return null
              }else {
                return <p key={key}>{key} : <b>{value}</b></p>
              }
          })}
        </section>
        <div>
          <p>{ride.city}</p>
          <p>{ride.state}</p>
        </div>
    </div>
  )
}

export default Ride