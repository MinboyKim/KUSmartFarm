import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Sensor from "./Sensor";
import Scale from "./Scale";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/sensor/*" element={<Sensor />}></Route>
          <Route path="/scale/*" element={<Scale />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
