import React from 'react'

const DrinksSinglePage = ({params}) => {
    console.log(params)
  return (
    <div>DrinksSinglePage--{params.id}</div>
  )
}

export default DrinksSinglePage