import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import pic1 from "../assets/img/pic1.png";
import pic2 from "../assets/img/pic2.png";
import pic3 from "../assets/img/pic3.png";
import pic4 from "../assets/img/pic4.png";
import pic5 from "../assets/img/pic5.png";

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
                        <p>The professional skills outlined below have been developed and refined through<br></br>formal education, self-learning, work experience, and personal projects.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={pic1} alt="Image" />
                                <h5>SOC tools</h5>
                            </div>
                            <div className="item">
                                <img src={pic2} alt="Image" />
                                <h5>Pentesting tools</h5>
                            </div>
                            <div className="item">
                                <img src={pic3} alt="Image" />
                                <h5>Virtual Computing</h5>
                            </div>
                            <div className="item">
                                <img src={pic4} alt="Image" />
                                <h5>Programming Languages</h5>
                            </div>
                            <div className="item">
                                <img src={pic5} alt="Image" />
                                <h5>Cloud Computing</h5>
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
