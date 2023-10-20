import React, { useContext,useState } from 'react'
import { Button, Card, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';
const Register = () => {
    const [errors, setErrors] = useState(null);
    const { createUser } = useContext(AuthContext)



    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // validation
        if (password.length < 6) {
            setErrors("password must be 6 character");
            return;
        }
        else if (!(/[A-Z]/.test(password))) {
            setErrors("password must have a uppercase!");
            return;
        }
        else if (!(/[!@#$%^&*()+=-\?]/.test(password))) {
            setErrors("password should have at least one special character(@,& etc)");
            return;
        }

        setErrors("");
        createUser(email, password)
        .then(()=>{
            toast("Successfully registration")
        })

    }

    return (
        <div className='container mx-auto px-4'>
           
            <Card className='md:w-[50%]
    m-auto'>
         <h2 className='text-3xl font-semibold mb-5'>Register here</h2>
                <form onSubmit={handleRegister} className="flex flex-col gap-4">
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
                            name="email"
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
                            name="password"
                        />
                        <p className='text-red-600 mt-2'>{errors}</p>
                    </div>

                    <Button type="submit">
                        Register
                    </Button>
                </form>
                <div>
                    <p>Already have an account? <Link to='/login' className='text-green-400 underline'>Login here</Link> </p>
                  
                </div>
            </Card>
        </div>
    )
}

export default Register