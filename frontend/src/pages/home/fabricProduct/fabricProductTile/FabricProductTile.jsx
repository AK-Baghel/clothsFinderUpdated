import React, { useState, useEffect } from 'react'
import "./style.css"
import { IoClose } from "react-icons/io5"
import Form from '../../form/Form'

function FabricProductTile({ img, title, price }) {

    const [searchToggle, setSearchToggle] = useState(true)

    useEffect(() => {
        if (!searchToggle) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset'
        }
    });

    const [showForm, setShowForm] = useState(false)
    return (
        <div className="fabricProductTileContainer">
            <img src={img} alt="" className="fabricProductTileImg" />

            <div className="fabricProductTileBox">
                <div className="fabricProductTileTitle">{title}</div>
                <div className="fabricProductTileQuantity">Quantity : <span className='fabricProductTileQuantityColor'>1000m X 1000m</span></div>
                <div className="fabricProductTilePrice">Price : <span className='fabricProductTilePriceColor'>{price}</span></div>
                <div className="productCardButtons fabricProductTileButtons">
                    <div className="productCardButtonBlue">View Detail</div>
                    <div className="productCardButtonRed" onClick={() => { setShowForm(!showForm); setSearchToggle(!searchToggle) }}>Book Now</div>
                </div>
            </div>

            {
                showForm &&

                <>
                    <div className="enquireBlackContainer">

                        <div className="enquireContainer">

                            <div className="enquireSection1">
                                <div className="enquireSection1Text">BOOK NOW</div>
                                <div className="enquireSection1Close">
                                    <IoClose className='formClose' onClick={() => { setShowForm(false); setSearchToggle(!searchToggle) }} />
                                </div>
                            </div>
                            <div className="enquireSection2">
                                <div className="enquireSection2Image">
                                    <img className='enquireImage' src={img} alt="" />
                                    <div className="enquireTitle">{title}</div>
                                </div>
                                <div className="enquireSection2Form">
                                    <Form />
                                </div>
                            </div>

                        </div>

                    </div>
                </>
            }


        </div>
    )
}

export default FabricProductTile