import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
// import "./style.css"
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

export default class TestimonialCollectionSection extends Component {

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

                    <Collections img={"https://5.imimg.com/data5/BB/LG/DJ/SELLER-311779/60s-lea-linen-fabric.jpg"} data={"Linen"} />
                    <Collections img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuUfhaIciX_8X360BuEL24gUkQFhiajRv0hA&usqp=CAU"} data={"Silk"} />
                    <Collections img={"https://tiimg.tistatic.com/fp/1/007/726/beige-brushed-cotton-fabric-957.jpg"} data={"Cotton"} />
                    <Collections img={"https://m.media-amazon.com/images/I/51fMP84MNRL.jpg"} data={"Rayon"} />
                    <Collections img={"https://5.imimg.com/data5/BB/LG/DJ/SELLER-311779/60s-lea-linen-fabric.jpg"} data={"Linen"} />
                    <Collections img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuUfhaIciX_8X360BuEL24gUkQFhiajRv0hA&usqp=CAU"} data={"Silk"} />
                    <Collections img={"https://tiimg.tistatic.com/fp/1/007/726/beige-brushed-cotton-fabric-957.jpg"} data={"Cotton"} />
                    <Collections img={"https://m.media-amazon.com/images/I/51fMP84MNRL.jpg"} data={"Rayon"} />

                </Slider>
            </div>
        );
    }
}