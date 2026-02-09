import ArticlePreview from './ArticlePreview.jsx';


function Carousel({articles}) {
    return (
        <div>
            <ul className='carousel'>
                {
                    articles.map((article) => 
                        <li className='carousel-article'><ArticlePreview key={0} article={article}/></li>
                )}
            </ul>
        </div>
    );
}

export default Carousel;