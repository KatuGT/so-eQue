import { createBrowserRouter } from 'react-router-dom';
import PerfilOptions from './components/commonComponents/perfilOptions/PerfilOptions.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import DreamPost from './pages/dreamPost/DreamPost.jsx';
import DreamsILike from './pages/dreamsILike/DreamsILike.jsx';
import Home from './pages/home/Home.jsx';
import MyDreams from './pages/myDreams/MyDreams.jsx';
import NewDream from './pages/newDream/NewDream.jsx';
import UserProfile from './pages/userProfile/UserProfile.jsx';

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
      {
        path: 'user-profile/',
        element: <PerfilOptions />,
        children: [
          {
            index: true,
            element: <UserProfile/>,
          },
          {
            path: '/user-profile/my-dreams',
            element: <MyDreams/>,
          },
          {
            path: '/user-profile/dreams-i-like',
            element: <DreamsILike/>,
          },
        ],
      },
    ],
  },
]);
