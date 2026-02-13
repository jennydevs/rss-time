
function combineInfo(feed_links, channels) {

}


function createFeedBlobs(feed_links, channels) {
    for (let i = 0; i < feed_links.length; i++ ) {
        
    }
 channels.map((channel) => {
                            feed_links.map((feed_link) => 
                                <li className='feed-info'>
                                    <FeedBlob feed_info={feed_link} channel={channel}/>
                                </li>
                            )
                        })
}


function FeedBlob({feed_info, channel}) {
    return (
        <>
            <h3>{feed_info}</h3>
        </>
    );
}


function FeedList({feed_links, channels}) {
    return (
        <>
            {
                (feed_links.length) == 0 && (channels.length == 0) ? <p>No feeds yet!</p> :
                    <ul className='feed-list'>
                        { createFeedBlobs(feed_links, channels) }
                    </ul>
            }
        </>
    );
}

export default FeedList;