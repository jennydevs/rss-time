import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Home from './pages/Home.jsx';
import Settings from './pages/Settings.jsx';
import Error from './pages/Error.jsx';
import './App.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <Error />,
  },
  {
    path: '/settings',
    element: <Settings/>,
    errorElement: <Error />,
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
