import  "./About.css"

import { useState, useEffect } from "react"
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs"

import image1 from "../../Images/aboutImage1.jpeg"
import image2 from "../../Images/aboutImage2.jpeg"
import image3 from "../../Images/aboutImage3.jpeg"
import image4 from "../../Images/aboutImage4.jpeg"
import image5 from "../../Images/aboutImage5.jpeg"

export default function About() {
    
    const [position, setPosition] = useState(0)

    const images = [image1, image2, image3, image4, image5]
    const [image, setImage] = useState(images[position])

    const titles = ["Backing tracks para artistas y DJs", "Música original y versiones adaptadas", "Banda sonora y sonido ambiental", "Edición de audio para publicaciones", "Música adaptada para negocios"]
    const [title, setTitle] = useState(titles[position])
    
    const texts = ["Arreglamos tus backings o los hacemos a medida adaptados a tu estilo de música o tu tono de voz y con los instrumentos que quieras añadir o quitar. Ajuste de tempo, cantidad de rondas, repetición de estrofas, cambios de intro, finales enlazados con la siguiente canción, volúmenes, formato de reproducción...", "Componemos la canción que estás buscando para tu marca o tu canal, jingles, promociones, el himno de tu familia, canciones de amor o para una despedida... o hacemos la versión que quieras al estilo que más te guste", " Para cortometrajes o largometrajes, todo el sonido, música y edición del audio. ¿Necesitas sonido ambiente para tu corto o película? Ruido de tráfico, aviones, sonidos de naturaleza, mar, truenos, pájaros, puertas, pasos... todo el sonido para cine grabado para cada ocasión", "¡Multiplica tu audiencia con el audio perfecto! Mejoramos el audio de tus publicaciones en redes sociales para aumentar tu audiencia. Canciones originales, versiones adaptadas, ritmo de imágenes con música, sonido ambiente, música de intro y outro...", "Las tiendas con música ambiental pueden incrementar sus ventas hasta en un 40% gracias a que se crea el ambiente necesario para estimular las emociones. Te asesoramos para que cuentes con el concepto de música que fomente la armonía para fortalecer la personalidad de tu marca y generes empatía entre tus clientes. Así mismo podrás aumentar la productividad de tus empleados"]
    const [text, setText] = useState(texts[position])
    
    const prices = ["Precio 1", "Precio 2", "Precio 3", "Precio 4", "Precio 5"]
    const [price, setPrice] = useState(prices[position])

    useEffect(() => {
        setImage(images[position])
        setTitle(titles[position])
        setText(texts[position])
        setPrice(prices[position])
    }, [position])

    const onLeft = () => {
        if (position === 0) {
            setPosition(4)
        } else {
            setPosition(position - 1)
        }
    }

    const onRight = () => {
        if (position === 4) {
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
            <div id="proyects"></div>
        </div>
    )
}