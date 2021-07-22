import React, { useEffect, useState } from 'react'

import './style/filter.scss'
import { arrowFilter, search } from '../assets/img'
import { getProductsByCategory, getProductsWithSearch } from '../api/api'

function Filter({setCategory, category, setIsGetProducts, setProducts}) {

    const [isOpenPopup, setIsOpenPopup] = useState(false)
    const [searchText, setSearchText] = useState('')

    const changeCategory = (currentCategory) => {
        setCategory(currentCategory)
    }

    useEffect(() => {
        const fetchData = async () => {
            if(category){
                setIsOpenPopup(false)
                setIsGetProducts()
                const res = await getProductsByCategory(category)
                if(res){
                    setProducts(res.docs, {
                        hasNextPage: res.hasNextPage,
                        hasPrevPage: res.hasPrevPage,
                        limit: res.limit,
                        nextPage: res.nextPage,
                        page: res.page,
                        prevPage: res.prevPage,
                        totalPages: res.totalPages
                    })
                }
            }
        }

        fetchData()
    }, [category])

    const searchProducts = async (e) => {
        e.preventDefault()
        setIsGetProducts()
        const res = await getProductsWithSearch(searchText.trim())
        if(res){
            setProducts(res.docs, {
                hasNextPage: res.hasNextPage,
                hasPrevPage: res.hasPrevPage,
                limit: res.limit,
                nextPage: res.nextPage,
                page: res.page,
                prevPage: res.prevPage,
                totalPages: res.totalPages
            })
        }
        
    }

    return (
        <div className="filter">
            <div className="container">
                <div className={`filter-categories ${isOpenPopup && 'active' }`} onClick={ () => setIsOpenPopup(!isOpenPopup) }>
                    <span className="filter-categories--text">Выберите категорию</span>
                    <img className="filter-categories--img" alt="arror" src={arrowFilter} width="22" height="22" />                            
                </div>

                <form className="filter-search" onSubmit={searchProducts}>
                    <input type="text" className="filter-search--input" placeholder="Поиск" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <img src={search} alt="search" className="filter-search--img" />
                </form>

                {isOpenPopup && <div className="filter-popup">
                    <div className="filter-popup-item" data-category="stuffed" onClick={(e) => changeCategory(e.target.dataset.category)}>
                            <span>Мягкие игрушки</span>
                    </div>
                    <div className="filter-popup-item" data-category="constructor" onClick={(e) => changeCategory(e.target.dataset.category)}>
                            <span>Конструкторы</span>
                    </div>
                    <div className="filter-popup-item" data-category="developing" onClick={(e) => changeCategory(e.target.dataset.category)}>
                            <span>Развивающие</span>
                    </div>
                    <div className="filter-popup-item" data-category="dolls" onClick={(e) => changeCategory(e.target.dataset.category)}>
                            <span>Куклы</span>
                    </div>
                    <div className="filter-popup-item" data-category="musical" onClick={(e) => changeCategory(e.target.dataset.category)}>
                            <span>Музыкальные</span>
                    </div>
                    <div className="filter-popup-item" data-category="puzzle" onClick={(e) => changeCategory(e.target.dataset.category)}>
                            <span>Пазлы</span>
                    </div>
                    <div className="filter-popup-item" data-category="car" onClick={(e) => changeCategory(e.target.dataset.category)}>
                            <span>Машинки</span>
                    </div>
                    <div className="filter-popup-item" data-category="reset" onClick={(e) => changeCategory(e.target.dataset.category)}>
                            <span>Сбросить</span>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Filter
