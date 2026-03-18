import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

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
  { path: '/Krane', element: <Cranes /> },
  { path: '/Krane/Baukrane', element: <ConstCranes /> },
  { path: '/Krane/Mobilkran', element: <MobilCranes /> },
  { path: '/Krane/Schnelleinsatzkran', element: <QuickErectCranes /> },
  { path: '/Gebrauchte-Krane', element: <UsedCranes /> },
  { path: '/Eurogru', element: <Eurogru /> },
  { path: '/Kontakt', element: <Contact /> },
  { path: '*', element: <NotFoundPage /> },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
