import { useState } from 'react';
import { createPortal } from 'react-dom';
import ArticleSummary from './ArticleSummary.jsx';

function ArticlePreview({article}) {
    const [opened, setOpened] = useState(false);

    return (
        <>
        <div className='article-preview' onClick={() => {setOpened(true)}}>
            <header>{article.title}</header>
            <p>{article.pubDate}</p>
        </div>
        {opened && createPortal(<ArticleSummary setOpened={setOpened} summary={article}/>, document.body)}
        </>
    );
}

export default ArticlePreview;