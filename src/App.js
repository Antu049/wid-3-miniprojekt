import { useState } from "react";
export default function App() {

  const [lingua, setLingua] = useState("it");
  const [logo, setLogo] = useState(true);
  const saluti = {it: "Ciao!", de: "Hallo!", fr: "Salut!", en: "Hello!"};
  

  function handleLingua(e) {
    setLingua(e.target.value);
  }
  function handleLogo() {
    setLogo(!logo);
  }


  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px", padding: "10px"}}>
    {logo && <img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/FHNW_Logo.svg" alt="Logo FHNW" style={{ height: "50px" }} />}
    <h1>{saluti[lingua]}</h1>
    <select onChange={handleLingua}>
      <option value="it">Italiano</option>
      <option value="de">Deutsch</option>
      <option value="fr">Français</option>
      <option value="en">English</option>
    </select>

    <input onChange={handleLogo}
      checked={logo}
      type="checkbox"
    ></input>
    </div>
  );
}
