import Carousel from "./Carousel.jsx";


function FeedGroup({data}) {
    return (
        <div className='feed-group'>
            <h2>{data[0].title}</h2>
            <Carousel articles={data[0].articles}/>
        </div>
    );
}

export default FeedGroup;