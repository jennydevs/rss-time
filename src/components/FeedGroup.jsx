import Carousel from "./Carousel.jsx";


function FeedGroup({data}) {
    return (
        <div>
            <header>{data[0].title}</header>
            <Carousel articles={data[0].articles}/>
        </div>
    );
}

export default FeedGroup;