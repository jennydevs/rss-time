import { useState, createContext } from 'react';
import FeedList from '../components/FeedList.jsx';


function AddLink({feed_links, setFeedLinks}) {
    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const form_data = new FormData(form);
        const form_json = Object.fromEntries(form_data.entries());
        
        let value = form_json["feed_link"];
        let links_collection = feed_links.slice();
        links_collection.push(value);
        setFeedLinks(links_collection);

        form.reset();
    }

    return (
        <>
            <form method='post' onSubmit={handleSubmit}>
                <label>
                    Add RSS feed link: 
                    <input name='feed_link' required/>
                </label>
                <button type='submit'>Add</button>
            </form>
        </>
    );
}


function Settings() {
    const [feed_links, setFeedLinks] = useState([]);

    return (
        <>
            <AddLink feed_links={feed_links} setFeedLinks={setFeedLinks}/>
            <FeedList feed_links={feed_links}/>
        </>
    );
}

export default Settings;