import React from 'react'
import { Carousel } from 'antd';
import CarouselImage1 from "../../../../Assets/Images/Promotion/Hryder1.png"
import CarouselImage2 from "../../../../Assets/Images/Promotion/Hryder2.png"
import CarouselImage3 from "../../../../Assets/Images/Promotion/Hryder3.png"
import CarouselImage4 from "../../../../Assets/Images/Promotion/Hryder4.png"
import CarouselImage5 from "../../../../Assets/Images/Promotion/Hryder5.png"
import CarouselImage6 from "../../../../Assets/Images/Promotion/Hryder6.png"
import CarouselImage7 from "../../../../Assets/Images/Promotion/Hryder7.png"

const contentStyle = {
    width: "100%",
    textAlign: 'center',
};



function carouselCard() {
    return (
        <>
            <div>
                <Carousel autoplay >
                    <div>
                        <img style={contentStyle} src={CarouselImage1} alt="..." />
                    </div>
                    <div>
                        <img style={contentStyle} src={CarouselImage2} alt="..." />
                    </div>
                    <div>
                        <img style={contentStyle} src={CarouselImage3} alt="..." />
                    </div>
                    <div>
                        <img style={contentStyle} src={CarouselImage4} alt="..." />
                    </div>
                    <div>
                        <img style={contentStyle} src={CarouselImage5} alt="..." />
                    </div>
                    <div>
                        <img style={contentStyle} src={CarouselImage6} alt="..." />
                    </div>
                    <div>
                        <img style={contentStyle} src={CarouselImage7} alt="..." />
                    </div>

                </Carousel>
            </div>
        </>

    )
}

export default carouselCard