import logo from './logo.svg';
import './App.css';
import Layout from './components/shared/layout/Layout';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import QuizPage from './components/pages/QuizPage';

function App() {
  return (
    <Layout>
              <Switch>
                
                
                
                <Route path="/" exact component={HomePage} />
                <Route path="/ask" exact component={QuizPage} />
              </Switch>
              </Layout>
            
  );
}

export default App;
{/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}