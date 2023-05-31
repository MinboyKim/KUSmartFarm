import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Sensor from "./pages/Sensor";
import Scale from "./pages/Scale";
import NotFound from "./pages/NotFound";
import Layout from "./pages/layout/Layout";
import Header from "./pages/layout/Header";
import Footer from "./pages/layout/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Header />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/sensor/*" element={<Sensor />}></Route>
            <Route path="/scale/*" element={<Scale />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Footer />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
