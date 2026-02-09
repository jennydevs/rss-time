import { Link } from 'react-router';

function Topbar({header}) {
    return (
        <div className='topbar'>
            <h1>RSS FEED</h1>
            <nav className='topbar-nav'>
                <ul className='topbar-links'>
                    <li className='topbar-link'><Link to='/'>Home</Link></li>
                    <li className='topbar-link'><Link to='/settings'>Settings</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Topbar;