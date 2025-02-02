// Corrected component using useParams and Outlet correctly
import { useRoutes, useParams } from 'react-router-dom';

function User() {
  let params = useParams();
  return (
    <h1>User {params.userId}</h1>
  );
}

function App() {
  let element = useRoutes([
    {path: "/", element: <Home/>},
    {path: "/users/:userId", element: <User/>},
    {path: "*", element: <NotFound/>}
  ]);

  return element;
}

export default App;