import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

const router = createRouter({ routeTree });
declare module '@tanstack/react-router' {
  interface Router {
    router: typeof router;
  }
}

const App = () =>{
  return (
    <RouterProvider router={router} />
  );
}
export default App;
