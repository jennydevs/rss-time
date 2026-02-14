import { useState, useEffect } from 'react';
import rehypeSanitize from 'rehype-sanitize';
import Home from './pages/Home.jsx';
import Settings from './pages/Settings.jsx';
import Topbar from './components/Topbar.jsx';
import Footer from './components/Footer.jsx';


function getChannelData(doc) {
    let channel = doc.getElementsByTagName('channel');
    const tags = ['title', 'link', 'description', 'language', 'docs', 'ttl'];

    let content = {};
    for (let j = 0; j < tags.length; j++) {
        let tag_items = channel[0].getElementsByTagName(tags[j]);
        if (tag_items.length != 0) {
            content[tags[j]] = tag_items[0].textContent;
        } 
        else {
            content[tags[j]] = null;
        }
    }

    return [content];
}


function getItemsData(doc) {
    let items = doc.getElementsByTagName('item');
    const tags = ['title', 'link', 'description', 'guid', 'pubDate'];

    let items_list = [];
    for (let i = 0; i < items.length; i++) {
        var content = {};
        for (let j = 0; j < tags.length; j++) {
            let tag_items = items[i].getElementsByTagName(tags[j]);
            if (tag_items.length != 0) {
                content[tags[j]] = tag_items[0].textContent;
            } 
            else {
                content[tags[j]] = null;
            }
        }

        items_list.push(content);
    }

    return items_list;
}


async function getFeeds(feed_links, setChannels, setArticles) {
    let xml_doc = null;
    async function getRSSFeed(feed_link) {
    await fetch("./rss_examples/" + feed_link)
    .then((response)=> {
        return response.text();
    })
    .then((rss_feed) => {
        let parser = new DOMParser();
        xml_doc = parser.parseFromString(rss_feed, "text/xml");
    })
    .catch((error) => {
        console.error(error);
    });

    return xml_doc;
}

    let channels = [];
    let articles = [];
    for (let i = 0; i < feed_links.length; i++) {
        let xml_doc = await getRSSFeed(feed_links[i]);
        channels.push(getChannelData(xml_doc));
        articles.push(getItemsData(xml_doc));
    }

    setChannels(channels);
    setArticles(articles);
}


function App(){
    const [curr_page, setCurrPage] = useState("home");
    const [feed_links, setFeedLinks] = useState([]);
    const [channels, setChannels] = useState([]);
    const [articles, setArticles] = useState([]); 

    useEffect(() => {
        getFeeds(feed_links, setChannels, setArticles);
    }, [feed_links])

    return(
        <div className='container'>
            <div className='content'>
                <Topbar title={curr_page == 'home' ? "RSS FEED" : "SETTINGS"} setCurrPage={setCurrPage}/>
                {
                    curr_page == 'home' ? <Home channels={channels} articles={articles} /> : <Settings feed_links={feed_links} setFeedLinks={setFeedLinks} channels={channels} />
                }
            </div>
            <Footer/>
        </div>
    );
}


export default App;
