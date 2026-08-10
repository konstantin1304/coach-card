export default function RightColumn({t}) {
  console.log(t.benefits)
  return (
      <section className="column column--right">
        <div className="benefits">
          <h2>{t.benefits.title}</h2>

          {t.benefits.items.map((item, index) => (
              <div className="benefit" key={index}>
            <span>
              {String(index + 1).padStart(2, '0')}
            </span>

                <p>{item}</p>
              </div>
          ))}
        </div>

        <div className="wide-image">
          IMAGE
        </div>

        <div className="services" id="services">
          <h2>{t.services.title}</h2>

          {t.services.items.map((service, index) => (
              <div className="service-card" key={index}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
          ))}

          <a href="#contacts" className="services__button">
            {t.services.button}
          </a>
        </div>

        <div className="contacts" id="contacts">
          <h2>{t.contacts.title}</h2>

          <a href="#">
            {t.contacts.telegram}
          </a>

          <a href="mailto:hello@example.com">
            {t.contacts.email}
          </a>
        </div>
      </section>
  );
}
