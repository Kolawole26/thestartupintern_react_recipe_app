
import './App.css';
import Axios from 'axios';
import { useState } from 'react';
import RecipeTile from './components/RecipeTile';

function App() {

  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabels, sethealthLabels] = useState("vegan")
  
  const YOUR_APP_ID = `54a3fd6d`;
  const YOUR_APP_KEY = "c29a4b1b4de36ca1d3670178e11a67dc";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`;

  async function getRecipes() {
    var result = await Axios.get(url);
    setrecipes(result.data.hits) 
    console.log(result.data)
  }

  const onSubmit= (e) => {
    e.preventDefault();
    getRecipes();
  }
  return (
    <div className="app">
      <h1>Food Recipe Plaza 🍔</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input className="app__input" type="text" placeholder="Enter ingredient" value={query} onChange={(e) => setquery(e.target.value)} />
        <input className="app__submit" type="submit"  value="Search" />
        <select className="app_healthLables">
          <option onClick={() => sethealthLabels("vegan")}>Vegan</option>
          <option onClick={() => sethealthLabels("Vegetarian")}>Vegetarian</option>
          <option onClick={() => sethealthLabels("Pescatarian")}>Pescatarian</option>
          <option onClick={() => sethealthLabels("Dairy-Free")}>Dairy-Free</option>
          <option onClick={() => sethealthLabels("Gluten-Free")}>Gluten-Free</option>
          <option onClick={() => sethealthLabels("Wheat-Free")}>Wheat-Free</option>
          <option onClick={() => sethealthLabels("Egg-Free")}>Egg-Free</option>
          <option onClick={() => sethealthLabels("Peanut-Free")}>Peanut-Free</option>
          <option onClick={() => sethealthLabels("Tree-Nut-Free")}>Tree-Nut-Free</option>
          <option onClick={() => sethealthLabels("Soy-Free")}>Soy-Free</option>
        </select>
      </form>

      <div className="app__recipes">
        {recipes.map(recipe => {
          return <RecipeTile recipe={recipe}/> 
        })}
      </div>
    </div>
  );
}

export default App;

