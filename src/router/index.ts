import { createBrowserRouter } from 'react-router';
import App from '../views/App';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
]);

export default router;
