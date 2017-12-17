import React from 'react';
import './home.css';

import Keyboard from '../../components/Keyboard';
class Home extends React.Component{
  render(){
    return(
      <div className="Home">
        <div className="KeyboardContainer">
          <Keyboard
            type='qwerty'
            language='english'
          />
        </div>

      </div>
    )
  }
}

export default Home;
