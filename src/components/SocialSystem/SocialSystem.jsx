'use client'
import React, { useContext } from 'react'
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';

function SocialSystem() {
 
    const googleBtnClicked = () => {
        Swal.fire(
            'Login successful (^_^)',
            'But This project is under construction !!.. ',
            'success'
          )

     }
    
     const githubBtnClicked = () => {
        Swal.fire(
            'Login successful (^_^)',
            'But This project is under construction !!.. ',
            'success'
          )

     }
    return (
        <>
            <div className='mt-8 flex flex-col lg:flex-row gap-3 justify-center mx-5'>
                <button onClick={googleBtnClicked} className='btn btn-outline btn-success hover:bg-success'><FaGoogle className='text-lg me-1' />Login With Google</button>
                <button onClick={githubBtnClicked} className='btn btn-outline hover:btn'><FaGithub className='text-lg me-1' />Login With Github</button>

            </div>
        </>
    )
}

export default SocialSystem