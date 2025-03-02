import one from "../assets/skills/one.png";
import two from "../assets/skills/two.png";
import three from "../assets/skills/three.png";
import four from "../assets/skills/four.png";
import five from "../assets/skills/five.png";
import six from "../assets/skills/six.png";
import seven from "../assets/skills/seven.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
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
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Skills that I've developed through diverse projects and experiences<br></br>You can scroll left and right</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={one} alt="Image" />
                                <h5>Project Management</h5>
                            </div>
                            <div className="item">
                                <img src={two} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={three} alt="Image" />
                                <h5>Machine Learning & Deep Learning</h5>
                            </div>
                            <div className="item">
                                <img src={four} alt="Image" />
                                <h5>Generative AI & NLP</h5>
                            </div>
                            <div className="item">
                                <img src={five} alt="Image" />
                                <h5>Competitive Programming</h5>
                            </div>
                            <div className="item">
                                <img src={six} alt="Image" />
                                <h5>Bioinformatics</h5>
                            </div>
                            <div className="item">
                                <img src={seven} alt="Image" />
                                <h5>Blogging</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
