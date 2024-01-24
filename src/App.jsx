import { useState, useEffect } from "react";
import fetchData from "./views/component/Api";
import LocalStorage from "./views/component/LocalStorage";
import Home from "./views/pages/Home";
import Projects from "./views/pages/Projects";
import About from "./views/pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [dataJson, setDataJson] = useState(null);
  const [dataContent, setDataContent] = useState(null);
  const [language, setLanguage] = useState("");

  useEffect(() => {
    const fetchDataAsync = async () => {
      const dataFetch = await fetchData();
      setDataJson(dataFetch);
    };

    fetchDataAsync();
  }, []);

  useEffect(() => {
    const setStoredData = () => {
      const storedLanguage = LocalStorage.getData("language");

      if (!storedLanguage) {
        LocalStorage.saveData("language", "en");
        setLanguage("en");
      }
    };

    setStoredData();
  }, []);

  const setContentLanguage = (lg) => {
    setLanguage(lg);
    setStoredData(lg);
  };

  const setStoredData = (lg) => {
    const storedLanguage = LocalStorage.getData("language");
    if (storedLanguage) {
      LocalStorage.updateData("language", lg);
    }
  };

  useEffect(() => {
    try {
      const storedLanguage = LocalStorage.getData("language");

      if (storedLanguage === "id") {
        setDataContent(dataJson.indonesia);
      } else {
        setDataContent(dataJson.english);
      }
    } catch (error) {
      console.info("loading...");
    }
  }, [language, dataJson]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home data={dataContent} setLanguage={setContentLanguage} />} />
        <Route
          path="/about"
          element={<About data={dataContent} setLanguage={setContentLanguage} />}
        />
        <Route
          path="/projects"
          element={<Projects data={dataContent} setLanguage={setContentLanguage} />}
        />
      </Routes>
    </Router>
    // <Tes/>
  );
}

export default App;
