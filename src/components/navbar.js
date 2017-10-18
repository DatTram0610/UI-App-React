import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import Pictures from './pictures.js';

class NavBar extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul className="nav-bar-ul">
                        <li className="nav-bar-li"><Link to="/" className="nav-bar-link">Home</Link></li>
                        <li className="nav-bar-li"><Link to="/about" className="nav-bar-link">About</Link></li>
                        <li className="nav-bar-li"><Link to="/topics" className="nav-bar-link">Topics</Link></li>
                        <li className="nav-bar-li"><Link to="/images" className="nav-bar-link">Images</Link></li>
                    </ul>

                    <hr />

                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/topics" component={Topics} />
                    <Route path="/images" component={Pictures} />
                </div>
            </Router>
        )
    }
}
const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
          </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
          </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
          </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic} />
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )} />
    </div>
)

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

export default NavBar;