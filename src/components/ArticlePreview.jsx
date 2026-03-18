

function ArticlePreview({article}) {
    return (
        <>
            <div className='article-preview' style={{textAlign:'center'}}>
                <h4>{article.title}</h4>
                <time>{article.pubDate}</time>
            </div>
        </>
    );
}

export default ArticlePreview;