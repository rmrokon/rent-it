import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import RentProperty from "./components/RentProperty/RentProperty";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<RentProperty />} />
        <Route path="/rent" element={<RentProperty />} />
      </Routes>
    </div>
  );
}

export default App;
