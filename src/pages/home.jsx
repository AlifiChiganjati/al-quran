import { useState } from "react";
import { SurahTitle } from "../components/Elements/Text";
import PageAuth from "../components/Layouts/PageAuth";
import { Section } from "./pages.style";
import { useEffect } from "react";
import { CardContainer } from "../components/Elements/Card";
import {
  SurahNomor,
  SurahText,
  Title,
} from "../components/Elements/Text/Text.style";
import { useNavigate } from "react-router-dom";
import { getSurahQuran } from "../services/api";

const HomePage = () => {
  const [quran, setQuran] = useState([]);
  {
    /*get api ada di folder src/helper/api.jsx */
  }
  useEffect(() => {
    getSurahQuran()
      .then((res) => {
        setQuran(res);
      })
      .catch((err) => {
        if (err.code !== 200) console.info(err.message);
      });
  }, []);

  const navigate = useNavigate();

  return (
    <PageAuth>
      <Section>
        <Title as="h2">Surah</Title>
        {/* boss ini inline css sementara nanti gua mau buat componenet di folder Fragments ini biar cepet aja dulu */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {quran.map((surah, i) => (
            <CardContainer
              key={i}
              to={`/al-quran/surah/${surah.nomor}`}
              onClick={() => navigate(`/al-quran/${surah.nomor}`)}
            >
              <SurahNomor>{surah.nomor}</SurahNomor>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  paddingLeft: "52px",
                }}
              >
                <SurahTitle as="h3">{surah.namaLatin}</SurahTitle>
                <SurahTitle as="h3">{surah.nama}</SurahTitle>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  paddingLeft: "52px",
                }}
              >
                <SurahText>{surah.arti}</SurahText>
                <SurahText>{surah.jumlahAyat} Ayat</SurahText>
              </div>
            </CardContainer>
          ))}
        </div>
      </Section>
    </PageAuth>
  );
};

export default HomePage;
