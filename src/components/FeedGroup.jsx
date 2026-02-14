import Carousel from "./Carousel.jsx";


function FeedGroup({ channel, articles}) {
    return (
        <div className='feed-group'>
            <>{
                !channel || !articles? <p>Loading feed...</p> : 
                <>
                    <h2><a href={channel[0].link}>{channel[0].title}</a></h2>
                    <Carousel articles={articles}/>
                </>
            
            }</>
        </div>
    );
}

export default FeedGroup;