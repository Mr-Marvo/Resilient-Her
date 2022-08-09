
import Hero from "./components/hero/Hero";
import React,{Routes,Route} from "react-router-dom";
import Desc from "./components/desc/Desc";
import Roadmap from "./components/roadmap/Roadmap";
import Faq from "./components/faq/Faq";
import Team from "./components/team/Team";
import AboutNFT from "./components/aboutNFT/AboutNFT";



function App() {
  
  return (
    <div>
   
    <Routes>
      <Route exact path ="/" element={<Hero/>} />
      <Route exact path ="/about" element={<Desc/>} />
      <Route exact path ="/aboutNFT" element={<AboutNFT/>} />
      <Route exact path ="/roadmap" element={<Roadmap/>} />
      <Route exact path ="/ask" element={<Faq/>} />
      <Route exact path ="/team" element={<Team/>} />
    </Routes>
  
  </div>
  );
}

export default App;
