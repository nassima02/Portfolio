import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {router} from "./router.config/router.jsx";
import './index.css'
import {Flowbite} from "flowbite-react";
import customTheme from "./customTheme.json";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Flowbite theme={{theme: customTheme}}>
        <RouterProvider router={router} />
      </Flowbite>
  </React.StrictMode>,
)
