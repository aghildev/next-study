import React from 'react'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
const drinksPage = async () => {
  const res = await fetch(url)
  const data = await res.json()
  console.log(data)
  return(
    <div>drinksPage</div>
  )
   
  
}

export default drinksPage