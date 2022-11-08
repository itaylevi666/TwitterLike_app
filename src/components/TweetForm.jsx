import React from 'react'
import { getTweet , createTweet } from '../lib/api'



 class TweetForm extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            content: '',   
            isDisabled: true,
            tweetlist: [],
            loading : false,
            
        }
    }
    
    async handleOnSubmit () {

        if (!this.state.content){
            return undefined
        }

        const tweet = {
            userName:  this.props.userName ,
            content: this.state.content,
            date: new Date().toISOString(),  
        }
       this.props.onTweet(tweet);
       await createTweet(tweet)  
    }

    componentDidMount(){
        this.loadTweet()
    }

    async loadTweet() {
        this.setState({loading:true})
        const tweetlist = await getTweet()
        this.setState({tweetlist, loading:false});
    }
   
      moreThan() {
          if (this.state.content.length > 140){
        return true
    }
      }
    
    render() {
     
          const moreThan = this.moreThan()
        return (
            // <tweetContext.Consumer>
            //     {({ userName, onTweet}) => {
            <div className= " p-4 shadow rounded card-body bg-secondary " >
                <form  >
                    <div className="mb-3 bg-secondary">
                    <textarea className ="form-control" name="tweet" 
                     rows="6"
                     placeholder="tweet? "
                     onChange={event=> this.setState({content : event.target.value})}
                     value={this.state.content}
                     ></textarea>  
                    </div>
                    <button onClick={ ()=> this.handleOnSubmit()} 
                    className="btn btn-primary "
                     disabled={moreThan}>tweet</button>
                   <span > <span hidden={!moreThan} class="alert alert-danger w-75 p-3   act  " role="alert">
                    The tweet can't contain more then 140 chars. </span></span>
                </form> 
            </div>
            // }}
            // </tweetContext.Consumer>
        )
    }
}


export default TweetForm
