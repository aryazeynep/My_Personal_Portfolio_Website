import colorSharp from "../assets/img/color-sharp2.png"
import './index.scss'
import { useEffect, useState } from 'react'
import {
  faPython,
  faCuttlefish, 
  faGithub,
  faHtml5,
  faCss3,
  faJava,
} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'

export const AboutMe = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="ab" id="about">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="ab-bx wow zoomIn">
                        <h2>About Me</h2>
                        <p>Enthusiastic about ML, DL, and Generative AI—diving deeper into bioinformatics and NLP! <br></br> Also exploring competitive programming and web development.</p>
                        <div className="stage-cube-cont">
                            <div className="cubespinner">
                            <div className="face1">
                                <FontAwesomeIcon icon={faPython} color="#3776AB" />
                            </div>
                            <div className="face2">
                                <FontAwesomeIcon icon={faCuttlefish} color="#00599C" /> {/* C++ için alternatif */}
                            </div>
                            <div className="face3">
                                <FontAwesomeIcon icon={faGithub} color="#181717" />
                            </div>
                            <div className="face4">
                                <FontAwesomeIcon icon={faHtml5} color="#E34F26" />
                            </div>
                            <div className="face5">
                                <FontAwesomeIcon icon={faCss3} color="#1572B6" />
                            </div>
                            <div className="face6">
                                <FontAwesomeIcon icon={faJava} color="#007396" />
                            </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-other" src={colorSharp} alt="Image" />
    </section>
  )
}
