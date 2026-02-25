import { useState } from 'react';
import { createPortal } from 'react-dom';
import ArticleSummary from './ArticleSummary.jsx';

function ArticlePreview({article}) {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <div className='article-preview' style={{textAlign:'center'}} onClick={() => {setOpened(true)}}>
                <h4>{article.title}</h4>
                <time>{article.pubDate}</time>
            </div>
            {opened && createPortal(<ArticleSummary setOpened={setOpened} summary={article}/>, document.body)}
        </>
    );
}

export default ArticlePreview;