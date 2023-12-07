import React, { useState, useEffect, useRef } from 'react'
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";

import "./style.css"

function Layer3() {

    const searchinput = useRef(null);

    const [show, setShow] = useState(true)
    const [searchToggle, setSearchToggle] = useState(true)

    const showMenu = () => {
        setShow(!show)
    }

    // const handleClick = () => {
    //     searchinput.current.focus();
    // };

    useEffect(() => {
        if (!searchToggle) {
            document.body.style.overflow = 'hidden';
            searchinput.current.focus();
        } else {
            document.body.style.overflow = 'unset'
        }
    });


    return (
        <div className="layer3Container">
            <div className="layer3ContainerBox1">
                <FaBars className='layer3Button barsHide' onClick={showMenu} />
                <FaSearch className='layer3Button searchHide' onClick={() => { setSearchToggle(!searchToggle) }} />

                <div className="layer3Logo">
                    Cloths Finder
                </div>
                <div className="layer3Buttons">
                    <FaUser className='layer3Button' />
                    <FaShoppingBag className='layer3Button' />
                </div>
                <div className="layer3ButtonsMobile">
                    <FaSearch className='layer3Button' onClick={() => { setSearchToggle(!searchToggle) }} />
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

            <div className={`searchPage ${searchToggle ? "searchPageHide" : ""}`}>
                <div className="layer3SearchBox">
                    <input ref={searchinput} type="text" placeholder='Search Here...' className='searchInput' />
                    <IoCloseSharp className='searchClose' onClick={() => { setSearchToggle(!searchToggle) }} />
                </div>
            </div>
        </div>
    )
}

export default Layer3