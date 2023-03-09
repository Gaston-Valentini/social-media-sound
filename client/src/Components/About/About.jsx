import  "./About.css"

import { useState, useEffect } from "react"
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs"

import image1 from "../../Images/header.png"
import image2 from "../../Images/headerMic1.png"
import image3 from "../../Images/headerMic2.png"

export default function About() {
    
    const [position, setPosition] = useState(0)

    const images = [image1, image2, image3]
    const [image, setImage] = useState(images[position])

    const titles = ["Título 1", "Título 2", "Título 3"]
    const [title, setTitle] = useState(titles[position])
    
    const texts = ["Texto 1", "Texto 2", "Texto 3"]
    const [text, setText] = useState(texts[position])
    
    const prices = ["Precio 1", "Precio 2", "Precio 3"]
    const [price, setPrice] = useState(prices[position])

    useEffect(() => {
        setImage(images[position])
        setTitle(titles[position])
        setText(texts[position])
        setPrice(prices[position])
    }, [position])

    const onLeft = () => {
        if (position === 0) {
            setPosition(2)
        } else {
            setPosition(position - 1)
        }
    }

    const onRight = () => {
        if (position === 2) {
            setPosition(0)
        } else {
            setPosition(position + 1)
        }
    }

    return (
        <div id="services" className="about">
            <div className="titles">
                <p className="titlesTitle">Formulario</p>
                <p className="titlesSubtitle">Háblanos de tu video</p>
            </div>
            <div className="aboutSlider">
                <div className="aboutSliderImage"><img src={image} alt="imageSlider"/></div>
                <div className="aboutSliderData">
                    <p className="aboutSliderDataTitle">{title}</p>
                    <p className="aboutSliderDataSubtitle">{text}</p>
                    <button className="aboutSliderDataButton">{price}</button>
                </div>
            </div>
            <div className="aboutNavbar">
                <BsFillArrowLeftCircleFill className="aboutNavbarButton" onClick={onLeft}/>
                <BsFillArrowRightCircleFill className="aboutNavbarButton" onClick={onRight}/>
            </div>
            
        </div>
    )
}