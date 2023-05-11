import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <div className="pageContainer">
          <Routes>
            <Route path="/" />
            <Route path="/categories" />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
