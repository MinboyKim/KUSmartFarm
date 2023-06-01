import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Sensor from "./pages/Sensor";
import Scale from "./pages/Scale";
import NotFound from "./pages/NotFound";
import Header from "./pages/layout/Header";
import Footer from "./pages/layout/Footer";
import Contents from "./pages/layout/Contents";
import Layout from "./pages/layout/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Header />
          <Contents>
            <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route path="/sensor/*" element={<Sensor />}></Route>
              <Route path="/scale/*" element={<Scale />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </Contents>
          <Footer />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
