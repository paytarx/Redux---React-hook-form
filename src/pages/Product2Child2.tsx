import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product2Child2 = () => {
  return (
    <div>
      <h1>Product2 Child2</h1> 
      <hr/>
      <Link to={"product2Child2_1"}>Product2Child2_1</Link>

      <Outlet />
    </div>
  )
}

export default Product2Child2
