import '../css/App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Quiz from './Quiz';

function App() {
  return (
    <div>
      <h1 className="App">APP TITLE</h1>
      <Router>
        <Route path="/" component={Quiz} />
      </Router>
    </div>
  );
}

export default App;
