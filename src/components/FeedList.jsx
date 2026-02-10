import { useState } from 'react';

function FeedList({data}) {
    // const [update_link, setUpdateLink] = useState("");

    return (
        <>
        {console.log(data)}
            {!data ? <p>no</p>: <p>{console.log(data)}</p>}
        
        </>
    );
}

export default FeedList;