import { 
    createBrowserRouter,  
    Route,
    RouterProvider, 
    createRoutesFromElements
  } 
    from  'react-router-dom';

// ! Layout
import {HeaderLayout, HelpLayout, CareersLayout} from './layouts/RootLayout';

// ! pages
import  Home  from './pages/Home';
import  About  from './pages/About';
import { Faq, Contact } from './pages/Help';
import NotFound  from './pages/NotFound';
import Career from './pages/Careers';
import CareerDetails from './pages/CareerDetails';
import CareerError from './pages/CareerError';

// !Loaders
import { careerLoader } from './loaders/careerLoader';
import careerDetails from './loaders/careerDetails';
import actionContact from './actions/contactAction';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<HeaderLayout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='help' element={<HelpLayout/>}>
        <Route path='faq' element={<Faq/>}/>
        <Route path='contact' element={<Contact/>} action={actionContact}/>
      </Route>

      <Route 
        path='careers' 
        element={<CareersLayout/>} 
        errorElement={<CareerError/>} >
        <Route 
          index 
          element={<Career/>} 
          loader={careerLoader}/>
        <Route 
          path=':id'
          element={<CareerDetails/>}
          loader={careerDetails}/>
      </Route>

      <Route path='*' element={<NotFound/>}/>
    </Route>
  )
)


function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App




/**
 * *OLDER WAY TO ROUTE USING REACT ROUTER DOM
 * <BrowserRouter>
    <header>
      <nav>
        <h1>Job Router</h1>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="about" >About</NavLink>
      </nav>
    </header>
      <main>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
        </Routes>
      </main>
    </BrowserRouter>
 */