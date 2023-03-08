import style from "./About.module.css"

import image1 from "../../Images/header.png"
import image2 from "../../Images/headerMic1.png"
import image3 from "../../Images/headerMic2.png"


export default function About() {
    return (
        <div id="services"className={style.about}>
            <div className={style.aboutTitles}>
                <p className={style.aboutTitlesTitle}>Qué hacemos?</p>
                <p className={style.aboutTitlesSubtitle}>Servicios</p>
            </div>
            <div className={style.aboutCards}>
                <div className={style.aboutCardsCard}>
                    <div className={style.aboutCardsCardImage}>
                        <img src={image1} alt={"image1"}></img>
                    </div>
                    <div className={style.aboutCardsCardData}>
                        <p className={style.aboutCardsCardDataTitle}>Mobile Studio</p>
                        <p className={style.aboutCardsCardDataSubtitle}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi. Neque minima placeat porro, earum temporibus at a eaque nemo, consequuntur commodi voluptate ad corporis voluptatibus et ipsa modi provident.</p>
                        <button className={style.aboutCardsCardDataButton}>Saber más</button>
                    </div>
                </div>
                <div className={style.aboutCardsCard}>
                    <div className={style.aboutCardsCardImage}>
                        <img src={image2} alt={"image2"}></img>
                    </div>
                    <div className={style.aboutCardsCardData}>
                        <p className={style.aboutCardsCardDataTitle}>Mobile Studio</p>
                        <p className={style.aboutCardsCardDataSubtitle}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi. Neque minima placeat porro, earum temporibus at a eaque nemo, consequuntur commodi voluptate ad corporis voluptatibus et ipsa modi provident.</p>
                        <button className={style.aboutCardsCardDataButton}>Saber más</button>
                    </div>
                </div>
                <div className={style.aboutCardsCard}>
                    <div className={style.aboutCardsCardImage}>
                       
                        <img src={image3} alt={"image3"}></img>
                    </div>
                    <div className={style.aboutCardsCardData}>
                        <p className={style.aboutCardsCardDataTitle}>Mobile Studio</p>
                        <p className={style.aboutCardsCardDataSubtitle}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi. Neque minima placeat porro, earum temporibus at a eaque nemo, consequuntur commodi voluptate ad corporis voluptatibus et ipsa modi provident.</p>
                        <button className={style.aboutCardsCardDataButton}>Saber más</button>
                    </div>
                </div>
            </div>
        </div>
    )
}