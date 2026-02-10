
import { useState } from 'react';

import Topbar from '../components/Topbar.jsx';
import Footer from '../components/Footer.jsx';
import FeedList from '../components/FeedList.jsx';





function Settings() {
    const [feeds, setFeeds] = useState([]);
    const [feed_url, setFeedURL] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const form_data = new FormData(form);
        const form_json = Object.fromEntries(form_data.entries());

        console.log(form_json);
        setFeedURL([feed_url]);
    }

    return (
        <div className='container'>
            <div className='content'>
                <Topbar/>
                <form method='post' onSubmit={handleSubmit}>
                    <label>
                        Add RSS feed link
                        <input name='feed-link' type='url' required/>
                    </label>
                    <button type='submit'>Add</button>
                </form>
                <FeedList data={feed_url}/>
            </div>
            <Footer/>
        </div>
    );
}

export default Settings;