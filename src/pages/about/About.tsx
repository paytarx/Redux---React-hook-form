import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <hr/>
      <Link style={{marginRight: "20px"}} to={"employee"}> Employee </Link>
      <Link to={"company"}> company </Link>


      <Outlet />
    </div>
  )
}

export default About
