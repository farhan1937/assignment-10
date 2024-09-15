import React from 'react';

const Hometwo = () => {
    return (
        <div className="mt-5 w-full mx-auto  ">
            <div>
                <img className="w-3/4 rounded-xl" src="https://i.ibb.co/4gh72yZ/handsome-smiling-adult-man-casual-outfit-smiling-looking-left-promo-offer-standing-against-1258-1617.jpg" alt="" />
            </div>
            <div className="absolute top-[650px] left-[450px]     bg-black rounded-xl max-w-xl p-4">
                <h2 className="text-4xl font-bold mb-2 text-white">Subscribe & Get 20% off</h2>
                <p className="text-white">Join our newsletter and discover new destinations to inspire the traveler within. Plus, get 20% off at our online shop. Every week you’ll receive expert advice, tips, exclusive offers, and much more.</p>
                <div className=" flex flex-col lg:flex-row gap-5 mt-3 ">
                    <input className="px-3 py-2 rounded-full" type="email" name="" id="" placeholder="Your email address" />
                    <button className="btn bg-[#6dedf6] border-none rounded-full">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Hometwo;