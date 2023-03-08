import style from "./About.module.css"

import image1 from "../../Images/header.png"
import image2 from "../../Images/headerMic1.png"
import image3 from "../../Images/headerMic2.png"

export default function About() {

    

    return (
        <div className={style.about}>
            <div className={style.aboutContainer}>
                <ul className={style.aboutContainerSlider}>
                    <li className={style.aboutContainerSliderSlide} id="slide1"><img src={image1}></img></li>
                    <li className={style.aboutContainerSliderSlide} id="slide1"><img src={image2}></img></li>
                    <li className={style.aboutContainerSliderSlide} id="slide1"><img src={image3}></img></li>
                </ul>
                <ul className={style.aboutContainerNavbar}>
                    <li className={style.aboutContainerNavbarLink}><a href="#slide1">1</a></li>
                    <li className={style.aboutContainerNavbarLink}><a href="#slide2">2</a></li>
                    <li className={style.aboutContainerNavbarLink}><a href="#slide3">3</a></li>
                </ul>
            </div>
        </div>
    )
}