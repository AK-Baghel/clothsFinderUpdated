import React from "react";
import Marquee from "react-fast-marquee";
import "./style.css"
import TestimonialTile from "../testimonialSection/testimonialTile/TestimonialTile";
// import TestimonialTile from "../testimonial/TestimonialTile";

function MarqueeComp({ direction, enquireForm }) {
    return (
        <div className="marqueeContainer">
            <Marquee pauseOnHover={true} speed={100} autoFill={true} className="marquee" gradient={true} gradientWidth={10} direction={direction}  >
                <TestimonialTile enquireForm={enquireForm} img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuIsMWWCwQHqlTZp1UvS4LhBf-kk_KiNPgrJQTN5MVjW8OCZquQT6SWjVAhLyjw1kshcA&usqp=CAU"} data={"Jacket"} />
                <TestimonialTile enquireForm={enquireForm} img={"https://thehouseofrare.com/cdn/shop/files/IMG_0120_1_be527a01-463a-4dbd-b80f-3ebde1eeef6c_800x.jpg?v=1683795514"} data={"Blazer"} />
                <TestimonialTile enquireForm={enquireForm} img={"https://fabricbhandar.com/cdn/shop/files/WhatsApp_Image_2023-05-27_at_12.01.17_fee2731e-33fd-408d-89f4-8f482aadeafd.jpg?v=1694188057&width=533"} data={"Shirt"} />
                <TestimonialTile enquireForm={enquireForm} img={"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/8/0/tr:w-300,/808f928AWIA124BLUE_1.jpg"} data={"Dress"} />
                <TestimonialTile enquireForm={enquireForm} img={"https://rukminim2.flixcart.com/image/850/1000/xif0q/jean/v/l/j/40-udjen0894-u-s-polo-assn-denim-co-original-imagsysg78qtnnzg.jpeg?q=20"} data={"Jeans"} />
                <TestimonialTile enquireForm={enquireForm} img={"https://5.imimg.com/data5/SELLER/Default/2023/9/348717700/QK/SF/TW/183128398/ladies-winter-hoodies-500x500.jpg"} data={"Hoodies"} />

            </Marquee>
        </div>
    )
}

export default MarqueeComp