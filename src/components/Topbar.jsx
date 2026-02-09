import { Link } from 'react-router';

function Topbar({header}) {
    return (
        <>
            <h1>RSS FEED</h1>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/settings'>Settings</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Topbar;