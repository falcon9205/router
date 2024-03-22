import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About'
import Contact from './Components/Contactus/Contact'
import Github, { gitapi } from './Components/Github/Github';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    
    path : "/",
    element:<Layout/>,
    children : [
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"Contact",
        element:<Contact/>
      },
      {
        // loader:{gitapi},
        path:"Github",
        element:<Github/>
      }
    ]
  }
])
// const router = createBrowserRouter([
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>}>
//       <Route path='' element={<Home/>}/>
//       <Route path='about' element={<About/>}/>
//       <Route path='contact' element={<Contact/>}/>
//     </Route>
//   )
// ])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <BrowserRouter>
    <App />
    </BrowserRouter> */}
    
  </React.StrictMode>
);

