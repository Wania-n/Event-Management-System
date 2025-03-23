import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;