import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import Terminal from './components/Terminal';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
             <Route path="/portfolio" component={Home} exact/>
             <Route path="/terminal" component={Terminal}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;