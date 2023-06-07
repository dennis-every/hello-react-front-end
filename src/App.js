import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Greeting from './pages/Greeting';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Greeting />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
