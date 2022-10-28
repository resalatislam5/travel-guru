import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import facebook from '../../../asses/icons/fb.png'
import google from '../../../asses/icons/google.png'
import { AuthProviderContext } from '../../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const googleProvider = new GoogleAuthProvider();
    const {signInPopup} = useContext(AuthProviderContext)
    const handleGoogleSignIn = () =>{
        signInPopup(googleProvider)
        .then(result =>{
            console.log(result.user)
        })
        .catch(err =>{
            const error = err.message
            console.error(err)
        })
    }
    return (
        <div>
            <div className='w-[550px] h-[580px] border border-[#ABABAB] py-5 px-8 mx-auto mt-[2%]'>
                <h2 className='text-2xl font-semibold mb-12'>Create an account</h2>
                <input  className='w-full font-semibold mb-2 focus:outline-none text-xl' type="text" name="name" id="" placeholder='Enter Your Name' required />
                <hr className='bg-black mb-10'/>
                <input  className='w-full font-semibold mb-2 focus:outline-none text-xl' type="email" name="email" id="" placeholder='Username or Email' required />
                <hr className='bg-black mb-10'/>
                <input className='w-full font-semibold mb-2 focus:outline-none text-xl '  type="password" name="password" id="" placeholder='Password' required/>
                <hr className='bg-black mb-10'/>
                <input className='w-full font-semibold mb-2 focus:outline-none text-xl'  type="password" name="confirm" id="" placeholder='Confirm Password' required/>
                <hr className='bg-black mb-4'/>
                <div className='mb-10 flex justify-between'>
                    <div className='flex items-center'>
                        <input type="checkbox" className="checkbox mr-1" />
                        <span>Remember me</span>
                    </div>
                    <p className='cursor-pointer underline text-[#f9a51a]'>Forgot Password</p>
                </div>
                <button className='btn bg-[#F9A51A] hover:bg-[#eb9812] border-0 w-full mt-5 mb-3'>Create an account</button>
                <p className='text-center'>Already have and account? <Link className='text-[#f9a51a] underline' to='/login'>Login</Link></p>
            </div>
                <div className='w-[550px] mx-auto'>
                    <p className='text-center text-xl my-8 before:underline'>or</p>
                    <button className='btn  mb-3 bg-white hover:bg-gray-300 text-black  w-96 mx-[14%] rounded-3xl border-[#C7C7C7] flex relative'><span className='absolute left-0.5'><img className='w-10 h-10' src={facebook} alt="" /></span> Continue with Facebook</button>
                    <button onClick={handleGoogleSignIn} className='btn  mb-3 bg-white hover:bg-gray-300 text-black  w-96 mx-[14%] rounded-3xl border-[#C7C7C7] flex relative'><span className='absolute left-0.5'><img className='w-10 h-10' src={google} alt="" /></span> Continue with Google</button>
                </div>
        </div>
    );
};

export default SignUp;