import { createBrowserRouter } from 'react-router';
import App from '../pages/App';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
]);

export default router;
