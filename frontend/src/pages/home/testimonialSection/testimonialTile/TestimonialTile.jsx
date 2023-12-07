import React, { useEffect, useState } from 'react'
import "./style.css"



function TestimonialTile({ img, data, enquireForm }) {



    return (

        <div className="productCardContainer">
            <img src={img} alt="" className="productCardImg" />
            <div className="productCardTitle">{data}</div>
            <div className="productCardButtons">
                <div className="productCardButtonBlue">View Detail</div>
                <div className="productCardButtonRed" onClick={() => { enquireForm(img, data) }}>Book Now</div>
            </div>


        </div>
    )
}

export default TestimonialTile