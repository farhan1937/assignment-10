import React from 'react';
// import 'aos/dist/aos.css';

const Contact = () => {
    return (
        <div data-aos="fade-right">
            <h2 className="text-4xl text-center font-bold">Contact <span className="text-[#7eeef1]">With Us</span></h2>
            <form className=" grid justify-center gap-4 ">
                <div className="flex flex-col lg:flex-row gap-4 justify-start  items-center lg:mt-10  lg:mx-10">
                    <input className="border-2 border-[#3cbcc1] p-4 lg:w-3/5 rounded-xl  " type="text" name="text" id="" placeholder="First Name" />
                    <input className="border-2 border-[#3cbcc1] p-4 lg:w-3/5 rounded-xl  " type="text" name="text" id="" placeholder="Second Name" /><br />
                </div>
                <div>
                    <input className=" flex items-center lg:w-4/5 justify-center mx-auto rounded-xl  border-2 border-[#3cbcc1] p-4  lg:mx-10 mt-5" type="email" name="email" id="" placeholder="your email" /><br />


                    <textarea className="flex justify-center lg:w-4/5 items-center border-2 border-[#3cbcc1] mx-auto lg:mx-10 mt-5 rounded-xl  mb-5" name="textarea" id="" cols="30" placeholder="Message" rows="10"></textarea>
                </div>

                <div className="flex justify-center items-center">
                    <button className="p-4 border-2 border-[#3cbcc1] rounded-xl bg-white">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;