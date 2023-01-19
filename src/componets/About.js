import React from "react"
import { Image } from "react-bootstrap"
import AboutImg from '../assets/IMG_2104-remini-enhanced-transformed.png'

function About() {
    return (
        <>
        <div className="header">
            <div className="desc" >
                <Image className="img" src={AboutImg} />
                <h2>
                    Hi, I'm Javi. I love creating things that people all over the world can interact with.
                    I took a beginners coding class when I was in high school and my interest in tech and coding blossomed from there.
                    I put my interest in programming on hold for a while to explore career options in restaurants. 
                    I realized that restaurants don't provide the work-life balance I'm looking for, so I turned back to coding around summer of 2022
                    and have been working towards my goal to become a software engineer ever since. 
                </h2>   
            </div>
            </div>
        </>

    )
}
export default About