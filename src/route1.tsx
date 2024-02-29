import {useRoutes} from 'react-router-dom'
import App from './App'

const Test = function () {
  return <h2>Test</h2>
}

function Router() {
  let element = useRoutes([
    {
      path: '/',
      element: <App/>
    },
    {
      path: '/test',
      element: <Test/>
    }
  ])
  return element
}

export default Router;
