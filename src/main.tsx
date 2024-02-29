import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'

const Test = function () {
  return <h2>Test</h2>
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/test' element={<Test/>}></Route>
      </Routes>
  </BrowserRouter>
  </React.StrictMode>,
)
