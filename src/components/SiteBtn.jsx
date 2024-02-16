import React from 'react'
import { NavLink } from 'react-router-dom'

const SiteBtn = ({buttonLabel, buttonLink, showArrow}) => {
  return (
    // DISABLE_STYLE need to be created
      <NavLink className={`${showArrow?'sitebtnarrow':''} ${buttonLink==''?'DISABLE_STYLE':''} site-btn`} to={buttonLink? buttonLink : '#'}>
        <span>{buttonLabel?buttonLabel:'CLick Here'}</span>
      </NavLink>

  )
}

export default SiteBtn
