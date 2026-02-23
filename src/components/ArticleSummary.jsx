

function ArticleSummary({setOpened, summary}) {
    return(
        <div className='modal'>
            <div className='modal-content'>
                <p>{summary.title}</p>
                <p>{summary.pubDate}</p>
                <p>{summary.description}</p>
                <button onClick={() => {setOpened(false)}}>Close</button>
            </div>
        </div>
    );
}

export default ArticleSummary;