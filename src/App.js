import Homepage from "./components/Homepage";
import RecipeInfo from "./components/RecipeInfo";
import "./App.css";
import {BrowserRouter as HashRouter, Routes, Route} from "react-router-dom";



function App() {
  return (
    <div className="App">
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:MealId" element={<RecipeInfo />} />
      </Routes>
    </HashRouter> 
    </div>
  );
}
export default App;


