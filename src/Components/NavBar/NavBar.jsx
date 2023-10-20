import React, { useContext } from 'react'
import { Dropdown, Navbar, Avatar, DarkThemeToggle, Flowbite } from 'flowbite-react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';
import logo from "../../../src/assets/TE.jpg"
const NavBar = () => {




  const {user,logOutUser} = useContext(AuthContext);

  const handleLogOut = () => {
    logOutUser()
    .then(()=>{
      toast("Successfully logout")
    })
  }

  const navLinks = <div className='flex gap-5 items-center'>
    <NavLink
      to="/"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-blue-700 underline font-extrabold" : ""}> Home
    </NavLink>
    <NavLink
      to="/addProduct"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-blue-700 underline font-extrabold" : ""}> Add Product
    </NavLink>
    <NavLink
      to="/myCart"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-blue-700 underline font-extrabold" : ""}> My Cart
    </NavLink>
    <NavLink
      to="/login"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-blue-700 underline font-extrabold" : ""}> Login
    </NavLink>
    <DarkThemeToggle />
   
  </div>

  return (
    <Flowbite>
    <div className='container mx-auto dark:bg-black'>
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          <img src={logo} className="mr-3 h-20" alt="logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">TechElectro</span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img={user && user.photoURL} rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{user && user.displayName}</span>
              <span className="block truncate text-sm font-medium">{user && user.email}</span>
            </Dropdown.Header>
            <Dropdown.Divider />
            <Dropdown.Item>

            {
              user ?  <button onClick={handleLogOut}>Logout</button> : <Link to='/login'>Login</Link>
            }
              
              </Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            {navLinks}
          </Navbar.Link>
          
        </Navbar.Collapse>
      </Navbar>
    </div>

    </Flowbite>
  )
}

export default NavBar