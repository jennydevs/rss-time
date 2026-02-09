import {lazy} from 'react';
import Topbar from '../components/Topbar.jsx';
import Footer from '../components/Footer.jsx';

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
        <div className='container'>
            <div className='content'>
                <Topbar/>
                <FeedGroup data={data}/>
                <FeedGroup data={data}/>
                <FeedGroup data={data}/>
                <FeedGroup data={data}/>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;