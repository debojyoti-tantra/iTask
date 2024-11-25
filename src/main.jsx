import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './components/About';
import Contact from './components/Contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />
   },
   {
      path: "/contact",
      element: <Contact />
   },
   {
      path: "/about",
      element: <About />
   }
])

createRoot(document.getElementById('root')).render(
 <>
   <RouterProvider router={router} />
 </>,
)
