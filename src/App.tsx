import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ConstCranes from './pages/Cranes/ConstCranes/ConstCranes';
import Contact from './pages/Contact/Contact';
import Cranes from './pages/Cranes/Cranes';
import Eurogru from './pages/Eurogru/Eurogru';
import Home from './pages/Home/Home';
import MobilCranes from './pages/Cranes/MobilCranes/MobilCranes';
import QuickErectCranes from './pages/Cranes/QuickErectCranes/QuickErectCranes';
import UsedCranes from './pages/UsedCranes/UsedCranes';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';


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
