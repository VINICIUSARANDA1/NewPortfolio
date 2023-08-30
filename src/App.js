import Home from "./Pages/Home/index";
import Projects from "./Pages/Projects/index";
import History from "./Pages/History/index";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projetos" element={<Projects/>}  />
          <Route path="/historia" element={<History/>}  />
        
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
