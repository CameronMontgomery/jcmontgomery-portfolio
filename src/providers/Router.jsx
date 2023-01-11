import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../components/App';
import Home from '../routes/Home';
import Error from '../routes/Error';
import About from '../routes/About';
import Projects from '../routes/Projects';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: 'about/',
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: 'projects/',
        element: <Projects />,
        errorElement: <Error />,
      },
    ],
  },
]);

const AppRouterProvider = () => <RouterProvider router={router} />;

export default AppRouterProvider;
