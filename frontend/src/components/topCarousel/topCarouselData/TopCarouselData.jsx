import React from 'react'
import "./style.css"

function TopCarouselData({ data }) {
    return (
        <div className="topCarouselDataContainer">
            <div className="topCarouselDataText">{data}</div>
        </div>
    )
}

export default TopCarouselData