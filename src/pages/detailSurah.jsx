import { useEffect } from "react";
import PageAuth from "../components/Layouts/PageAuth";
import { useParams } from "react-router-dom";
import { getDetailSurahQuran } from "../services/api";
import { useState } from "react";
import { Section } from "./pages.style";
import { AyatCardContainer } from "../components/Elements/Card";
import Text, { ArabText } from "../components/Elements/Text";

const DetailSurahPage = () => {
  const { id } = useParams();
  const [surahQuran, setSurahQuran] = useState({});

  useEffect(() => {
    if (id) {
      getDetailSurahQuran({ id }).then((res) => setSurahQuran(res));
    }
  }, [id]);

  return (
    <PageAuth>
      <Section>
        <div>
          <AyatCardContainer>
            {Array.isArray(surahQuran.ayat) &&
              surahQuran.ayat.map((item, i) => (
                <div key={i}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>
                      <ArabText>
                        {item.teksArab} <span>{item.nomorAyat}</span>
                      </ArabText>
                    </div>
                    <Text>{item.teksLatin}</Text>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <Text>Arti:</Text>
                      <Text>
                        {item.nomorAyat}. {item.teksIndonesia}
                      </Text>
                    </div>
                  </div>
                  <br />
                  <hr />
                  <br />
                </div>
              ))}
          </AyatCardContainer>
        </div>
      </Section>
    </PageAuth>
  );
};

export default DetailSurahPage;
