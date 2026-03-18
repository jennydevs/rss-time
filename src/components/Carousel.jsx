import ArticleGroup from './ArticleGroup.jsx';


function Carousel({articles}) {

    return (
        <div>
            <ul className='carousel'>
                { articles.map((article) => <ArticleGroup article={article} />) }
            </ul>
        </div>
    );
}

export default Carousel;