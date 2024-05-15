import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <hr/>
      <Link style={{marginRight: "20px"}} to={"product1"}> Ürün 1 </Link>
      <Link style={{marginRight: "20px"}} to={"product2"}> Ürün 2 </Link>
      <Link style={{marginRight: "20px"}} to={"product3"}> Ürün 3 </Link>

      <Outlet />
    </div>
  )
}

export default Products
