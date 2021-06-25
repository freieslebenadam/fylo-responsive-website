import React from 'react'
import '../style/Intro.scss'
import img from '../images/illustration-intro.png'
import Button from './Button'

function Intro() {
    return (
        <article id="intro">
            <div className="bg-curve"></div>
            <div className="container2">
                <section className="intro">
                    <div className="intro-pic">
                        <img src={img} alt="Picture not found" />
                    </div>
                    <h1>All your files in one secure loaction, accessible anywhere.</h1>
                    <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family and co-workers.</p>
                    <Button type="link" href="#">
                        Get Started
                    </Button>
                </section>
            </div>
        </article>
    )
}

export default Intro