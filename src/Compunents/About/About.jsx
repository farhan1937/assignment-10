import React from 'react';

const About = () => {
    return (
        <div id="about">
        <h2 className="text-4xl font-bold text-center my-6">About <span className="text-[#6dedf6]">Us</span></h2>
        <div className="flex flex-col lg:flex-row gap-4 items-center p-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
                <img className="" src="https://i.ibb.co/vXSMYMC/photo-1503220317375-aaad61436b1b.jpg" alt="" />
                <img className="" src="https://i.ibb.co/G9RST2t/pexels-freestockpro-3278215.jpg" alt="" />
                <img className="h-80" src="https://i.ibb.co/xhjT2JT/photo-1433838552652-f9a46b332c40.jpg" alt="" />
                <img className="h-80" src="https://i.ibb.co/p24GXvF/maldives-1993704-640.jpg" alt="" />
            </div>
            <div> 
                <h2 className="font-bold text-center text-3xl">About <span className="text-[#6dedf6]">Our Travel</span> </h2>
                <p className="font-bold border-l-4 p-4 border-[#6dedf6]">At Asia Exploratorium, we bring you the best of Asia is travel destinations, offering an extensive guide to some of the most breathtaking spots across the continent. Whether you are seeking the tranquil beaches of Thailand, the rich cultural heritage of Cambodia, or the vibrant city life of Vietnam, our detailed travel guides have got you covered.

                    Our mission is to make your travel planning effortless and enjoyable. With curated information on top tourist spots, average travel costs, ideal visiting seasons, and travel times, we aim to provide everything you need to embark on your next adventure. Explore the dense mangrove forests of Sundarban in Bangladesh, relax on the stunning beaches of Bali in Indonesia, or take in the historical wonders of Angkor Wat in Cambodia.</p>
            </div>

        </div>
        <div>
            <h2 className="text-6xl text-center font-bold mt-6">Provide The Best Travel <br />Experience For You</h2>
            <p className="text-center mt-4">We understand that every journey has unique needs. Therefore, we offer customized travel <br /> packages designed according to your preferences and budget.</p>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-5 max-w-6xl mx-auto mt-4 mb-6">
                <div className="max-w-3xl p-4 rounded-xl bg-[#d8f5f7]">
                    <img className="w-16 rounded-full " src="https://i.ibb.co/6vv0BCQ/pngtree-location-icon-png-image-1796660.jpg" alt="" />

                    <h2 className="text-2xl font-bold mt-2">Our Vision</h2>
                    <p className="font-semibold mt-2">Our vision is to become a leading travel agency company that provides high-quality services and inspiration for our customer</p>
                </div>
                <div className="max-w-3xl p-4 rounded-xl bg-[#d8f5f7]">
                    <img className="w-16 rounded-full   " src="https://i.ibb.co/bvkZZsy/property-construction-logo-design-1948-5074.jpg" alt="" />
                    <h2 className="text-2xl font-bold mt-2">Our Mission</h2>
                    <p className="font-semibold mt-2">Our vision is to become a leading travel agency company that provides high-quality services and inspiration for our customer.</p>
                </div>
            </div>
        </div>

    </div>
    );
};

export default About;