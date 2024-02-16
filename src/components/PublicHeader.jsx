import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import Logo from '../assets/images/logo.svg'



export const PublicHeader = () => {

  const [shownav, setshownav] = useState(false);
  const location = useLocation();

  // useEffect to close the navigation menu when the route changes
  useEffect(() => {
    setshownav(false);
  }, [location.pathname]);

  // Array of routes where you want to show the ul
  const allowedRoutes = ['/'];

  // Check if the current route is in the allowedRoutes array
  const showUl = allowedRoutes.includes(location.pathname);

  return (
      <header className="header">
        <div className={`container mx-auto p-6 flex ${showUl? 'justify-between': 'justify-center'}  items-center`}>
          <NavLink to={'/'}>
            <img src={Logo} />
          </NavLink>
          {showUl && (
          <ul  className={`flex main-menu gap-4 ${shownav? 'nav-open' : ''} `}>
            {/* <li>
              <NavLink to='/' className='text-white'>My Profile</NavLink>
            </li> */}
            <li>
              <NavLink to='/' className='text-white'>Upgrade</NavLink>
            </li>
            <li>
              <NavLink to='/' className='text-white'>Contact</NavLink>
            </li>
            {/* <li>
              <NavLink to='/' className='text-white'>Home</NavLink>
            </li> */}
            <li>
              <NavLink to='/' className='text-white'>Sign in</NavLink>
            </li>
          </ul>
           )}
            {showUl && 
          <span onClick={()=>{
            setshownav(!shownav)
          }} className={`nav-ham ${shownav? 'nav-open' : ''} `}></span>
        }
        </div>
      </header>
  );
};

export default PublicHeader;
