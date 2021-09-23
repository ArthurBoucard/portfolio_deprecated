import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
             <Route path="/portfolio" component={Home} exact/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;