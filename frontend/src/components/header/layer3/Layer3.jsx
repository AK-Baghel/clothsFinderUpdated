import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";


import "./style.css"



function Layer3() {

    const [show, setShow] = useState(true)

    const showMenu = () => {
        setShow(!show)

    }


    return (
        <div className="layer3Container">
            <div className="layer3ContainerBox1">
                <FaBars className='layer3Button barsHide' onClick={showMenu} />
                <FaSearch className='layer3Button searchHide' />
                <div className="layer3Logo">
                    Cloths Finder
                </div>
                <div className="layer3Buttons">
                    <FaUser className='layer3Button' />
                    <FaShoppingBag className='layer3Button' />
                </div>
                <div className="layer3ButtonsMobile">
                    <FaSearch className='layer3Button' />
                    <FaShoppingBag className='layer3Button' />
                </div>
            </div>

            <div className={`layer3ContainerBox2 ${show ? "headerMobile" : ""}`}>
                <div className="layer3Item bannerHoverUnderline">Pretty & Poised</div>
                <div className="layer3Item bannerHoverUnderline">Ethnic wear</div>
                <div className="layer3Item bannerHoverUnderline">best selling</div>
                <div className="layer3Item bannerHoverUnderline">fabrics</div>
                <div className="layer3Item bannerHoverUnderline">customize prints</div>
                <div className="layer3Item bannerHoverUnderline">new arrivals</div>
                <div className="layer3Item bannerHoverUnderline">bulk order</div>
                <IoCloseSharp className={`layerContainerCross ${show ? "headerMobile" : ""}`} onClick={showMenu} />
            </div>
        </div>
    )
}

export default Layer3