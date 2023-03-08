import  "./About.css"

import image1 from "../../Images/header.png"
import image2 from "../../Images/headerMic1.png"
import image3 from "../../Images/headerMic2.png"

export default function About() {

    return (
        <div className="about">
            <div className="aboutContainer">
                <ul className="aboutContainerSlider">
                    <li className="aboutContainerSliderSlide" id="slide1">
                        <div className="aboutContainerSliderSlideImage"><img src={image1} alt={"image1"}></img></div>
                        <div className="aboutContainerSliderSlideData">
                            <p className="aboutContainerSliderSlideDataTitle">Lorem ipsum dolor sit.</p>
                            <p className="aboutContainerSliderSlideDataSubtitle">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis commodi quia ipsum, necessitatibus deserunt sint!</p>
                            <span className="aboutContainerSliderSlideDataPrice">Price</span>
                        </div>
                    </li>
                    <li className="aboutContainerSliderSlide" id="slide2">
                        <div className="aboutContainerSliderSlideImage"><img src={image2} alt={"image2"}></img></div>
                        <div className="aboutContainerSliderSlideData">
                            <p className="aboutContainerSliderSlideDataTitle">Lorem ipsum dolor sit.</p>
                            <p className="aboutContainerSliderSlideDataSubtitle">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis commodi quia ipsum, necessitatibus deserunt sint!</p>
                            <p className="aboutContainerSliderSlideDataPrice">Price</p>
                        </div>
                    </li>
                    <li className="aboutContainerSliderSlide" id="slide3">
                        <div className="aboutContainerSliderSlideImage"><img src={image3} alt={"image3"}></img></div>
                        <div className="aboutContainerSliderSlideData">
                            <p className="aboutContainerSliderSlideDataTitle">Lorem ipsum dolor sit.</p>
                            <p className="aboutContainerSliderSlideDataSubtitle">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis commodi quia ipsum, necessitatibus deserunt sint!</p>
                            <p className="aboutContainerSliderSlideDataPrice">Price</p>
                        </div>
                    </li>
                </ul>
                <ul className="aboutContainerNavbar">
                    <li className="aboutContainerNavbarLink"><a href="#slide1">.</a></li>
                    <li className="aboutContainerNavbarLink"><a href="#slide2">.</a></li>
                    <li className="aboutContainerNavbarLink"><a href="#slide3">.</a></li>
                </ul>
            </div>
        </div>
    )
}