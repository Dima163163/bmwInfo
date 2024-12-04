import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.sass';
import { Layout } from './components/Layout/Layout';
import { HomePage } from './pages/HomePage/HomePage';
import CarsPage from './pages/CarsPage/CarsPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { CarPage } from './pages/CarPage/CarPage';
import { CarsCatalogPage } from './pages/CarsCatalogPage/CarsCatalogPage';
import { AutoSportPage } from './pages/AutoSportPage/AutoSportPage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';
import { SeriesContextProvider } from './context/SeriesContext/SeriesContextProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: 'cars',
        element: <CarsPage />,
        children: [
          {
            path: 'catalog',
            element: <CarsCatalogPage />
          },
          {
            path: ':carId',
            element: <CarPage />
          }
        ]
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'register',
        element: <RegisterPage />
      },
      {
        path: 'autosport',
        element: <AutoSportPage />
      },
      {
        path: 'contacts',
        element: <ContactsPage />
      }
    ]
  }
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <SeriesContextProvider>
          <RouterProvider router={router} />
        </SeriesContextProvider>
      </Provider>
    </>
  );
}

export default App;
