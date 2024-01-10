import { useEffect } from "react";
import PageAuth from "../components/Layouts/PageAuth";
import { useParams } from "react-router-dom";
import { getDetailSurahQuran } from "../services/api";
import { useState } from "react";

const DetailSurahPage = () => {
  const { id } = useParams();
  const [surahQuran, setSurahQuran] = useState({});

  useEffect(() => {
    if (id) {
      getDetailSurahQuran({ id }).then((res) => setSurahQuran(res));
    }
  }, [id]);
  console.log(surahQuran);
  return (
    <PageAuth>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Detail Surah - {id}
      </div>
    </PageAuth>
  );
};

export default DetailSurahPage;
