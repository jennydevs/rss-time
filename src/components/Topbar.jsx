import { Link } from 'react-router';

function Topbar({title, setCurrPage}) {
    return (
        <div className='topbar'>
            <h1>{title}</h1>
            <nav className='topbar-nav'>
                <ul className='topbar-links'>
                    <li className='topbar-link'><Link to='/' onClick={()=> setCurrPage("home")}>Home</Link></li>
                    <li className='topbar-link'><Link to='/' onClick={()=> setCurrPage("settings")}>Settings</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Topbar;