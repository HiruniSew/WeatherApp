import "./App.css";
import ReactDOM from "react-dom/client";
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
