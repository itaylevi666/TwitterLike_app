
import React from 'react';
import './App.css';
import { TweetsPage } from './TweetsPage'
import Profile from './components/Profile'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       tweetlist: [],
       loading: false,
       userName:'hi'
    }
  }

  onChangeUserName(newName) {
    this.setState({userName:newName})
  }
 

  render(){
   
    
     return(
<>

      <Router>
      <div>
        <div className="container"> 
        <span className=" nav bar navbar-dark bg-dark">
          <span className="navbar-brand nav-item ">
            <Link className="nav-link" to="/">Home</Link>
          </span>
          <span className="navbar-brand">
            <Link className="nav-link"to="/Profile">Profile</Link>
          </span>
        </span>
        </div>
        <Switch>
          <Route exact path="/">
            <TweetsPage userName={this.state.userName} />
          </Route>
          <Route path="/profile">
            <Profile userName={this.state.userName}
            onChangeUserName={(newName) =>this.onChangeUserName(newName)} />
          </Route>
        </Switch>
      </div>
    </Router>
   

</>
     
        
      


 
  );


}
}
export default App;
