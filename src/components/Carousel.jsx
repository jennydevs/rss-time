import ArticleGroup from './ArticleGroup.jsx';


function Carousel({articles}) {

    return (
        <div>
            <ul className='carousel'>
                { articles.map((article) => <ArticleGroup key={article['guid']} article={article} />) }
            </ul>
        </div>
    );
}

export default Carousel;