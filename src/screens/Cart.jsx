import React from 'react'

import './style/cart.scss'
import { donaldDuck, emptyBox, productItem, remove } from '../assets/img'

function Cart() {
    return (
        <div class="cart">
            <div class="container">
                <h1 class="cart-title">Корзина</h1>

                <div class="cart-products">
                    <div class="cart-products-item">
                        <div class="cart-products-item__info">
                            <img src={productItem} alt="item" />
                            <h3>Конструктор Lego duplo</h3>
                        </div>
            
                        <divdiv class="cart-products-item__right">
                            <span class="cart-products-item__price" >3000 ₽</span>
                            <div class="cart-products-item__count">
                                <div><span>-</span></div>
                                <div><span>1</span></div>
                                <div><span>+</span></div>
                            </div>
                            <img src={remove} alt="remove" class="cart-products-item__remove" />
                        </divdiv>
                    </div>

                    <button class="btn">Оформить заказ</button>
                </div>

                <div class="cart-empty">
                    <img width="150" height="150" src={emptyBox} alt="emptyBox" />
                    <h2>Корзина пуста :(</h2>
                </div>
            </div>

            <img src={donaldDuck} alt="donaldDuck" class="cartImg" />
        </div>
    )
}

export default Cart
