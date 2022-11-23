import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Branches from "./pages/Branches";
import Issues from "./pages/Issues";
import OriginMaster from "./pages/OriginMaster";
import VsCode from "./pages/VsCode";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="branches" element={<Branches />} />
            <Route path="issues" element={<Issues />} />
            <Route path="originmaster" element={<OriginMaster />} />
            <Route path="vscode" element={<VsCode />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
