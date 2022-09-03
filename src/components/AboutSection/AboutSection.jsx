import aboutImage from "../../assets/images/about.jpg";
import "./style.css";

const AboutSection = ({ content }) => {
  const { description, title } = content;

  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row gx-0">
          <div
            className="col-lg-6 d-flex flex-column justify-content-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="content">
              <h3>Who We Are</h3>
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="text-center text-lg-start">
                <a
                  href="#more"
                  className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  <span>Read More</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div
            className="col-lg-6 d-flex align-items-center"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <img src={aboutImage} className="img-fluid" alt="About" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
