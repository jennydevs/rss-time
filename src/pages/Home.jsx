import FeedGroup from '../components/FeedGroup.jsx';

function Home() {
    const data = [{
        'title': "THE GAME",
        'articles':
            [
                {
                    'title': "The world is a vast place to explore.",
                    'date': "September 24, 2025"
                },
                {
                    'title': "The world is a vast place to explore.",
                    'date': "September 24, 2025"
                },
                {
                    'title': "The world is a vast place to explore.",
                    'date': "September 24, 2025"
                },
                {
                    'title': "The world is a vast place to explore.",
                    'date': "September 24, 2025"
                },
                {
                    'title': "The world is a vast place to explore.",
                    'date': "September 24, 2025"
                },
                {
                    'title': "The world is a vast place to explore.",
                    'date': "September 24, 2025"
                },
                {
                    'title': "The world is a vast place to explore.",
                    'date': "September 24, 2025"
                },
                {
                    'title': "The world is a vast place to explore.",
                    'date': "September 24, 2025"
                },
                {
                    'title': "The world is a vast place to explore.",
                    'date': "September 24, 2025"
                },
                {
                    'title': "The world is a vast place to explore.",
                    'date': "September 24, 2025"
                },
                {
                    'title': "The world is a vast place to explore.",
                    'date': "September 24, 2025"
                },
                {
                    'title': "The world is a vast place to explore.",
                    'date': "September 24, 2025"
                },
                {
                    'title': "The world is a vast place to explore.",
                    'date': "September 24, 2025"
                },
                {
                    'title': "The world is a vast place to explore.",
                    'date': "September 24, 2025"
                },
                {
                    'title': "The world is a vast place to explore.",
                    'date': "September 24, 2025"
                },
                {
                    'title': "The world is a vast place to explore.",
                    'date': "September 24, 2025"
                },
            ]

    }];
    return (
        <div className={'home'}>
            <FeedGroup data={data}/>
            <FeedGroup data={data}/>
            <FeedGroup data={data}/>
        </div>
    );
}

export default Home;