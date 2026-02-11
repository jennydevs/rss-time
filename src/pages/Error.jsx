import { useRouteError, useNavigate } from 'react-router';


function Error() {
    const error = useRouteError();
    const navigate = useNavigate();

    return (
        <div className='container' style={{textAlign:'center', paddingBottom:'20px'}}>
            <div className="content"  style={{textAlign:'center', padding:'0'}}>
                <h1 style={{paddingTop:'10px'}}>{error.status || 'Error'}</h1>
                <hr/>
                <p>{error.statusText || error.message}</p>
                { console.error(error) }
                <button  type="button" onClick={() => { navigate(-1) }} className='error-button'>Go back</button>
            </div>
        </div>
    );
}

export default Error;