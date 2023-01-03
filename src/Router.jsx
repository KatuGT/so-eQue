import { createBrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.jsx';
import Home from './pages/home/Home.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
