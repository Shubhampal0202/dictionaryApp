import React, { useState } from "react";
import "./header.css";
import { categories } from "../../data/category";
function Header({ category, setCategory, word, setWord }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setCategory(e.target.value);
  };
  return (
    <>
      <div className="heading">{word ? word.toUpperCase() : "WORD HUNT"}</div>
      <form className="input-box">
        <input
          type="text"
          placeholder="Search a Word"
          className="input"
          onChange={(e) => setWord(e.target.value)}
        />
        <select value={category} onChange={(e) => handleChange(e)}>
          {categories.map((item, index) => {
            return <option value={item.label}>{item.value}</option>;
          })}
        </select>
      </form>
    </>
  );
}

export default Header;
