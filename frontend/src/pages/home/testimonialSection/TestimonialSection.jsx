import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import "./style.css"
import TestimonialTile from "./testimonialTile/TestimonialTile";
import Collections from "../collections/Collections";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`slickArrowStyle ${className} `}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`slickArrowStyle ${className} `}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

export default class TestimonialSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }



    render() {

        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 4, // default desktop values
            slidesToScroll: 2,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1250,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 964,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };


        return (
            <div className="controlx">

                <Slider
                    {...settings}
                    asNavFor={this.state.nav1}
                    ref={slider => (this.slider2 = slider)}
                    slidesToShow={4}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    className="sliderStyle"

                >

                    <TestimonialTile enquireForm={this.props.enquireForm} img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuIsMWWCwQHqlTZp1UvS4LhBf-kk_KiNPgrJQTN5MVjW8OCZquQT6SWjVAhLyjw1kshcA&usqp=CAU"} data={"Jacket"} />
                    <TestimonialTile enquireForm={this.props.enquireForm} img={"https://thehouseofrare.com/cdn/shop/files/IMG_0120_1_be527a01-463a-4dbd-b80f-3ebde1eeef6c_800x.jpg?v=1683795514"} data={"Blazer"} />
                    <TestimonialTile enquireForm={this.props.enquireForm} img={"https://fabricbhandar.com/cdn/shop/files/WhatsApp_Image_2023-05-27_at_12.01.17_fee2731e-33fd-408d-89f4-8f482aadeafd.jpg?v=1694188057&width=533"} data={"Shirt"} />
                    <TestimonialTile enquireForm={this.props.enquireForm} img={"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/8/0/tr:w-300,/808f928AWIA124BLUE_1.jpg"} data={"Dress"} />
                    <TestimonialTile enquireForm={this.props.enquireForm} img={"https://rukminim2.flixcart.com/image/850/1000/xif0q/jean/v/l/j/40-udjen0894-u-s-polo-assn-denim-co-original-imagsysg78qtnnzg.jpeg?q=20"} data={"Jeans"} />
                    <TestimonialTile enquireForm={this.props.enquireForm} img={"https://5.imimg.com/data5/SELLER/Default/2023/9/348717700/QK/SF/TW/183128398/ladies-winter-hoodies-500x500.jpg"} data={"Hoodies"} />

                </Slider>
            </div>
        );
    }
}