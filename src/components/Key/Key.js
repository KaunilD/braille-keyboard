import React from 'react';
import './Key.css'
class Key extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: props.value
    }
  }
  render(){
    const className = "Key " + this.state.value;
    return(
      <div className={className}>
        <p>{this.state.value}</p>
      </div>
    )

  }

}


export default Key;
