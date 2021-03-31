import './App.scss';
import './styles/reset.scss';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Home} from './components/Home/Home';
import {Form} from './components/Form/Form';

function App() {
    return (
        <Router>
            <div className='App'>
                <nav className='nav'>
                    <ul className='nav_list'>
                        <li className='nav_link'>
                            <Link to='/home'>
                                <a data-item='Home'>Home</a>
                            </Link>
                        </li>
                        <li className='nav_link'>
                            <Link to='/form'>
                                <a data-item='Form' >Form</a>
                            </Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/form' component={Form}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
