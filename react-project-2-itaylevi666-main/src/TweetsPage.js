
import React from 'react';
import './App.css';
import TweetForm from './components/TweetForm'
import TweetList from './components/tweetList'
import {getTweet} from './lib/api'



export class TweetsPage extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       tweetlist: [],
       loading: false
    }
  }



    
  componentDidMount(){
    this.loadTweet()
}

componentDidUpdate() {
  let loadInterval
  clearInterval( loadInterval)
}
loadInterval = setInterval(() => {
    this.loadTweet()
  },8000)



async loadTweet() {
    this.setState({loading:true})
    try {
    const tweetlist = await getTweet()
    this.setState({tweetlist: tweetlist.tweets, loading:false});}
    catch(err){
      alert(`${err.name}`)
    }
}


  
  handleOnNewTweet(totweet){
    this.setState((prevState) =>{
      return { tweetlist: [...prevState.tweetlist,totweet].reverse()}
    })
  }


  render(){
 
   
    const {tweetlist} =this.state;
     return(
    
      // <tweetContext.Provider value={{
      //   tweetlist:tweetlist,
      //   userName:this.props.userName,
      //   onTweet:(tweet) => this.handleOnNewTweet(tweet)}
      // }>
        
<div className=" bg-d">
    <div className=" container p-5 ">
      <TweetForm
      userName={this.props.userName}
       onTweet={(tweet) => this.handleOnNewTweet(tweet)}/>
      <div className="mt-5">
      {this.state.loading && <h3 style={{color: "white"}}>  this is loading </h3> }
      <TweetList tweetlist={tweetlist} />
    
      </div>
  
    </div>
    </div>
    // </tweetContext.Provider>
  );


}
}

