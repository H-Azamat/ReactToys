import React from 'react'

import './style/productItem.scss'

function ProductItem(props) {
    return (
        <div className="products-item">
            <img src={'http://localhost:5000/' + props.picture} alt="product" className="products-item--img" />
            <h3 className="products-item--title">{props.title}</h3>
            <p className="products-item--description">{props.description}</p>
            <div>
                <span className="products-item--price">{props.price} ₽</span>
                <button className="btn btn-outline btn-product">В корзину</button>
            </div>
        </div>
    )
}

export default ProductItem
