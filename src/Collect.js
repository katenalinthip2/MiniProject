import React from 'react';
import './Collect.css'
import Count from './Count'
const Collect = (props) => {
    const {collect, editCollect, deleteCollect} = props
    const {id, name, url} = collect
    // console.log("im", url);
    return (
        <li >
            <div className="id"> {id} </div> 
            <img className='img' src={url} alt="image"></img>
            <div className="name"> {name} </div>
            <div className="container">
            <button className='red' onClick={() => deleteCollect(id)}> Delete </button>
            <button className='green' onClick={() => editCollect(id)}> Edit </button>
            </div>
            <Count collect={collect} />
          </li>
    )
}
export default Collect;