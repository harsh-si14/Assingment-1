import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import User from './component/getuser/User';
import Add from './component/adduser/Add';
import Edit from './component/updateuser/Edit';

function App() {

  const route = createBrowserRouter([
    {
      path:"/",
      element: <User/>,
    },
    {
      path:"/add",
      element: <Add/>,
    },
    {
      path:"/edit/:id",
      element: <Edit/>,
    },
  ])

  return (
    <div className="App">
       <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
