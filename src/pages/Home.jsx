import { lazy, useState, useEffect } from 'react';
const FeedGroup = lazy(() => import('../components/FeedGroup.jsx'));

function setupFeedGroups(channels, articles) {
    let collection = [];
    for (let i = 0; i < channels.length; i++ ) {
        collection.push([channels[i], articles[i]]);
    }

    return collection;
}


function Home({channels, articles}) {
    const [feeds, setFeeds] = useState([]);
    useEffect(() => {
        setFeeds(setupFeedGroups(channels, articles));
    }, [channels.length]);

    return (
        <>
            {
                feeds.length == 0? <p>No feeds yet!</p> :
                    feeds.map((feed) => <FeedGroup key={feed[0][0]['link']} channel={feed[0]} articles={feed[1]} />)
            }
        </>
    );
}

export default Home;