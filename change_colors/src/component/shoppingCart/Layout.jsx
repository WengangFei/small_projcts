import { NavLink, Outlet } from 'react-router-dom';

//The `<NavLink>` component by default has an active class which can be styled
//to indicate which component or page is active.
//Unlike most props, the active class is Not specified directly on the
// `<NavLink>` component but it exists.

const Layout = () => {



  return (
    <>
        <nav className='p-6 bg-green-200'>
            <ol className='grid grid-cols-8 gap-4'>
                <li className='col-span-6 text-3xl font-bold text-indigo-500'>
                    React Shopping Cart
                </li>
                {/* defined active class in index.css file */}
                <NavLink to='/' className={({isActive})=>isActive?'active':''}>
                    {({isActive})=>isActive?'Home':'Layout'}
                </NavLink>
                <NavLink to='/cart' className={({isActive})=>isActive?'active':''}>
                    Cart
                </NavLink>
            </ol>
            
        </nav>
        <div>
            <Outlet />
        </div>

    </>
    

  )
}

export default Layout