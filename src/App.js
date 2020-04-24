
import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './Nav';
import { firestore } from './index'
import Collect from './Collect';

const App = () => {

  const [collects, setCollects] = useState([
    { id: 1, name: "Glass" },
    { id: 2, name: "Bottle" }
  ])

  const [name, setName] = useState('')

  useEffect(() => {
    retriveData()
  }, [])

  const retriveData = () => {
    firestore.collection("collects").onSnapshot((snapshot) => {
      console.log(snapshot.docs)
      let myCollect = snapshot.docs.map(d => {
        const { id, name } = d.data()
        console.log(id, name)
        return { id, name }
      })
      setCollects(myCollect)
    })
  }


  const renderCollect = () => {
    if (collects && collects.length)
      return collects.map((collect, index) => {
        return (
          <Collect key={index} collect={collect}
            deleteCollect={deleteCollect}
            editCollect={editCollect}
          />
        )
      })
    else
      return (<li> No Collection </li>)
  }

  const addCollect = () => {
    let id = (collects.length === 0) ? 1 : collects[collects.length - 1].id + 1
    firestore.collection("collects").doc(id + '').set({ id, name })
  }

  const deleteCollect = (id) => {
    firestore.collection("collects").doc(id + '').delete()
  }


  const editCollect = (id) => {
    firestore.collection("collects").doc(id + '').set({ id, name })
  }

  return (
    <div>
      <Nav />
      <div className='App-header' >

        <h1 className='H1' > My Collection </h1>
        <input className='Input-App' type="text" name="name" onChange={(e) => setName(e.target.value)} />
        <button className='Button' onClick={addCollect}> AddCollect </button>
        <ul style={{ display: 'flex', listStyle: 'none' }}>{renderCollect()}</ul>
      </div>
    </div>
  );
}

export default App;
