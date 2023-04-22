import React from "react";
import "./meaning.css";

function Meaning({ meaning, word }) {
  let audio = "";

  for (let i = 0; i < meaning.length; i++) {
    for (let j = 0; j < meaning[i].phonetics.length; j++) {
      if (meaning[i].phonetics[j].audio) {
        audio = meaning[i].phonetics[j].audio;
        break;
      }
    }
  }


  return (
    <div className="meaning-cont">
      {
        word? <div className="audio">
        <audio src={audio} controls></audio>
      </div>:null
     }

      {meaning && word ? (
        meaning.map((mean, indexx) =>
          mean.meanings.map((item, index) =>
            item.definitions.map((val, idx) => (
              <div className="meaning">
                <div className="mean">
                  <strong>{val.definition}</strong>
                </div>
                <hr />
                <div className="example">
                  <>
                    <strong>Example : </strong>
                    {val.example}
                  </>
                </div>

                <div className="Synonyms">
                  <strong>Synonyms : </strong>
                  {val.synonyms.length > 0 &&
                    val.synonyms.map((v, i) => <span>{v} </span>)}
                </div>
              </div>
            ))
          )
        )
      ) : (
        <div className="hint">Start by typing a word in search</div>
      )}
    </div>
  );
}

export default Meaning;
