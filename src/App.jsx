import { useState } from 'react';
import LanguageSwitcher from './components/LanguageSwitcher';
import LeftColumn from './components/LeftColumn';
import RightColumn from './components/RightColumn';
import { translations } from './data/translations';

export default function App() {
  const [language, setLanguage] = useState('en');

  const t = translations[language];
  return (
      <>
        <LanguageSwitcher
            language={language}
            setLanguage={setLanguage}
        />

        <main className="page">
          <LeftColumn t={t} />
          <RightColumn t={t} />
        </main>
        jojo
      </>
  );
}
