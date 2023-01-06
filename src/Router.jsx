import { createBrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.jsx';
import DreamPost from './pages/dreamPost/DreamPost.jsx';
import Home from './pages/home/Home.jsx';
import NewDream from './pages/newDream/NewDream.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/dream',
        element: <DreamPost />,
      },
      {
        path: '/post-dream',
        element: <NewDream />,
      },
    ],
  },
]);
