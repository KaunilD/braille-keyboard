import React from 'react';
import ReactDOM from 'react-dom';
import Key from '../Key';

import './Keyboard.css'
var utils = require('../../utils');

class Keyboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            type: props.type,
            language: props.language
        }
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown(event){
        ReactDOM.findDOMNode(this.refs[event.key]).classList.toggle('pressed');
    }

    render(){
        const rows = utils[this.state.type][this.state.language];

        return(
            <div className="Keyboard">
                <div className='first'>
                    {
                        rows.first.map((key) =>{
                            return <Key ref={key} key={key} value={key} />
                        })
                    }
                </div>
                <div className='second'>
                    {
                        rows.second.map((key) =>{
                            return <Key key={key} ref={key} value={key} />
                        })
                    }
                </div>
                <div className='third'>
                    {
                        rows.third.map((key) =>{
                            return <Key key={key} ref={key} value={key} />
                        })
                    }
                </div>
                <div className='fourth'>
                    {
                        rows.fourth.map((key) =>{
                            return <Key key={key} ref={key} value={key} />
                        })
                    }
                </div>
                <div className="fourth">
                    <Key value="space">

                    </Key>
                </div>
            </div>
        )
    }

}


export default Keyboard;
