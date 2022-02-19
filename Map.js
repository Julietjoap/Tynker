import React from 'react'
import './Map.css'
import Mappics from './images/map-blue.png'
import Dot from './images/dots.svg'
import Maker from './images/maker.png'
import Quote from './images/quote.svg'
import Charlotte from './images/charlotte.png'
import Valerie from './images/valerie.png'
import Common from './images/common.webp'
import Aasl from './images/award-aasl.png'
import Academic from './images/award-smart-media.png'
import Parents from './images/award-parents-choice.png'
import Award from './images/award-twilly.png'
import National from './images/award-national-parenting-products.png'
import Moms from './images/award-moms-choice.png'
import Digital from './images/digital.webp'
import Picks from './images/parents-picks.webp'

function Map(){
    return(
        <>
          <div class ="mapContain">
            <div class="map">
                <div class="first-map">
                    <h1>Join Tynker's Global Community</h1>
                    <button class="signUp">SIGN UP FREE</button>
                </div>
                <img  src={Mappics}></img>
                <div class="dot">
                    <img src={Dot}></img>
                    <div class="blackCircle">
                      <h1>60</h1> 
                      <h1>Million</h1>
                      <p>students</p>
                     
                    </div>
                </div>
                <div class="dot2">
                    <img src={Dot}></img>
                    <div class="blackCircle2">
                      <h1>Over</h1> 
                      <h1>7 Billion</h1>
                      <p>lines of code</p>
                     
                    </div>
                </div>
                <div class="dot3">
                    <img src={Dot}></img>
                    <div class="blackCircle3">
                      <h1>Over 100</h1> 
                      <h1>Thousand</h1>
                      <p>Schools</p>
                     
                    </div>
                </div>
            </div>
            <div class="threeCards">
                <div class="cardOne">
                    <div class="quoteContain">
                        <img class="quote1"src={Quote}></img>
                        <blockquote>
                            <p>I thought a game was going to be extremely
                            hard to make, but
                            Tynker made it really
                            easy.
                            </p>
                        </blockquote>
                    </div>
                    <div class="cardImage">
                        <p>Tynker Featured <br></br>Maker</p>
                        <img class="maker" src={Maker}></img>
                    </div>
                    
                </div>
                <div class="cardTwo">
                <div class="quoteContain">
                        <img class="quote1"src={Quote}></img>
                        <blockquote>
                            <p>There's so much opportunity once they understand how coding works. It's amazing to see them create incredible things themselves.
                            </p>
                        </blockquote>
                    </div>
                    <div class="cardImage">
                        <p>Charlotte R.
                        <br></br><span class="breakp">Parent | Melbourne, <br></br>Australia</span></p>
                        <img class="maker" src={Charlotte}></img>
                    </div>
                </div>
                <div class="cardThree">
                <div class="quoteContain">
                        <img class="quote1"src={Quote}></img>
                        <blockquote>
                            <p>Tynker has made programming fun, exciting, and simple and will help lead kids into their future.
                            </p>
                        </blockquote>
                    </div>
                    <div class="cardImage">
                        <p>Valerie S.
                        <br></br><span class="breakp">5th Grade Teacher | <br></br>California, US</span></p>
                        <img class="maker" src={Valerie}></img>
                    </div>
                </div>
            </div>
            <div class="mapIconsContain">
                <img class="iconsImage" src={Common}></img>
                <img class="iconsImage" src={Aasl}></img>
                <img class="iconsImage" src={Academic}></img>
                <img class="iconsImage" src={Parents}></img>
                <img class="iconsImage" src={Award}></img>
                <img class="iconsImage" src={National}></img>
                <img class="iconsImage" src={Moms}></img>
                <img class="iconsImage" src={Digital}></img>
                <img class="iconsImage" src={Picks}></img>
            </div>

          </div>
          
          
           </>
    )
}

export default Map