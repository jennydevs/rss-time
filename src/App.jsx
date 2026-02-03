import { useState, useEffect } from 'react';


function Article({item}) {
    return (
        <div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>{item.link}</p>
            <a href={item.link}>{item.link}</a>
        </div>
    );
}


function parseData(doc) {
    var items = doc.getElementsByTagName('item');

    const tags = ['title', 'link', 'description', 'guid', 'pubDate'];

    var items_list = [];
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
    const [rss_articles, setArticles] = useState([]); 

    useEffect(() => {
        async function getRSSFeed() {
            await fetch("./rss_examples/...")
            .then((response)=> {
                return response.text();
            })
            .then((rss_feed) => {
                var parser = new DOMParser();
                var xml_doc = parser.parseFromString(rss_feed, "text/xml");

                setArticles(parseData(xml_doc))
            })
            .catch((error) => {
                console.error(error);
            });
        }

        getRSSFeed();
    }, []);

    return(
        <>
            {
                !rss_articles ? 
                    <p>Loading...</p> :
                    <div>
                        {rss_articles}
                    </div>
            }
        </>
    );
}


export default App;
