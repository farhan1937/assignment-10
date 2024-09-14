import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="max-w-6xl mx-auto">
        <div className="flex justify-center items-center">
        <img className="lg:w-3/4 flex justify-center items-center" src="https://i.ibb.co/NLyKhNt/404page.jpg" alt="" />
        </div>
        <Link to='/'> <button className="flex justify-center items-center mx-auto bg-slate-200 p-4 font-semibold ">Go Back Home</button></Link>

    </div>
    );
};

export default ErrorPage;