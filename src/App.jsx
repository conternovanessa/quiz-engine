import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import Selection from "./pages/Selection"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/selection" element={<Selection />} /> 
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  );
}

export default App;