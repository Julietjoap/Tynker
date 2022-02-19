import React from 'react'
import "./Tdiv2.css"
import Apple from './images/logo-apple.png'
import Google from './images/logo-googleedu.png'
import Microsoft from './images/logo-microsoft.png'
import Pbs from './images/logo-pbs.png'
import Bbc from './images/logo-bbc-learning.png'
import Facebook from './images/logo-facebook.png'
import Lego from './images/logo-lego.png'
import Minecraft from './images/logo-mc.png'
import Mattel from './images/logo-mattel.png'
import Hot from './images/logo-hotwheels.png'
import Barbie from './images/logo-barbie.png'

function Tdiv2(){
    return(
        <div class="mainContainer">
            <div class="textTdiv">
            <h1>Trusted by Leading Brands</h1>
                <p>Our methods for learning to code all are provided within a safe, moderated community that is built</p>
                <p>around encouraging students to gain confidence in their abilities and do so without fear of failure.</p>
            </div>
            <div class="tdivImg">
                <img class="tImg" src={Apple}></img>
                <img class="tImg" src={Google}></img>
                <img class="tImg" src={Microsoft}></img>
                <img class="tImg" src={Pbs}></img>
                <img class="tImg" src={Bbc}></img>
                <img class="tImg" src={Facebook}></img>
            </div>
                <div class="tdivImg2">
                <img class="tImg2" src={Lego}></img>
                <img class="tImg2" src={Minecraft}></img>
                <img class="tImg2" src={Mattel}></img>
                <img class="tImg2" src={Hot}></img>
                <img class="tImg2" src={Barbie}></img>
            </div>
        </div>
    )
}

export default Tdiv2