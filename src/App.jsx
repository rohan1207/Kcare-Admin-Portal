import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage"; // This will be the Doctor Dashboard
import PatientListPage from "./pages/PatientListPage";
import PatientDetailPage from "./pages/PatientDetailPage";
import AppointmentsPage from "./pages/AppointmentsPage"; // This will be the Schedule page

// A simple auth check function (replace with real logic)
const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

// A wrapper for protected routes
const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "patients",
        element: <PatientListPage />,
      },
      {
        path: "patients/:id",
        element: <PatientDetailPage />,
      },
      {
        path: "schedule",
        element: <AppointmentsPage />,
      },
      // Add other doctor-centric routes here
    ],
  },
  // Redirect root to dashboard if authenticated, otherwise to login
  {
    path: "/",
    element: <Navigate to={isAuthenticated() ? "/dashboard" : "/login"} replace />,
  },
  // Fallback for any other path
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
