import React, {useState } from 'react';
import './Count.css';
import { firestore } from './index'
const Count = (props) => {
  const {collect} = props
  const {id, name, url, count} = collect
  // const [count, setCount] = useState(0)
    const add = () => {
      firestore.collection("collects").doc(id + '')
        .set({
          id: id,
          name: name,
          url: url,
          count: (count + 1)
        })
    }
    const minus = () => {
      firestore.collection("collects").doc(id + '')
        .set({
          id: id,
          name: name,
          url: url,
          count: (count -1)
        })
    }
   return (
       <div> 
    <h6 className='num'> Number of pieces : {count} </h6>
     <div className='count'>  
        <button className='add ' onClick={add}> + </button>
        <button className='add 'onClick={minus}> - </button>
     </div></div>
   );
}
export default Count;