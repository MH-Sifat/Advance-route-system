
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Users from '../components/Users/Users';
import UserDetails from '../components/UserDetails/UserDetails';
import Contact from '../components/Contact/Contact';


    const router = createBrowserRouter([
        {
          path:'/',
          element: <Main></Main>,
          children:[
            {
              path:'/',
              element:<Home></Home>
            },
            {
              path:'/about',
              element:<About></About>
            },
            {
              path:'/users',
              loader: async () =>{
                return fetch("https://jsonplaceholder.typicode.com/users")
              },
              element: <Users></Users>
            },
            {
              path:'/user/:userId',
              loader:async ({params})=>{
                return fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
              },
              element: <UserDetails></UserDetails>
            },
            {
              path:'/contact',
              element:<Contact></Contact>
            },
          ]
        }
      ])
   
export default router;

