export default function LanguageSwitcher({
                                           language,
                                           setLanguage,
                                         }) {
  return (
      <div className="language-switcher">
        <button
            className={language === 'en' ? 'is-active' : ''}
            onClick={() => setLanguage('en')}
        >
          EN
        </button>

        <span>/</span>

        <button
            className={language === 'de' ? 'is-active' : ''}
            onClick={() => setLanguage('de')}
        >
          DE
        </button>
      </div>
  );
}
