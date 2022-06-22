import "./App.css";

import { Route, Routes, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Tools from "./pages/Tools";
import Error from "./pages/Error";

const App = () => {
  return (
    <main>
      <Routes>
        <Route index element={<Home />} />
        <Route path="tools" element={<Tools />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  );
};

export default App;
