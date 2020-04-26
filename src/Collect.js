import React from 'react';
import './Collect.css'
import Count from './Count'


const Collect = (props) => {
    const {collect, editCollect, deleteCollect} = props
    const {id, name} = collect
    return (
        <li >

            <div className="id"> {id} </div> 
          
            <div className="name"> {name} </div>
        
            <div className="container">
            <button className='red' onClick={() => deleteCollect(id)}> Delete </button>
            <button className='green' onClick={() => editCollect(id)}> Edit </button>
            
            </div>
            <Count />
          </li>
    )
}

export default Collect;