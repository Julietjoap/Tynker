import React from 'react'
import './Tdiv.css'
import squiggleTop from './images/bg-squiggle-top.svg'


function Tdiv(){
    return(
        <div class="code-tynker">
            <img class="squiggleTop" src={squiggleTop}></img>
            <div class="Tdiv-text">
                <h1>Why should kids learn to code with tynker?</h1>
                <p>Because technology is so integrated into virtually every aspect of our lives, learning about it is more</p>
                <p>important than ever. For kids, our coding platform makes it convenient and fun to gain knowledge</p>
                <p>that will serve them well throughout their lives. You can count on our trusted methods to help them</p>
                <p>develop and grow their capabilities with computers.</p>
                <br></br>
                <p>Tynker isn’t just for schools and coding camps, though. Parents who value STEM education and want</p>
                <p>their children to know how to learn to code should know that our kids programming platform can be</p>
                <p>used at home, too. There are individual and family home plans, and our online coding classes for kids</p>
                <p>are a great way for them to gain the supplemental STEM skills needed for the world of the future.</p>
            </div>
            
        </div>
    )
}

export default Tdiv