import React from 'react'

import './style/productItem.scss'
import { productItem } from '../assets/img'

function ProductItem() {
    return (
        <div className="products-item">
            <img src={productItem} alt="product" className="products-item--img" />
            <h3 className="products-item--title">Конструктор Lego duplo</h3>
            <p className="products-item--description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac facilisi nunc euismod purus faucibus.</p>
            <div>
                <span className="products-item--price">3000 ₽</span>
                <button className="btn btn-outline btn-product">В корзину</button>
            </div>
        </div>
    )
}

export default ProductItem
