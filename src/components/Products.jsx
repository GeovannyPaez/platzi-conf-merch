import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import '../styles/Products.css'
import Product from './Product'

function Products() {
  const {state:{products}, addToCar}= useContext(AppContext);

  return (
    <div className="Products">
        <div className="Products-items">
            {products.map(p=>{
                return <Product key={p.id} product={p} addToCar={addToCar}/>
            })}
        </div>
    </div>
  )
}

export default Products