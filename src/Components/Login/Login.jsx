import React, { useContext,useState } from 'react'
import { Button, Card, Checkbox, Label, RangeSlider, TextInput } from 'flowbite-react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const [error,setError] = useState(null)
    const {loginUser,googleLogin} = useContext(AuthContext)
    const location = useLocation();
    console.log(location)
    const navigate = useNavigate();
   


    const handleLogInWithPopUp = () => {
        googleLogin()
            .then((result) => {
             if(result.user){
                toast("login successfull!");
                navigate(location?.state ? location.state : '/')
             } 
            })
            .catch((err) => {
                console.error(err)
            })
    }

  const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;


        loginUser(email, password)
            .then((result) => {
                if (result) {
                    toast("Login Successful!")
                     navigate(location?.state ? location.state : '/')
                }
               
            })
            .catch((err) => {
                if (err) {
                    setError(err.message);
                }
            })
        }

        return (
            <div className='container mx-auto px-4'>
                <Card className='md:w-[50%]
         m-auto'>
             <h2 className='text-3xl font-semibold mb-5'>Login here</h2>
                    <form onSubmit={handleLogin} className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="email1"
                                    value="Your email"
                                />
                            </div>
                            <TextInput
                                id="email1"
                                placeholder="name@flowbite.com"
                                required
                                type="email"
                                name = "email"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password1"
                                    value="Your password"
                                />
                            </div>
                            <TextInput
                                id="password1"
                                required
                                type="password"
                                name = "password"
                            />
                        </div>

                        <Button type="submit">
                            Login
                        </Button>
                    </form>
                    <p className='text-red-600 mt-2'>{error}</p>
                    <div>
                        <p>Don't have an account? <Link to='/register' className='text-green-400 underline'>Register here</Link> </p>
                        <p className='flex justify-center  mt-5 font-semibold'>or continue with</p>
                        <Button className='mt-4  w-full' onClick={handleLogInWithPopUp}><FaGoogle className='mr-2 text-red-400'></FaGoogle>Login With Google</Button>

                    </div>
                </Card>
            </div>
        )
    }

    
    export default Login