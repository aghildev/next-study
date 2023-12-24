import Link from "next/link";
import React from "react";

const DrinkList = ({ drinks }) => {
  return (
    <div>
      <ul>
        {drinks.map((drink) => {
          return (
            <li key={drink.idDrink}>
              <Link href={`/drinks/${drink.idDrink}`}>{drink.strDrink}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DrinkList;
