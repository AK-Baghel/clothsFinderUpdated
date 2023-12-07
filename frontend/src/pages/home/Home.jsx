import React from 'react'
import TestimonialSection from './testimonialSection/TestimonialSection'
import "./style.css"
import DisplayBanner from './displayBanner/DisplayBanner'
import Collections from './collections/Collections'
import MarqueeComp from './marquee/MarqueeComp'
import TestimonialCollectionSection from './testimonialCollectionSection/TestimonialCollectionSection'
import FabricProduct from './fabricProduct/FabricProduct'

function Home() {
    return (
        <div className="homeContainer">

            <div className="homeHeadline">SHOP FABRICS BY CATEGORY</div>

            <div className="collectionFlex">
                <Collections img={"https://5.imimg.com/data5/BB/LG/DJ/SELLER-311779/60s-lea-linen-fabric.jpg"} data={"Linen"} />
                <Collections img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuUfhaIciX_8X360BuEL24gUkQFhiajRv0hA&usqp=CAU"} data={"Silk"} />
                <Collections img={"https://tiimg.tistatic.com/fp/1/007/726/beige-brushed-cotton-fabric-957.jpg"} data={"Cotton"} />
                <Collections img={"https://m.media-amazon.com/images/I/51fMP84MNRL.jpg"} data={"Rayon"} />
            </div>

            <div className="homeBannerMen">
                <div className="homeBannerBox">
                    <div className="homeBannerText">View All Items</div>
                </div>
            </div>

            <div className="homeHeadline">Featured Products</div>
            <FabricProduct />

            <img className='homeVideo' src="https://64.media.tumblr.com/127dc39644ab47ad8ff62e01c223facf/379315cdb77d2b0d-0a/s500x750/623bc1ed6012215f07474f172d8d3f6bfb5d33d5.gif" />

            <div className="homeHeadline">Our Products</div>
            <TestimonialSection />


            <DisplayBanner />

            <div className="homeHeadline">New Fabrics</div>
            <TestimonialCollectionSection />

            <img className='homeVideo' src="https://i.pinimg.com/originals/e8/18/2d/e8182dd71da4a0a9ae6ee70699e5f41f.gif" />

            <div className="homeHeadline">SHOP BY USAGE</div>

            <MarqueeComp direction={"right"} />


        </div>
    )
}

export default Home