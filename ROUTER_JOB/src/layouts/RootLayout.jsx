
import { NavLink, Outlet } from 'react-router-dom';
import BreadCrumbs from '../pages/BreadCrumbs';

const HeaderLayout = () => {
  return (
    <div className='root-layout'>
      <header>
        <nav>
            <h1>Job Router</h1>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="about" >About</NavLink>
            <NavLink to="help" >Help</NavLink>
            <NavLink to="careers" >Career</NavLink>
        </nav>
        <BreadCrumbs/>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

const HelpLayout = () =>{
    return(
        <div className="help-layout">
            <h2>Website Help</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, maiores.</p>


            <nav>
                <NavLink to='faq'>FAQ</NavLink>
                <NavLink to='contact'>Contact</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}

const CareersLayout = () => {
  return (
    <div className="careers-layout">
      <h2>Careers</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit?</p>
      
      <Outlet />
    </div>
  )
}

export  {HeaderLayout, HelpLayout, CareersLayout}
