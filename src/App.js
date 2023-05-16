import './App.css';
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from 'react-router-dom';
import Interface from './components/interface';
import Categories from './components/categories';
import BookList from './components/booklist';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Interface />}>
      <Route index element={<BookList />} />
      <Route path="categories" element={<Categories />} />
    </Route>,
  ),
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
