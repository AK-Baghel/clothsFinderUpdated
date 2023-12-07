import React from 'react'
import "./style.css"

function DisplayBanner() {
    return (
        <div className="displayBanner">
            <div className="displayBannerContainer">
                <div className="displayBannerText">20% Discount on</div>
                <div className="displayBannerHeading">Trending Fabric</div>
                <div className="displayBannerButtons">
                    <div className="productCardButton">Shop Now</div>
                    <div className="productCardButton">Quick View</div>
                </div>
            </div>
        </div>
    )
}

export default DisplayBanner