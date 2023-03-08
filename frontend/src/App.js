import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import RootLayout from './pages/Root';
import SessionPage from './pages/SessionPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {path: '/', element: <HomePage/> },
      {path: 'session', element: <SessionPage/> },
    ]
  },
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
