import { lazy } from 'react';

const FeedGroup = lazy(() => import('../components/FeedGroup.jsx'));

function Home({feed_links}) {
    const data = [{
        'title': "THE GAME",
        'articles':
            [
                {
                    'title': "The world is a vast place to explore, and space beyond that is amazing.",
                    'date': "September 24, 2025"
                },
            ]
    }];

    return (
        <>
            {feed_links.map((feed_link) => <FeedGroup data={feed_link}/>)}
        </>
    );
}

export default Home;