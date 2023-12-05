import React from 'react'
import Carousel from './carousel/Carousel'
import TopCarousel from '../topCarousel/TopCarousel'
import TopCarouselData from '../topCarousel/topCarouselData/TopCarouselData'
import "./style.css"
import Layer2 from './layer2/Layer2'
import Layer3 from './layer3/Layer3'

function Header() {

    return (
        <div className="headerContainer">
            <TopCarousel />
            <Layer2 />
            <Layer3 />
            <Carousel />
            {/* <TopCarouselData /> */}

        </div>
    )
}

export default Header