import React, { useState } from 'react'
import NewList from '../NewList';

const List = () => {
  const [title, setTitle] = useState('')

  const listName = (newListTitle) => {
    setTitle(newListTitle)
  }

  return (
    <div>

      <NewList listName={listName} />

      <h2>{title}</h2>
      <p>Kom igång med handlingslistan genom att klicka på knappen nedan</p>
      <h5>listan är tom</h5>
      <button>Lägg till + </button>
    </div>
  )
}

export default List;
