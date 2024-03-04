import {createBrowserRouter, } from "react-router-dom"
import App from './App'

const Test = function () {
  return <h2>Test</h2>
}
// 创建路由
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/test',
    element: <Test/>,
    children:[
      {
        path: 'good',
        element: (
          <div>
            good
          </div>
        )
      },
      {
        path: 'good2',
        element: (
          <div>
            good2
          </div>
        )
      }
    ]
  }
])

export default router
