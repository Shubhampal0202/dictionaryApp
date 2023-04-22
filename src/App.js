import { useEffect, useState } from "react";
import "./app.css";
import Header from "./Components/header/Header";
import Meaning from "./Components/meaning/Meaning";
import Footer from "./Components/footer/Footer"
import axios from "axios";
function App() {
  const [meaning, setMeaning] = useState("");
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("en");

  console.log(word, category);

  const dictionaryApi = async () => {
    try {
      const { data } = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      setMeaning(data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    dictionaryApi();
  }, [category, word]);

  return (
    <div>
      <Header
        category={category}
        setCategory={setCategory}
        word={word}
        setWord={setWord}
      />
      <Meaning meaning={meaning} word={word} />
      <Footer/>
    </div>
  );
}

export default App;
