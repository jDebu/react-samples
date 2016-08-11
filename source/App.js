import React from 'react';
//import {render} from 'react-dom';
import ReactDOM from 'react-dom';
//import Hola from './Hola';
//import Counter from './Counter';

//render(<Counter />, document.getElementById('root'));
// Componentes de presentación
var Counter = React.createClass({
  incrementCount: function(){
    this.setState({
      contador: this.state.contador + 1
    });
  },
  getInitialState: function(){
     return {
       contador: 0
     }
  },
  render: function(){
    return (
      <div class="my-component">
        <h1>Count: {this.state.contador}</h1>
        <button type="button" onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
});

ReactDOM.render(<Counter/>, document.getElementById('root'));
