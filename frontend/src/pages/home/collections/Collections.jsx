import React from 'react'
import "./style.css"
function Collections({ img, data }) {
    return (
        <div className="collectionsContainer">
            <img className='collectionsImg' src={img} alt="" />
            <div className="collectionsBox">{data}</div>
        </div>
    )
}

export default Collections