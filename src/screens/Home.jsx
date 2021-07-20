import React from 'react'

import './style/home.scss'
import { Filter, Pagination, ProductItem } from '../components'

function Home() {
    return (
        <main className="main">
            <h2 className="main-title">Все товары</h2>
            
            <Filter />

            <div className="products container">
                <ProductItem />
            </div>

            <Pagination />
        </main>
    )
}

export default Home
