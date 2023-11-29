import "./App.css";
import HomePage from "./pages/Home/HomePage";
import PlacesPage from "./pages/Places/PlacesPage";
const App = () => {
  return (
    <div>
      <div className="App">
        <HomePage />
      </div>

      <div>
        <PlacesPage />
      </div>
    </div>
  );
};

export default App;
