import { Outlet } from 'react-router-dom';
import Nav from './nav';

export default function Interface() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
