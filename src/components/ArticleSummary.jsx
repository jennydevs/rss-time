

function ArticleSummary({setOpened, summary}) {
    return(
            <div className='modal'>
                <p>{summary.title}</p>
                <p>{summary.pubDate}</p>
                <p>{summary.description}</p>
                <button onClick={() => {setOpened(false)}}>Close</button>
            </div>
    );
}

export default ArticleSummary;