import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NewList from '../NewList';

const List = ({ title, setTitle }) => {

  const [lists, setLists] = useState([]);

  let titleArr = []

  console.log('lists = ' + JSON.stringify(lists))
  const newList = {
    title: title,
    id: Date.now(),
  };

  useEffect((lists) => {
    setLists(lists => [...lists, newList]);
    const json = JSON.stringify(lists);
    localStorage.setItem("Lists", json);
    console.log('useeffect ran + ' + json)
  }, [title])


  useEffect(() => {
    setLists(newList)

    // console.log('lists = ' + JSON.stringify(lists))

  }, [])

  return (
    <div>
      <button>
        <Link to="/landing">back</Link>
      </button>
      <h2>{title}</h2>
      <p>Kom igång med handlingslistan genom att klicka på knappen nedan</p>
      <h5>listan är tom</h5>
      <button>Lägg till + </button>
    </div>
  )
}

export default List;