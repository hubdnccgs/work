import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RatePlan from "./pages/RatePlan";
import Header from "./component/Header";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/product/rateplan" element={<RatePlan />} />
      </Routes>
    </Router>
  );
}

export default App;
