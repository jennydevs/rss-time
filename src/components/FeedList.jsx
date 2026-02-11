import FeedBlob from './FeedBlob.jsx';


function FeedList({feed_links}) {
    return (
        <>
            {
                feed_links.length == 0 ? <p>No feeds yet!</p> :
                    <ul className='feed-list'>
                    {feed_links.map((feed_link) => 
                        <li className='feed-info'>
                            <button>Up</button>
                            <button>down</button>
                            <FeedBlob key={0} feed_info={feed_link}/>
                            <button>trash</button>
                        </li>
                    )}
                    </ul>
            }
        </>
    );
}

export default FeedList;