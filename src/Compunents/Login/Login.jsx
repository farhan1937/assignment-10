import React from 'react';
import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
    
        const [registerError, setRegisterError] = useState(' ');
    const [success, setSuccess] = useState(' ')
    const [showPassword, setShowPassword] = useState('')
    // const [user, setUser] = useState(null)
    
    const emailRef = useRef(null);
    const navigate = useNavigate();
    const add = useLocation();
    const { signIN, googleLogin, notify2 } = useContext(AuthContext);
    console.log('location from login',location);
    const handleLogin = e => {
        
        
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value

        if(!email){
            return notify2('Enter your email first')
        }
        else if(!password){
            return notify2('Enter your password')
        }

        setRegisterError('')
        setSuccess('')
       

        console.log(email, password);
        signIN(email, password)
            .then(result => {
                console.log(result.user);
                navigate(add?.state
                    ? add.state
                    : '/')
            })  
            .catch(error => {
                if(error.code == "auth/invalid-email"){
                    notify2('Provide a valid email')
                }
                else if(error.code == 'auth/invalid-credential'){
                    notify2('Provide a valid password')
                }
                console.log(error);
            })
       


    }

    const handleGoogleSignIn = () => {

        googleLogin()
            .then(result => {
                
                console.log('LogIn ',result );
                
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }

    return (
        <div className="hero min-h-screen bg-gray-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left space-y-4">
                    <h1 className="text-5xl font-bold text-center">Login <span className="text-[#1DD100]">Now!</span></h1>
                    <h3>If you cannot register your account , Please first register your account <Link to='/register'><span className="font-bold text-green-300 underline">Register</span></Link></h3>

                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                name="email"
                                ref={emailRef}
                                className="input border-2 border-[#8f8f8f]"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label ">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <div>
                                <input type={showPassword ? "text" : "password"} placeholder="password" name="password" className="input border-2 border-[#7e7f7e] w-full " required />
                                <span className="absolute bottom-[280px] right-[50px]   " onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                    }
                                </span>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover underline">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className=" btn p-2 text-[#090909] bg-[#d2fad2] border-2 ">Login</button>
                        </div>
                    </form>
                    {
                        registerError && <p className="text-red-700">{registerError}</p>
                    }
                    {
                        success && <p className="text-green-300">{success}</p>
                    }
                    <div className="flex gap-3 justify-center mx-auto border-2 px-4  p-4 rounded-sm border-[#787878]">

                        <button className="flex items-center text-2xl text-center " onClick={handleGoogleSignIn}><FcGoogle /><span className="text-sm">Continue With Google</span> </button>
                        



                    </div>
                    <Link to='/'><button className=" flex justify-center items-center border-2 mx-auto  p-4 rounded-lg bg-[#abecf3] text-center">Home</button></Link>
                    <p className="text-center py-4 ">New to this website ? Please <Link to='/register'><span className="font-bold text-green-300 underline">Register</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;