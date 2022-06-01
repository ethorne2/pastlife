import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Results from "./pages/Results";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import Loading from "./pages/Loading";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // Creates the Routes for our website with the appropriate paths
  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path="/pastlife/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/pastlife/about" element={<About />} />
          <Route path="/pastlife/results" element={<Results />} />
          <Route path="/pastlife/loading" element={<Loading />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
