import { useState } from 'react';
import { createPortal } from 'react-dom';
import ArticlePreview from './ArticlePreview.jsx';
import ArticleSummary from './ArticleSummary.jsx';

function ArticleGroup({article}) {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <li className='carousel-article' key={article.guid} onClick={() => {setOpened(true)}}>
                <ArticlePreview article={article}/>
            </li>
            {opened && createPortal(<ArticleSummary setOpened={setOpened} summary={article}/>, document.body)}
        </>
    );
}

export default ArticleGroup;