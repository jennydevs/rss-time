import ArticlePreview from './ArticlePreview.jsx';


function Carousel({articles}) {

    return (
        <div>
            <ul className='carousel'>
                {
                    articles.map((article) => 
                        <li className='carousel-article' key={article.guid}><ArticlePreview article={article}/></li>
                )}
            </ul>
        </div>
    );
}

export default Carousel;