
import React , { useState, useEffect }from 'react';
import './App.css';
import Nav from './Nav';
import {firestore} from './index'

const App = () => {

  const [collects, setCollects] = useState([
    { id: 1, name: "Glass" },
    { id: 2, name: "Bottle" }
  ])

  useEffect( ()=> {
    retriveData()
  } ,[])

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
          <li key={index}>
            {collect.id} : {collect.name}
          </li>
          
        )
      })
    else
      return (<li> No Task </li>)
  }
  
  return (
  <div  >
      <Nav />
     <h1 > My Collection </h1>
     <ul >{renderCollect()}</ul>
    </div>
  );
}

export default App;
