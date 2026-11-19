import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@fontsource/bungee';
import '@fontsource-variable/inter'
import Layout from './components/Layout/Layout';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import ConstCranes from './pages/Cranes/ConstCranes/ConstCranes'
import Contact from './pages/Contact/Contact'
import Cranes from './pages/Cranes/Cranes'
import Eurogru from './pages/Eurogru/Eurogru'
import Home from './pages/Home/Home'
import MobilCranes from './pages/Cranes/MobilCranes/MobilCranes'
import QuickErectCranes from './pages/Cranes/QuickErectCranes/QuickErectCranes'
import UsedCranes from './pages/UsedCranes/UsedCranes'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Impressum from "./pages/Impressum/Impressum.tsx";

// eslint-disable-next-line react-refresh/only-export-components
function RouterLayout() {
  return (
    <>
      <ScrollToTop />
      <Layout />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <RouterLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'Krane', element: <Cranes /> },
      { path: 'Krane/Baukrane', element: <ConstCranes /> },
      { path: 'Krane/Mobilkran', element: <MobilCranes /> },
      { path: 'Krane/Schnelleinsatzkran', element: <QuickErectCranes /> },
      { path: 'Gebrauchte-Krane', element: <UsedCranes /> },
      { path: 'Eurogru', element: <Eurogru /> },
      { path: 'Kontakt', element: <Contact /> },
      { path: '*', element: <NotFoundPage /> },
      { path: 'Impressum', element: <Impressum />}
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)