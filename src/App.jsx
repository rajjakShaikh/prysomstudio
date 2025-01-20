import React from "react";
import Home from "./component/pages/Home";
import Work from "./component/pages/work";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./component/pages/About";
import Header from "./component/pages/Header";
import Modulo from "./component/pages/modulo";
import Heat from "./component/pages/heat";
import Casco from "./component/pages/casco";
import Eljunto from "./component/pages/eljunto";
import KathaMehfil from "./component/pages/kathamehfil";
import NotFound from "./component/pages/Notfound";
export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/work/modulo" element={<Modulo />} />
          <Route path="/work/heat" element={<Heat />} />
          <Route path="/work/casco" element={<Casco />} />
          <Route path="/work/el-junto" element={<Eljunto />} />
          <Route path="/work/katha-mehfil" element={<KathaMehfil />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}
