import React from 'react'
import { connect } from 'react-redux'

import './style/home.scss'
import { Filter, Pagination, ProductItem, ProductLoading } from '../components'
import { setCategory, setIsGetProducts, setProducts } from '../redux/productsReducer'

function Home(props) {
    return (
        <main className="main">
            <h2 className="main-title">Все товары</h2>
            
            <Filter category={props.category} setCategory={props.setCategory} setIsGetProducts={props.setIsGetProducts} setProducts={props.setProducts} />

            <div className="products container">
                {props.isGetProducts 
                    ? props.products.map(item => <ProductItem key={item._id} {...item} />)
                    : Array(props.paginationData.limit)
                        .fill(0)
                        .map((item, index) => <ProductLoading key={index} />)
                }
            </div>

            {props.isGetProducts && <Pagination setProducts={props.setProducts} setIsGetProducts={props.setIsGetProducts} {...props.paginationData} />}
        </main>
    )
}

const mapStateToProps = store => ({
    paginationData: store.products.paginationData,
    products: store.products.products,
    isGetProducts: store.products.isGetProducts,
    category: store.products.category
})

export default connect(mapStateToProps, {setProducts, setIsGetProducts, setCategory})(Home)
