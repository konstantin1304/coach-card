export default function RightColumn() {
  return (
      <section className="column column--right">
        <div className="benefits">
          <h2>Why me</h2>

          <div className="benefit">
            <span>01</span>
            <p>Individual teaching</p>
          </div>

          <div className="benefit">
            <span>02</span>
            <p>Clear strategies</p>
          </div>

          <div className="benefit">
            <span>03</span>
            <p>Personal development</p>
          </div>

          <div className="benefit">
            <span>04</span>
            <p>Online and offline sessions</p>
          </div>
        </div>

        <div className="wide-image">
          IMAGE
        </div>

        <div className="services" id="services">
          <h2>My services</h2>

          <div className="service-card">
            <h3>Individual session</h3>
            <p>60 minutes</p>
          </div>

          <div className="service-card">
            <h3>Career coaching</h3>
            <p>Personal strategy</p>
          </div>

          <div className="service-card">
            <h3>Coaching package</h3>
            <p>4 sessions</p>
          </div>

          <div className="service-card">
            <h3>Long-term coaching</h3>
            <p>Individual program</p>
          </div>

          <a href="#contacts" className="services__button">
            Book a session
          </a>
        </div>

        <div className="contacts" id="contacts">
          <h2>Contacts</h2>

            <a href="#">Telegram</a>
          <a href="mailto:hello@example.com">Email</a>
        </div>
      </section>
  );
}
