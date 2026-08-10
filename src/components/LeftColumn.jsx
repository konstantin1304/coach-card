export default function LeftColumn({ t }) {
  return (
      <section className="column column--left">
        <div className="intro">
          <h1 className="intro__title">
            {t.intro.title}
          </h1>
        </div>

        <div className="profile-card">
          <div className="profile-card__heading">
            <h2>{t.profile.name}</h2>
            <p>{t.profile.role}</p>
          </div>

          <div className="profile-card__photo">
            PHOTO
          </div>

          <p className="profile-card__tagline">
            {t.profile.tagline}
          </p>

          <a href="#services" className="profile-card__button">
            {t.profile.button}
          </a>
        </div>

        <div className="about">
          <h2>{t.about.title}</h2>

          <p>
            {t.about.text1}
          </p>

          <p>
            {t.about.text2}
          </p>

          <div className="about__keywords">
            {t.about.keywords.map((keyword, index) => (
                <span key={index}>
              {keyword}
            </span>
            ))}
          </div>
        </div>
      </section>
  );
}
