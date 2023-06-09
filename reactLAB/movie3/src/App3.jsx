import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, HashRouter, Routes} from 'react-router-dom';
import About from './routes/About.jsx';
import Home from './routes/Home.jsx';
import Navigation from './components/Navigation.jsx';
import Detail from './routes/Detail.jsx';
class App3 extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Routes>
                        <Route path="/" exact={true} element={<Home/>} />
                        <Route path="/about" element={<About/>} />
                        <Route path="/movie-detail" element={<Detail/>} />
                    </Routes>
                </Router>
            </div>
        );
    }
}
export default App3;