

function ArticleSummary({setOpened, summary}) {
    return(
        <div className='modal-group'>
            <div className='modal-bg' onClick={() => setOpened(false)} />
            <div className='modal-content'>
                <div className='html-content' dangerouslySetInnerHTML={{__html: summary.title}}></div>

                <time>{summary.pubDate}</time>
                <div className='html-content' dangerouslySetInnerHTML={{__html: summary.description}}></div>
                <button onClick={() => setOpened(false)}>Close</button>
            </div>
        </div>
    );
}

export default ArticleSummary;