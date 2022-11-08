const TweetItem = (props) => {
const { item } = props;
    
return (

    <div className="p-3 m-2 bg-dark card shadow rounded"> 
        <div className='d-flex justify-content-between '>
        <div className="text-align-left font-weight-light datetext "> {item.userName} </div>
       <div className="text-align-right font-weight-light datetext ">{item.date}</div>
       </div>
        <p className=" font-weight-light datetext1  ">{item.content}  </p>

        
    </div>
   
);
}

export default TweetItem