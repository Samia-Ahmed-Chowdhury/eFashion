'use client'
import React, { useContext, useState } from 'react'
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import Link from 'next/link';
import Image from 'next/image';
import SocialSystem from '@/components/SocialSystem/SocialSystem';
import Swal from 'sweetalert2';
import Navbar from '@/components/Navbar/Navbar';

function Page() {
    
   
    const [showPass, setShowPass] = useState(false)
    const [error, setError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const { register, formState: { errors }, handleSubmit } = useForm();

    const passwordValidating = (e) => {
        const password = e.target.value;
        if (!/(?=.*[A-Z])/.test(password)) {
            setPasswordError("At least one uppercase character");
            return
        }
        else if (!/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/.test(password)) {
            setPasswordError("At least one special character");
            return
        }
        else if (!/^(?=.*[0-9]).*$/.test(password)) {
            setPasswordError("At least one digit character");
            return
        }
        else if (!/^\S*$/.test(password)) {
            setPasswordError("No white space");
            return
        }
        else if (!/(?=.{6,})/.test(password)) {
            setPasswordError("Password must be at least 6 characters long")
            return
        }
        else {
            console.log('welcom')
            setPasswordError('');
            e.target.style.border = '1px solid #ced4da'
            return
        }
    }


        const submitHandler = (e) => {
            e.preventDefault()
            const name = e.target.name.value;
            const email = e.target.email.value;
            const password = e.target.password.value;
            const photo_url = e.target.photo_url.value;
    
            if (passwordError) {
                e.target.password.focus();
                e.target.password.style.border = '2px solid red'
                return;
            }
            e.target.password.style.border = '1px solid #ced4da'
    
            Swal.fire(
                'Sign Up successful (^_^)',
                'But This project is under construction !!.. ',
                'success'
              )
        }

    return (
        <div className='bg-myBg'>
        <Navbar/>
        <div className='grid md:grid-cols-[.9fr,1fr] gap-10 mt-2 lg:mx-16 mx-5'>
            <div>
            <p className='text-lg font-bold text-center text-primaryColor'>Signup With Social : </p>
               <SocialSystem />
                <div className='w-full '>
                    <Image src="/images/signup.svg" alt='logo' width={500} height={500} className='mx-auto' priority />
                </div>
            </div>
            <div className='text-center'>
                <form onSubmit={submitHandler} className='md:w-3/4 px-10 mb-6 mt-2 shadow-xl pt-16 py-12  mx-auto rounded-lg'>
                    <h2 className='text-3xl font-semibold'>Please Signup </h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter Your Name" className="bg-[#E8F0FE] input w-full  " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo_url" placeholder="Enter Your Photo URL" className="bg-[#E8F0FE] input w-full  " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter Your Email" className="bg-[#E8F0FE] input w-full  " required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>

                        <input type={showPass ? 'text' : 'password'} name="password" onChange={passwordValidating} placeholder="Enter Your password" className="bg-[#E8F0FE]  input w-full " required />
                        {
                            showPass ?
                                <FaEye onClick={() => setShowPass(!showPass)} className="absolute  top-[60%] right-1/4" />
                                : <FaEyeSlash onClick={() => setShowPass(!showPass)} className="absolute top-[60%] right-1/4" />
                        }
                        {
                            passwordError &&
                            <p style={{ color: 'red' }} className="error">{passwordError}</p>
                        }
                    </div>

                    <div className="form-control  my-5">
                        <button className="btn my_button" type="submit">Submit</button>
                    </div>
                    <p className='text-lg font-medium my-5'>Already have An Account ? <Link className='font-medium text-[#398AB9]' href='/login'>Login</Link></p>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Page