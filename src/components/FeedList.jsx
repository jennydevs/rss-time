import FeedBlob from './FeedBlob.jsx';


function FeedList({feed_links}) {
    return (
        <>
            {
                feed_links.length == 0 ? <p>Loading...</p> :
                    feed_links.map((feed_link) => 
                        <li className='feed-info'><FeedBlob key={0} feed_info={feed_link}/></li>
            )}
        </>
    );
}

export default FeedList;