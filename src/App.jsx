import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import Selection from "./pages/Selection";
import ErrorPage from "./pages/Errorpage"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/selection" element={<Selection />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/results" element={<Results />} />
      <Route path="*" element={<ErrorPage />} /> {/* <-- 404 */}
    </Routes>
  );
}

export default App;