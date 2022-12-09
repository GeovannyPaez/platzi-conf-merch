import React from 'react'


function Product({product, addToCar}) {
  const onAddToCar=()=>{
    addToCar(product)
  }
  return (
    <div className="Products-item">
        <img src={product.image} alt="" />
        <div className="Products-item-info">
            <h2>{product.title}
                <span>
                    $
                    {' '}
                {product.price}
                </span>
            </h2>
            <p>{product.description}</p>
        </div>
        <button type='button' onClick={onAddToCar}>Comprar</button>
    </div>
  )
}



export default Product
