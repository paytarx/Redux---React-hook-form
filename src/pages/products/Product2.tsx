import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product2 = () => {
  return (
    <div>
      <h1>Product2</h1>
      <hr/>
      <Link style={{marginRight: "20px"}} to={"product2Child1"}>Product2Child1</Link>
      <Link style={{marginRight: "20px"}} to={"product2Child2"}>Product2Child2</Link>

      <Outlet />
    </div>
  )
}

export default Product2
