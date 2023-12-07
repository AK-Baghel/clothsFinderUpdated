import React from 'react'
import "./style.css"

function TestimonialTile({ img, data }) {
    return (

        <div className="productCardContainer">
            <img src={img} alt="" className="productCardImg" />
            <div className="productCardTitle">{data}</div>
            <div className="productCardButtons">
                <div className="productCardButtonBlue">View Detail</div>
                <div className="productCardButtonRed">Book Now</div>
            </div>
        </div>
    )
}

export default TestimonialTile