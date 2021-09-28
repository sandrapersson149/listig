import React from 'react'
import { FoodData } from '../FoodData/data'

const DemoList = () => {

  return (
    <div id='demolist'>
      <h1>Mat till helgen</h1>
      <ul>
        {FoodData.map(item => (
          <li key={item.id}>{item.name}</li>
        ))
        }
      </ul>
    </div>
  )
}

export default DemoList;
