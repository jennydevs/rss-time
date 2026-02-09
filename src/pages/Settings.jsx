import Topbar from '../components/Topbar.jsx';
import Footer from '../components/Footer.jsx';
import FeedList from '../components/FeedList.jsx';


function Settings() {
    return (
        <div className='container'>
            <Topbar/>
            <div>
                <label>
                    Add RSS FEED
                    <input></input>
                </label>
                <FeedList/>
            </div>
            <Footer/>
        </div>
    );
}

export default Settings;