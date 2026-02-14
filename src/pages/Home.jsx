import { lazy, useState, useEffect } from 'react';
const FeedGroup = lazy(() => import('../components/FeedGroup.jsx'));

function setupFeedGroups(channels, articles) {
    let collection = [];
    for (let i = 0; i < channels.length; i++ ) {
        collection.push(<FeedGroup channel={channels[i]} articles={articles[i]} />);
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
                !feeds ? <p>No feeds on Home</p> : feeds 
            }
        </>
    );
}

export default Home;




// (items_list.map((item) => <Article key={item.guid} item={item}/>));