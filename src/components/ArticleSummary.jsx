

function ArticleSummary({setOpened, summary}) {
    return(
        <div className='modal-group'>
            <div className='modal-bg' onClick={() => setOpened(false)} />
            <div className='modal-content'>
                <h4>{summary.title}</h4>
                <time>{summary.pubDate}</time>
                <div className='html-content' dangerouslySetInnerHTML={{__html: summary.description}}></div>
                <button onClick={() => setOpened(false)}>Close</button>
            </div>
        </div>
    );
}

export default ArticleSummary;