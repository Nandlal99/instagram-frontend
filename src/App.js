
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import AuthPage from './components/AuthPage';
import HomePage from './components/HomePage';
import ProfilePage from "./components/ProfilePage";
import HomePost from "./components/HomePost";
import EachPost from "./components/EachPost";
import CreatePost from "./components/CreatePost";


const appRouter = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage />,
    children: [
      {
        path: "/home",
        element: <HomePost />
      },
      {
        path: "profile",
        element: <ProfilePage />
      },
      {
        path: "eachPost",
        element: <EachPost />
      },
      {
        path: "createPost",
        element: <CreatePost />
      }
    ]
  },
  {
    path: "/",
    element: <AuthPage />
  }
])

function App() {
  return (
    <div className="App flex">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
