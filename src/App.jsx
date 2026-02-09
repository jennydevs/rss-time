import rehypeSanitize from 'rehype-sanitize'
import './App.css'

import { useState, useEffect } from 'react';

import Home from './pages/Home.jsx';


function Article({item}) {
    const description = item.description;

    return (
        <>
            <h2><a href={item.link}>{item.title}</a></h2>
            {/* <div dangerouslySetInnerHTML={{__html: description}}/>  */}
        </>
    );
}


function ChannelDetails({data}) {
    return (
        <>
            <h1><a href={data.link}>{data.title}</a></h1>
        </>
    );
}

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

    return (<ChannelDetails data={content}/>);
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

    return (items_list.map((item) => <Article key={item.guid} item={item}/>));
}


function App(){
    const [channel, setChannel] = useState([]);
    const [articles, setArticles] = useState([]); 

    useEffect(() => {
        async function getRSSFeed() {
            await fetch("./rss_examples/...")
            .then((response)=> {
                return response.text();
            })
            .then((rss_feed) => {
                let parser = new DOMParser();
                let xml_doc = parser.parseFromString(rss_feed, "text/xml");
                setChannel(getChannelData(xml_doc));
                setArticles(getItemsData(xml_doc))
            })
            .catch((error) => {
                console.error(error);
            });
        }

        // getRSSFeed();
    }, []);

    return(
        <div className='app'>
            <Home/>
            {/* { !channel ? <p>Loading</p> : <div>{channel}</div> }
            { !articles ? <p>Loading...</p> : <div>{articles} </div> } */}
        </div>
    );
}


export default App;
