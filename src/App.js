import 'react-router-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import MasterLayout from './components/MasterLayout/MasterLayout';
import Home from './components/Home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
const router=createBrowserRouter([
  {path:'',
  element:<MasterLayout/>,
  children:[
    {path:'',element:<Home/>},
    {path:'home',element:<Home/>},
    {path:'about',element:<About/>},
    {path:'portfolio',element:<Portfolio/>},
    {path:'contact',element:<Contact/>

    }
  ]}
])
function App() {
  return (
    
    <RouterProvider router={router}/>
  );
}

export default App;
