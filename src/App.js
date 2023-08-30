import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import Home from "./Pages/Home/index";
import Projects from "./Pages/Projects/index";
import History from "./Pages/History/index";

function App() {
  return (
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projetos" element={<Projects />} />
      <Route path="/historia" element={<History />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
