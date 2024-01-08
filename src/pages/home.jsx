import { SurahTitle } from "../components/Elements/Text";
import PageAuth from "../components/Layouts/PageAuth";
import { Section } from "./pages.style";

const HomePage = () => {
  return (
    <PageAuth>
      <Section>
        <SurahTitle as="h2">Surah</SurahTitle>
      </Section>
    </PageAuth>
  );
};

export default HomePage;
