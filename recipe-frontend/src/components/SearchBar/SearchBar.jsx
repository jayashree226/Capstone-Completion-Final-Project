import "./SearchBar.css";
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

function SearchBar() {

const APP_ID = "02c78881"
const APP_KEY = "2de0325c800e9a3fdad5f29cb4501560	"

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect (() => {
    getRecipe();
  }, [query]
);

  const getRecipe = async() =>{
    console.log(query);
    console.log(APP_ID);
    console.log(APP_KEY);
    const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await res.json();
    console.log(data);
    setRecipes(data.hits);
  };

    const updateSearch = (e) =>{
      setSearch(e.target.value)
    }

    const getSearch = (e) =>{
      e.preventDefault();
      setQuery(search);
      console.log(search);
      setSearch("");

    }
  
  return (
    <div>
      <form onSubmit={getSearch}>
        <input className="SearchBar" type="text" value={search} onChange ={updateSearch} placeholder="Search Bar"></input>
        <button type="submit">Submit</button>
        </form>
        <div>
          {recipes?recipes.map((item, id) =>(
           
            <div key={id}>
               {console.log(item)}
                <h2>{item.recipe.label}</h2>
                <img src={item.recipe.image} />
            </div>
          )):<h1>No recipe to display</h1>}
        </div>
    </div>
  );
}

export default SearchBar;

