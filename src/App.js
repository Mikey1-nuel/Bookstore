import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import Categories from './components/categories';
import BookList from './components/booklist';

function App() {
  return (
    <div>
      <Nav />
      <div className="pageContainer">
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="categories" element={<Categories />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
