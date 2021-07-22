import React from 'react'
import ContentLoader from "react-content-loader"

function ProductLoading() {
    return (
        <ContentLoader 
            speed={2}
            width={360}
            height={440}
            viewBox="0 0 370 440"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            className="product-loading"
        >
            <rect x="25" y="15" rx="10" ry="10" width="300" height="200" /> 
            <rect x="1" y="224" rx="6" ry="6" width="355" height="44" /> 
            <rect x="0" y="281" rx="6" ry="6" width="355" height="83" /> 
            <rect x="2" y="385" rx="0" ry="0" width="131" height="39" /> 
            <rect x="198" y="382" rx="32" ry="32" width="165" height="45" />
        </ContentLoader>
    )
}

export default ProductLoading
