import React, { useEffect } from "react";
import { useState } from "react";
import  "./AdviceCard.css"
import DesktopDivider from "../Assets/pattern-divider-desktop.svg"
import MobileDivider from "../Assets/pattern-divider-mobile.svg"
import Dice from "../Assets/icon-dice.svg"
import axios from "axios";

const AdviceCard = () => {
    const [advice, setAdvice] = useState ('')

    const getAdvice = async() => {
        const response =await axios.get('https://api.adviceslip.com/advice')
        const advice = await response.data.slip;
        setAdvice(advice)
    }

    useEffect( () => {
        getAdvice();
    }, []);

    return(
 <section>
 <div className="card__container">
    <div className="card__wrapper">
        <h4>ADVICE #{advice.id}</h4>
        <p>"{advice.advice}"</p>
        <img src={DesktopDivider} className="desktop_divider" alt="divider"/>
        <img src={MobileDivider} className="mobile_divider" alt="divider"/>
        < div id="dice" onClick={getAdvice}>
        <img src={Dice} className="dice" alt="dice"/>
        </div>
    </div>
 </div>

 </section>
    )
}




export default AdviceCard;