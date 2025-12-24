import './App.css';
import NotikaDashboard from './pages/RootAdmin/RA_index.jsx';
import LoginScreen from './components/features/Auth/login.jsx';
import MFAPage from './components/features/Auth/multi_factor.jsx';

import { createBrowserRouter, RouterProvider } from "react-router";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginScreen />,
    },
    {
      path: "/multi/factor/auth",
      element: <MFAPage />,
    },
    {
      path: "/dashboard",
      element: <NotikaDashboard />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
