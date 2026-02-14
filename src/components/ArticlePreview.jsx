

function ArticlePreview({article}) {
    return (
        <div className='article-preview'>
            <header>{article.title}</header>
            <p>{article.pubDate}</p>
        </div>
    );
}

export default ArticlePreview;