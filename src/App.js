import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './Nav';
import { firestore } from './index'
import Collect from './Collect';
import Uploader from './firebase/uploader'
import ShowCount from './ShowCount';
// import Count from './Count'
const App = () => {
  const [collects, setCollects] = useState([
  ])
  const [name, setName] = useState('')
  // const [count, setCont] = useEffect(0)
  useEffect(() => {
    retriveData()
  }, [])
  const retriveData = () => {
    firestore.collection("collects").onSnapshot((snapshot) => {
      console.log(snapshot.docs)
      let myCollect = snapshot.docs.map(d => {
        const { id, name, url, count } = d.data()
        console.log(id, name,url, count)
        return { id, name, url, count }
      })
      setCollects(myCollect)
    })
  }
  // const add = () => {
  //   setCont(count + 1)
  // }
  // const minus = () => {
  //   setCont(count - 1)
  // }
  const renderCollect = () => {
    if (collects && collects.length)
      return collects.map((collect, index) => {
        console.log("im in app", collect.url);
        return (
          //<div>
            <Collect key={index} collect={collect}
              deleteCollect={deleteCollect}
              editCollect={editCollect}
            />

            // {/* <ShowCount  collect={collect}
            // /> </div> */}
        )
      })
    else
      return (<div className='No'> No Collection </div>)
  }
  const addCollect = () => {
    let id = (collects.length === 0) ? 1 : collects[collects.length - 1].id + 1
    let url = localStorage.getItem("url")
    firestore.collection("collects").doc(id + '')
      .set({
        id: id,
        name: name,
        url: url,
        count:0
      })
  }
  const deleteCollect = (id) => {
    firestore.collection("collects").doc(id + '').delete()
  }
  const editCollect = (id) => {
    let url = localStorage.getItem("url")
    firestore.collection("collects").doc(id + '').set({ id, name,url })
  }
  return (
    <div style={{width: "100",height:"100%"}}>
      <Nav />
      <div className='App-header' >
        <h1 className='H1' > My Collections </h1>
        <input className='Input-App' type="text" name="name" onChange={(e) => setName(e.target.value)} />
        <Uploader />
        <button className='Button' onClick={addCollect}> AddCollect </button>
        <ul style={{ display: 'flex', listStyle: 'none' }}>{renderCollect()}</ul>
      </div>
    </div>
  );
}
export default App;