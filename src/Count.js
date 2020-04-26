import React, { Component } from 'react';
import './Count.css';

class Count extends Component {
 state = { count:0}
 constructor(props) {
   super(props)
   this.add = this.add.bind(this)
   this.minus = this.minus.bind(this)
 }

 add = function() {
   this.setState({count:this.state.count+1})
 }
 minus = function() {
    this.setState({count:this.state.count-1})
  }

 render() {
   return (
       <div> 
    <h6 className='num'> Number of pieces : {this.state.count} </h6>
     <div className='count'>  
        <button className='add ' onClick={this.add}> + </button>
        <button className='add 'onClick={this.minus}> - </button>
        
     </div></div>
   );
 }
}
export default Count;
