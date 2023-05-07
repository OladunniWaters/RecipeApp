import Homepage from "./homepage/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RecipeInfo from "./components/RecipeInfo";
import "./App.css";
import {BrowserRouter as HashRouter, Routes, Route} from "react-router-dom";
import BeefCategory from './components/BeefCategory';
import Chicken from './components/Chicken';
import Dessert from './components/Dessert';
import Seafood from './components/Seafood';
import Vegan from './components/Vegan';
//import Cart from "./components/Cart";
import Favorite from "./components/Favorite";



function App() {
  return (
    <div className="App">
    <HashRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/favorite" element={<Favorite/>} />
          <Route path="/beef" element={<BeefCategory />} />
          <Route path="/chicken" element={<Chicken />} />
          <Route path="/seafood" element={<Seafood />} />
          <Route path="/vegan" element={<Vegan />} />
          <Route path="/dessert" element={<Dessert />} />
          <Route path="/:MealId" element={<RecipeInfo />} />
      </Routes>
      <Footer />
    </HashRouter> 
    </div>
  );
}
export default App;


