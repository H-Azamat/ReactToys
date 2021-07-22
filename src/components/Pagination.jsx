import React from 'react'
import { getProductsByPage } from '../api/api'

import './style/pagination.scss'

function Pagination(props) {

    const nextPage = async () => {
        props.setIsGetProducts()
        const res = await getProductsByPage(props.nextPage, props.limit)
        if(res){
            props.setProducts(res.docs, {
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

    const prevPage = async () => {
        props.setIsGetProducts()
        const res = await getProductsByPage(props.prevPage, props.limit)
        if(res){
            props.setProducts(res.docs, {
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

    const changePage = async (page) => {
        if(props.page !== page){
            props.setIsGetProducts()
            const res = await getProductsByPage(page, props.limit)
            if(res){
                props.setProducts(res.docs, {
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

    return (
        <div className="pagination container">
            {props.hasPrevPage && <div className="pagination-item" onClick={prevPage}>
                <svg width="29" height="28" viewBox="0 0 29 28" fill="#0099FF" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                    <path d="M20.2623 27.8216C20.504 28.0551 20.8892 28.0484 21.1227 27.8067C21.3505 27.5708 21.3505 27.197 21.1227 26.9612L8.16589 14.0031L21.1239 1.04629C21.3657 0.812781 21.3723 0.427581 21.1389 0.185804C20.9054 -0.0559157 20.5202 -0.0625902 20.2784 0.170857C20.2733 0.175764 20.2684 0.180727 20.2635 0.185804L6.87577 13.5735C6.63821 13.8111 6.63821 14.1963 6.87577 14.434L20.2623 27.8216Z"/>
                    <path d="M20.3965 0.00682831C20.7325 0.00620076 21.0055 0.278214 21.0061 0.614294C21.0064 0.776315 20.942 0.931775 20.8273 1.04622L7.86927 14.0031L20.8273 26.9599C21.0653 27.1978 21.0653 27.5836 20.8273 27.8215C20.5894 28.0595 20.2036 28.0595 19.9656 27.8215L6.57795 14.4338C6.34039 14.1962 6.34039 13.811 6.57795 13.5734L19.9656 0.185736C20.0797 0.0712369 20.2348 0.00682831 20.3965 0.00682831Z"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect x="28.0031" y="28" width="28" height="28" rx="14" transform="rotate(-180 28.0031 28)" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>                        
            </div>
            }
            {
                Array(props.totalPages)
                    .fill(0)
                    .map((item, index) => <div className={`pagination-item ${props.page === (index+1) && 'active'}`} key={index} 
                            onClick={() => changePage(index+1)}>
                                <span className="pagination-item--text">{index+1}</span>
                        </div>)
            }
            {props.hasNextPage && <div className="pagination-item" onClick={nextPage}>
                <svg width="29" height="28" viewBox="0 0 29 28" fill="#0099FF" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                    <path d="M7.74384 0.178519C7.50212 -0.0549858 7.11687 -0.048254 6.88336 0.193466C6.65562 0.429309 6.65562 0.803156 6.88336 1.03894L19.8402 13.997L6.88216 26.9538C6.64044 27.1873 6.63377 27.5725 6.86722 27.8143C7.10072 28.056 7.48592 28.0627 7.7277 27.8293C7.73278 27.8244 7.73774 27.8194 7.74265 27.8143L21.1303 14.4266C21.3679 14.189 21.3679 13.8038 21.1303 13.5662L7.74384 0.178519Z"/>
                    <path d="M7.60963 27.9932C7.27355 27.9938 7.00063 27.7218 7 27.3857C6.99972 27.2237 7.06407 27.0682 7.17879 26.9538L20.1368 13.9969L7.17879 1.04014C6.94084 0.80219 6.94084 0.41642 7.17879 0.178466C7.41675 -0.0594886 7.80252 -0.0594886 8.04047 0.178466L21.4282 13.5662C21.6657 13.8038 21.6657 14.189 21.4282 14.4266L8.04047 27.8143C7.92637 27.9288 7.77131 27.9932 7.60963 27.9932Z"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect x="0.00305176" width="28" height="28" rx="14" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </div>
            }
        </div>
    )
}

export default Pagination
