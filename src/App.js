import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Sensor from "./pages/Sensor";
import Scale from "./pages/Scale";


import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/sensor1" element={<Sensor sensorNum={1}/>}></Route>
          <Route path="/sensor2" element={<Sensor sensorNum={2}/>}></Route>
          <Route path="/sensor3" element={<Sensor sensorNum={3}/>}></Route>
          <Route path="/scale1" element={<Scale scaleNum={1}/>}></Route>
          <Route path="/scale2" element={<Scale scaleNum={2}/>}></Route>
          <Route path="/scale3" element={<Scale scaleNum={3}/>}></Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
