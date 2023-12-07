import React from 'react'
import TestimonialSection from './testimonialSection/TestimonialSection'
import "./style.css"
import DisplayBanner from './displayBanner/DisplayBanner'
import Collections from './collections/Collections'
import MarqueeComp from './marquee/MarqueeComp'

function Home() {
    return (
        <div className="homeContainer">
            <div className="homeHeadline">
                SHOP FABRICS BY CATEGORY
            </div>

            <div className="collectionFlex">
                <Collections img={"https://5.imimg.com/data5/BB/LG/DJ/SELLER-311779/60s-lea-linen-fabric.jpg"} data={"Linen"} />
                <Collections img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuUfhaIciX_8X360BuEL24gUkQFhiajRv0hA&usqp=CAU"} data={"Silk"} />
                <Collections img={"https://tiimg.tistatic.com/fp/1/007/726/beige-brushed-cotton-fabric-957.jpg"} data={"Cotton"} />
                <Collections img={"https://m.media-amazon.com/images/I/51fMP84MNRL.jpg"} data={"Rayon"} />
            </div>


            <iframe className='homeVideo' src="https://wallpapercave.com/wp/wp2757880.gif" frameborder="0"></iframe>

            <div className="homeHeadline">New Fabrics</div>

            <TestimonialSection />

            <DisplayBanner />

            <div className="homeHeadline">SHOP BY USAGE</div>

            <MarqueeComp direction={"right"} />



        </div>
    )
}

export default Home