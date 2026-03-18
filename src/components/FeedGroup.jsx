import Carousel from "./Carousel.jsx";


function FeedGroup({ channel, articles}) {
    return (
        <div className="feed-group">
            {
                !channel || !articles? <p>Loading feed...</p> : 
                <div className="feed-bulletin">
                    <h2 className="feed-title"><a href={channel[0].link}>{channel[0].title}</a></h2>
                    <Carousel articles={articles}/>
                </div>
            }
        </div>
    );
}

export default FeedGroup;