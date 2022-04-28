import React from 'react'
import { USER } from '../../utils/contants'
import { AppContext } from '../context/appcontext'
import Logo from './logo'

function Navbar() {

  const {state} = React.useContext(AppContext)

  return (
    <nav className='navbar'>
        <Logo />
        {state[USER] ? <div className='profile'>
            <p>{state[USER].name}</p> 
            <img />
        </div> : null}   
    </nav>
  )
};
export default Navbar