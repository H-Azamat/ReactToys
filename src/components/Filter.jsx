import React from 'react'

import './style/filter.scss'
import { arrowFilter, search } from '../assets/img'

function Filter() {
    return (
        <div className="filter">
            <div className="container">
                <div className="filter-categories">
                    <span className="filter-categories--text">Выберите категорию</span>
                    <img className="filter-categories--img" src={arrowFilter} width="22" height="22" />                            
                </div>

                <div className="filter-search">
                    <input type="text" className="filter-search--input" placeholder="Поиск" />
                    <img src={search} alt="search" className="filter-search--img" />
                </div>

                {/* <div className="filter-popup">
                    <div className="filter-popup-item"><span>Мягкие игрушки</span></div>
                    <div className="filter-popup-item"><span>Конструкторы</span></div>
                    <div className="filter-popup-item"><span>Развивающие</span></div>
                    <div className="filter-popup-item"><span>Для девочек</span></div>
                    <div className="filter-popup-item"><span>Сбросить</span></div>
                </div> */}
            </div>
        </div>
    )
}

export default Filter
