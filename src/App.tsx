import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ConstCranes from './Pages/Cranes/ConstCranes/ConstCranes';
import Contact from './Pages/Contact/Contact';
import Cranes from './Pages/Cranes/Cranes';
import Eurogru from './Pages/Eurogru/Eurogru';
import Home from './Pages/Home/Home';
import MobilCranes from './Pages/Cranes/MobilCranes/MobilCranes';
import QuickErectCranes from './Pages/Cranes/QuickErectCranes/QuickErectCranes';
import UsedCranes from './Pages/UsedCranes/UsedCranes';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';


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
