import { useState, useEffect } from 'react';
import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
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


async function sanitizeContent(curr_str) {
    return String(
        await unified()
        .use(rehypeParse, {fragment: true})
        .use(rehypeSanitize)
        .use(rehypeStringify)
        .process(curr_str)
    );
}


async function getItemsData(doc) {
    let items = doc.getElementsByTagName('item');
    
    const tags = ['title', 'link', 'description', 'guid', 'pubDate'];

    let items_list = [];
    for (let i = 0; i < items.length; i++) {
        var content = {};
        for (let j = 0; j < tags.length; j++) {
            content[tags[j]] = null;
            let tag_items = items[i].getElementsByTagName(tags[j]);
            if (tag_items.length != 0) {
                let curr_str = tag_items[0].textContent;
                if (tags[j] == 'description' || tags[j] == 'title') {
                    if (tag_items[0].childNodes[0].nodeName == '#cdata-section') {
                        content[tags[j]] = await sanitizeContent(tag_items[0].childNodes[0].data);
                    }
                    else {
                        content[tags[j]] = await sanitizeContent(curr_str); // normal string
                    }
                }
                else {
                    content[tags[j]] = curr_str;
                }
            }
        }

        items_list.push(content);
    }

    return items_list;
}


async function getFeeds(feed_links, setChannels, setArticles, channels, articles, setFeedLinks) {
    async function getRSSFeed(feed_link) {
        let xml_doc = null;

        await fetch(feed_link, {
            headers: {
                "Accept": "application/xml",
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then((response)=> {
            if (response.status == 404) {
                alert("RSS feed not found at this location!");
                return "";
            }

            if (response.ok) {
                return response.text();
            }
        })
        .then((rss_feed) => {
            if (rss_feed == "") { return null; }

            let parser = new DOMParser();
            xml_doc = parser.parseFromString(rss_feed, "text/xml");
        })
        .catch((error) => {
            console.error(error);
        });

        return xml_doc;
    }

    let channel_list = channels.slice();
    let article_list = articles.slice();

    if (feed_links.length > 0 && feed_links[feed_links.length - 1]['fetched']) { return; }
    let xml_doc = await getRSSFeed(feed_links[feed_links.length - 1]['link']);

    if (!xml_doc) {
        let feed_links_arr = feed_links.slice();
        feed_links_arr.pop();
        setFeedLinks(feed_links_arr);
    }
    else if (!feed_links[feed_links.length - 1]['fetched']){
        channel_list.push(getChannelData(xml_doc));
        article_list.push(await getItemsData(xml_doc));
        feed_links[feed_links.length - 1]['fetched'] = true; 

        setChannels(channel_list);
        setArticles(article_list);
    }
}


function App(){
    const [curr_page, setCurrPage] = useState("home");
    const [feed_links, setFeedLinks] = useState([]);
    const [channels, setChannels] = useState([]);
    const [articles, setArticles] = useState([]); 

    useEffect(() => {
        if (feed_links.length == 0) {
            return;
        }
        getFeeds(feed_links, setChannels, setArticles, channels, articles, setFeedLinks);
    }, [feed_links])

    return(
        <div className='container'>
            <Topbar title={curr_page == 'home' ? "RSS FEEDS" : "SETTINGS"} setCurrPage={setCurrPage}/>
            <div className='content'>
                {
                    curr_page == 'home' ? <Home channels={channels} articles={articles} /> : 
                    <Settings feed_links={feed_links} setFeedLinks={setFeedLinks} channels={channels} />
                }
            </div>
            <Footer/>
        </div>
    );
}


export default App;
