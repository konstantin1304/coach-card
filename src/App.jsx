import LanguageSwitcher from './components/LanguageSwitcher';
import LeftColumn from './components/LeftColumn';
import RightColumn from './components/RightColumn';

export default function App() {
  return (
      <>
        <LanguageSwitcher />

        <main className="page">
          <LeftColumn />
          <RightColumn />
        </main>
      </>
  );
}
