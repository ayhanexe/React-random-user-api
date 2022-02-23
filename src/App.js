import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import Router from './Router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
