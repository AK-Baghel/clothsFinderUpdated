import React from 'react'
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import "./style.css"


function Layer2() {
    return (
        <div className="layer2Container">
            <AiFillInstagram className='layerIcons' />
            <IoLogoFacebook className='layerIcons' />
        </div>
    )
}

export default Layer2