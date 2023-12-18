import React from 'react'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
const fetchDrinks = async ()=>{
const res = await fetch (url)
if(!res.ok){
  throw new Error("There is trouble in fetching data")
}
const data = await res.json()
return data
}
const drinksPage = async () => {
 const data = await fetchDrinks()
 console.log(data)
  return(
    <div>drinksPage</div>
  )
   
  
}

export default drinksPage