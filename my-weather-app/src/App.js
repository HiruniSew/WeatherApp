import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";

const App = () => {
  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
