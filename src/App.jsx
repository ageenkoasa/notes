import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './routes/Layout';
import About from './routes/About';
import Login from './routes/Login';

import Signup from './routes/Signup';
import Notes from './routes/Notes';
import CreateNote from './routes/CreateNote';
import ViewNote from './routes/ViewNote';
import EditNote from './routes/EditNote';

import { Error } from './routes/Error';
import UserContextProvider from './components/userContext';
import NoteContextProvider from './components/noteContext';
import { ProtectedRoute } from './components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '*',
        element: <Error />,
      },

      {
        path: '/signup',
        element: <Signup />,
      },

      {
        path: '/notes',
        children: [
          {
            path: '',
            element: <Notes />,
          },
          {
            path: 'add',
            element: <CreateNote />,
          },
          {
            path: ':id',
            element: <ViewNote />,
          },
          {
            path: ':id/edit',
            element: <EditNote />,
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
]);

export default function App() {
  return (
    <UserContextProvider>
      <NoteContextProvider>
        <RouterProvider router={router} />
      </NoteContextProvider>
    </UserContextProvider>
  );
}
