import React, { Component } from 'react'



export default class Profile extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            userName: '',   
            newName:'',
            
        };

     
    }
    handleOnChange(value){
        this.setState({newName: value})
    }
    saveUserName(event){
        event.preventDefault()
        this.props.onChangeUserName(this.state.newName)
    }


    render() {
        return (
            
                
<div className="container">
            <div className= "mt-5 p-4 shadow rounded card-body bg-secondary " >
                <div >
                <form onSubmit={(event) => this.saveUserName(event)} >
                   
                    <div className="mb-3 bg-secondary input-group">
                    <input className ="form-control" name="tweet" 
                     onChange={(event) => this.handleOnChange(event.target.value )}
                     value={this.state.newName}
                     className="input"
                     placeholder="Name"
                  
                     ></input >
                      
                    </div>
              
                    <button className="btn btn-primary ">save</button>
               
                



                </form>


                </div>
                </div> 
                </div>
        )
    }
}



