import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import ContactList from './views/contact_list';
import React from 'react';
import {RouterProvider} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <ContactList />
  },
  {
    path: "/home",
    element: <ContactList />
  },
  {
    path: "/form",
    element: <div>Hola soy form!</div>
  }
])


function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
  );
}

export default App;
