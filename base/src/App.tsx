import './App.css';
import { Link } from 'react-router-dom';

function App() {
    return (
        <>
            <div>
                <span>主应用</span>
                <br />
                <Link to="/sub-react">sub-react</Link>
                <br />
                <Link to="/sub-vue">sub-vue</Link>
                <br />
                <Link to="/sub-angular">sub-angular</Link>
            </div>

            <div id="sub-app"></div>
        </>
    );
}

export default App;
