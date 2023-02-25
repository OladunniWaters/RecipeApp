import Homepage from "./components/Homepage";
import RecipeInfo from "./components/RecipeInfo";
import "./App.css";
import {BrowserRouter as HashRouter, Routes, Route} from "react-router-dom";
import Category from "./components/Category";
import FilterByCategory from './components/FilterByCategory'
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/category" element={<Category />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/beefpage" element={<FilterByCategory />} />
        <Route path="/:MealId" element={<RecipeInfo />} />
      </Routes>
    </HashRouter> 
    </div>
  );
}
export default App;


