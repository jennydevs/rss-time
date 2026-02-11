import { lazy, useContext } from 'react';

const FeedGroup = lazy(() => import('../components/FeedGroup.jsx'));

function Home() {
    const data = [{
        'title': "THE GAME",
        'articles':
            [
                {
                    'title': "The world is a vast place to explore, and space beyond that is amazing.",
                    'date': "September 24, 2025"
                },
                {
                    'title': "The world is a vast place to explore.",
                    'date': "September 24, 2025"
                },
            ]
    }];

    // const feed_data = useContext(FeedContext);


    return (
        <>
            {/* <FeedGroup data={data}/> */}
        </>
    );
}

export default Home;