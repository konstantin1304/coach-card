export default function LeftColumn() {
  return (
      <section className="column column--left">
        <div className="intro">
          <h1 className="intro__title">
            Professional
            <br />
            Coaching
          </h1>
        </div>

        <div className="profile-card">
          <div className="profile-card__heading">
            <h2>Juriy</h2>
            <p>Personal teacher</p>
          </div>

          <div className="profile-card__photo">
            PHOTO
          </div>

          <p className="profile-card__tagline">
            Teaching Mathematics and Physics
          </p>

          <a href="#services" className="profile-card__button">
            View services
          </a>
        </div>

        <div className="about">
          <h2>About me</h2>

          <p>
            I help people.
          </p>

          <p>
            My approach is individual, structured and focused on real changes.
          </p>

          <div className="about__keywords">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
          </div>
        </div>
      </section>
  );
}
