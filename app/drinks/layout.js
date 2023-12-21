import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <h1 className = "text-2xl">I am the layout of drinkspage </h1>
        {children}
    </div>
  )
}

export default layout