import { useState, useEffect } from 'react';

function setupChannelDetails(feed_links, channels) {
    let collection = [];
    for (let i = 0; i < feed_links.length; i++ ) {
        collection.push(<ChannelDetails key={feed_links[i]['link']} feed_link={feed_links[i]['link']} channel={channels[i][0]}/>);
    }

    return collection;
}


function ChannelDetails({feed_link, channel}) {
    return (
        <li>
            <p className='lined lined-title'><img className='hole' /><a href={channel.link}>{channel.title}</a></p>
            <p className='lined'>{channel.description}</p>
            <p className='lined'>source: {feed_link}</p>
            <p className='looseleaf-line'>&nbsp;</p>
        </li>
    );
}


function FeedList({feed_links, channels}) {
    const [feeds, setFeeds] = useState([]);
    useEffect(() => {
        setFeeds(setupChannelDetails(feed_links, channels));
    }, [channels.length]);
    return (
        <>
            {
                
                channels.length == 0 ? 
                    <>
                        <p className='lined'>No feeds yet!</p>
                        <p className='lined'>&nbsp;</p>
                    </> 
                    :
                    <ul className='feed-list'>
                        <p className='looseleaf-line'>&nbsp;</p>
                        {feeds}
                        <p className='looseleaf-line'>&nbsp;</p>
                    </ul>
            }
        </>
    );
}

export default FeedList;