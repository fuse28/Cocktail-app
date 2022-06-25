import React from "react";
import CocktailList from "../components/CocktailList";
import "../Styles/cocktailList.css";
import SearchBar from "../components/SearchBar";
import "../Styles/searchBar.css";

function Home() {
  return (
    <main>
      <SearchBar />
      <CocktailList />
    </main>
  );
}

export default Home;
