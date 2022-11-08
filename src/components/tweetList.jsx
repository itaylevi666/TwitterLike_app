import TweetItem from "./tweetItem";


const TweetList = (props) => {
    const {tweetlist} = props
    return(

        // <tweetContext.Consumer>
        //     {({ tweetlist }) => {


        <div className="d-flex flex-column ">
            {tweetlist.map(item =>
                <TweetItem key={item.id} item={item} />
                )}

        </div>
        // }}
        
        
        // </tweetContext.Consumer>

    );
}


export default TweetList