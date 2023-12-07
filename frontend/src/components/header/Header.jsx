import React from 'react'
import TopCarousel from '../topCarousel/TopCarousel'
import "./style.css"
import Layer2 from './layer2/Layer2'
import Layer3 from './layer3/Layer3'
import Carousel from "./carousel/Carousel"

function Header() {

    return (
        <div className="headerContainer">

            <TopCarousel />
            <Layer2 />
            <Layer3 />
            <Carousel />
        </div>
    )
}

export default Header