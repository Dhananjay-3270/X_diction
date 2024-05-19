import { useState } from "react";

import "./App.css";

function App() {
  const data = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const [search, setSearch] = useState("");
  const[filter,setfilter] = useState("")
  const handlechange = (event) => {
    let val = event.target.value;
    setSearch(val);
    
  };
  const handleclick = ()=>{
   const found = data.find((ele)=> ele.word.toLowerCase()===search.toLowerCase())
   setfilter(found ? found.meaning :"Word not found in the dictionary.")
  }

  return (
    <>
      <h1>Dictonary App</h1>
      <input
        onChange={handlechange}
        type="text"
        placeholder="Search for a word..."
        value={search}
      />
      <button onClick={handleclick}>Search</button>
      <h4>Definition:<span>{filter && <p>{filter}</p>}</span></h4>
    </>
  );
}

export default App;
