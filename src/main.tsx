import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter, Routes, Route, RouterProvider} from 'react-router-dom'
import './index.css'

import BaseRouter from './route1'
import BaseRouter2 from './route2'

const Test = function () {
  return <h2>Test</h2>
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/*<BrowserRouter>*/}
    {/*  <BaseRouter/>*/}
    {/*</BrowserRouter>*/}
    <RouterProvider router={BaseRouter2}/>
  </React.StrictMode>,
)
