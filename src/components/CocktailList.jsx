import React from "react";
import { useGlobalContext } from "../context";
import Cocktail from "./Cocktail";

function CocktailList() {
  const { cocktails } = useGlobalContext();

  if (cocktails.length < 1) {
    return <h3 className="section-title">no cocktail found</h3>;
  }

  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}

export default CocktailList;
