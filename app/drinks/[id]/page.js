import React from 'react'
const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`
import drinkImg from "./drink.jpg"
import Image from 'next/image'
const getDrinkDetails =async(id)=>{
    const res = await fetch (`${url}${id}`)
    if(!res.ok){
        throw new Error("Something went wrong")
    }
    const data = await res.json()
    return data
}
const DrinksSinglePage = async ({params}) => {
    console.log(drinkImg)
    let data = await getDrinkDetails(params.id)
    console.log(data)
  return (
    <div>
<h1>{data?.drinks[0]?.strDrink}</h1>
{/* <img src = {drinkImg.src} alt="drink"/> */}
<Image src = {drinkImg.src} width ={300} height={300} className='w-48'/>
    </div>
  )
}

export default DrinksSinglePage