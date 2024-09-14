import React from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';

import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../AuthProvider/AuthProvider';


const Register = () => {
    const { createUser, notify, notify2 } = useContext(AuthContext)
    // =======================================
    const [registerError, setRegisterError] = useState(' ')
    const [success, setSuccess] = useState(' ')
    const [showPassword, setShowPassword] = useState(' ')


    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value
        const photo = e.target.photoURL.value
        const password = e.target.password.value
        const accepted = e.target.trams.checked
        // const upper = /(?=.*[A-Z]))/;
        // const lower = /(?=.*[a-z]))/;
        // const Letter = /.{6,}/;
        console.log(name, photo, email, password, accepted);
        
        
                setRegisterError(' ')
                setSuccess(' ')
        if(!email){
            return notify2('Enter your email')
        }
        else if(!name){
            return notify2('Enter your Name')
            
        }
        else if(!photo){
            return notify2('Enter Your photoURL')
        }
        else if(!password){
            return notify2('Enter your password')
        }
        else if(!/(=?.*[A-Z])/.test(password)){
            return notify2('You must have upper case latter in your password')
        }
        else if(!/(=?.*[a-z])/.test(password)){
            return notify2('You must have lower case latter in your password')
        }
        else if(password.length < 6){
            return notify2('Your password length must be 6 letter')
        }
        else if(!accepted){
            return notify2('Please accept our trams and condition')
        }

        

        
          //create user section 
        createUser(email, password)
            .then(result => {
                notify('create successfully')
                console.log(result.user);
                updateProfile(result?.user, {
                    displayName: name,
                    photoURL: photo
                })
            })
            .catch(()=>{
                notify2('create unsuccessful')
            })

    }

    return (
        <div className="">
        <div className="mx-auto md:w-1/2">
            <h2 className="text-3xl mb-8 font-bold  text-center">Please <span className='text-[#4acfd6]'>Register</span> </h2>
            <p className="text-center">Your account </p>
            <p className="font-semibold mb-6 text-center ">If you Already Have an account ? please <Link to='/login'><span className="font-bold text-green-600 underline">Login</span></Link></p>
            <form onSubmit={handleRegister}>
                <input className="mb-3 w-full py-2 px-4 border-2 border-[#4acfd6] rounded-xl" type="text" placeholder="YOUR NAME" name="name" id=""  />
                <br />
                <input className="mb-3 w-full py-2 px-4 border-2 border-[#4acfd6] rounded-xl" type="url" placeholder="photoURL" name="photoURL" id=""  />
                <br />

                <input className="mb-3 w-full py-2 px-4 border-2 border-[#4acfd6] rounded-xl" type="email" placeholder="YOUR EMAIL" name="email" id=""  />
                <br />
                <div className="mb-3  relative ">
                    <input
                        className=" w-full py-2 px-4 border-2 border-[#4acfd6] rounded-xl"
                        type={showPassword ? "password" : "text"}
                        placeholder="YOUR PASSWORD"
                        name="password"
                        id=""
                         />
                    <span className="absolute top-3 right-2 " onClick={() => setShowPassword(!showPassword)}>
                        {
                            showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                        }
                    </span>
                </div>
                <br />
                <input className="ml-2 mb-4" type="checkbox" name="trams" id="trams" />
                <label htmlFor="trams">Accept out <a href="">trams and condition</a></label>

                <br />
                <input className="btn bg-[#41b9da] mb-3 w-full " type="submit" value="Register" />
            </form>
            {
                registerError && <p className="text-red-700">{notify2}</p>
            }
            {
                success && <p className="text-green-400">{notify}</p>
            }
            {/* <p>Already Have an account ? Please <Link to='/login'><span className="font-bold text-green-600 underline">Login</span></Link></p> */}
        </div>
        
    </div>
    );
};

export default Register;