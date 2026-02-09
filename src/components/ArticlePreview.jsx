

function ArticlePreview({article}) {
    return (
        <div className='article-preview'>
            <header>{article.title}</header>
            <p>{article.date}</p>
        </div>
    );
}

export default ArticlePreview;