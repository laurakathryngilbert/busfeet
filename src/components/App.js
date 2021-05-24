import '../css/App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import QuizContainer from './QuizContainer';

function App() {
  return (
    <div>
      <h1 className="App">APP TITLE</h1>
      <Router>
        <Route path="/" component={QuizContainer} />
      </Router>
    </div>
  );
}

export default App;
