import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import ConstCranes from './Pages/Cranes/ConstCranes';
import Contact from './Pages/Contact';
import Cranes from './Pages/Cranes';
import Eurogru from './Pages/Eurogru';
import Home from './Pages/Home';
import MobilCranes from './Pages/Cranes/MobilCranes';
import QuickErectCranes from './Pages/Cranes/QuickErectCranes';
import UsedCranes from './Pages/UsedCranes';
import NotFoundPage from './Pages/NotFoundPage';


const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/cranes', element: <Cranes /> },
  { path: '/cranes/constcranes', element: <ConstCranes /> },
  { path: '/cranes/mobilcranes', element: <MobilCranes /> },
  { path: '/cranes/quickerectcranes', element: <QuickErectCranes /> },
  { path: '/usedcranes', element: <UsedCranes /> },
  { path: '/eurogru', element: <Eurogru /> },
  { path: '/contact', element: <Contact /> },
  { path: '*', element: <NotFoundPage /> },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
