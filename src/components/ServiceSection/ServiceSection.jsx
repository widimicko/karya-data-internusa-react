import "./style.css";

const ServiceSection = ({ content }) => {
  const { description, services } = content;
  const cardColor = ["blue", "orange", "green", "purple"];

  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>Services</h2>
          <p>{description}</p>
        </header>

        <div className="row gy-4">
          {services.length ? (
            services.map((service, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div
                  className={`service-box ${
                    cardColor[Math.floor(Math.random() * cardColor.length)]
                  }`}
                >
                  <i className={`${service.icon} icon`}></i>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <a href="#more" className="read-more">
                    <span>Read More</span> <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">There's no data available yet</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
