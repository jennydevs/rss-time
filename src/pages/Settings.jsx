import FeedList from '../components/FeedList.jsx';


function AddLink({feed_links, setFeedLinks}) {
    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const form_data = new FormData(form);
        const form_json = Object.fromEntries(form_data.entries());
        
        let value = form_json["feed_link"];
        let links_collection = feed_links.slice();

        for (let i = 0; i < links_collection.length; i++) {
            if (links_collection[i]['link'] == value) {
                alert("You already have this rss feed!");
                return;
            }
        }

        links_collection.push({
            "link": value,
            "fetched": false,
        });
        
        setFeedLinks(links_collection);

        form.reset();
    }

    return (
        <>
            <form className='looseleaf-item' method='post' onSubmit={handleSubmit}>
                <label>
                    Input RSS feed link: 
                    <input name='feed_link' required/>
                </label>
                <button type='submit'>Add</button>
            </form>
        </>
    );
}


function Settings({feed_links, setFeedLinks, channels}) {
    return (
        <div className='looseleaf'>
            <div className='looseleaf-top'>
                <AddLink feed_links={feed_links} setFeedLinks={setFeedLinks}/>
            </div>
            <FeedList feed_links={feed_links} channels={channels}/>
        </div>
    );
}

export default Settings;