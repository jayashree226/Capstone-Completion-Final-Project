import "./SearchBar.css";
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

function SearchBar() {

const App_ID = "02c78881"
const APP_KEY = "2de0325c800e9a3fdad5f29cb4501560	"

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect (() => {
    getRecipe();
  }, [query]
);

  const getRecipe = async() =>{
    const res = await fetch(`<https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await res.json;
    console.log(data.hits);
    setRecipes(data.hits);
  };

    const updateSearch = (e) =>{
      setSearch(e.target.value)
    }

    const getSearch = (e) =>{
      e.preventDefault();
      setQuery(search);
      setSearch("");

    }
  
  return (
    <div>
      <form onSubmit={getSearch}>
        <input className="SearchBar" type="text" value={search} onChange ={updateSearch} placeholder="Search Bar"></input>
        <button type="submit">Submit</button>
        </form>
        <div>
          {recipes.map((item, id) =>(
            <div key={id}>
                <h2>{item.recipes.label}</h2>
                <img src={item.recipes.image} />
            </div>
          ))}
        </div>
    </div>
  );
}

export default SearchBar;

