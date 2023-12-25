import React from 'react'
const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`

const getDrinkDetails =async(id)=>{
    const res = await fetch (`${url}${id}`)
    if(!res.ok){
        throw new Error("Something went wrong")
    }
    const data = await res.json()
    return data
}
const DrinksSinglePage = async ({params}) => {
    
    let data = await getDrinkDetails(params.id)
    console.log(data)
  return (
    <div>
<h1>{data?.drinks[0]?.strDrink}</h1>
    </div>
  )
}

export default DrinksSinglePage