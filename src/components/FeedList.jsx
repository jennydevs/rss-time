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
        <li style={{listStyle:'none'}}>
            <hr />
            <h2><a href={channel.link}>{channel.title}</a></h2>
            <p>{channel.description}</p>
            <p>source: {feed_link}</p>
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
                channels.length == 0 ? <p>No feeds yet!</p> :
                    <ul className='feed-list'>{feeds}</ul>
            }
            <hr />
        </>
    );
}

export default FeedList;