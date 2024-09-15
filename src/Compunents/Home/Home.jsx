import React from 'react';
import { Navigation } from 'swiper/modules';
import Hometwo from './Hometwo';
import About from '../About/About';
import { Swiper, SwiperSlide } from 'swiper/react';  // Correct import from swiper/react
import 'swiper/css';
import 'swiper/css/navigation';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto mt-5 bg-opacity-60'>
            <div style={{ backgroundImage: 'url(https://i.ibb.co/SnsQcMH/Tanguar-Haor.jpg)', width: '100%', backgroundPosition: 'center', backgroundSize: 'cover', borderRadius: '40px', backgroundRepeat: 'no-repeat' }}
                className="flex flex-col md:flex-row lg:flex-row w-full mx-auto items-center justify-end">
                <div className="text-start p-8">
                    <h1 className="text-4xl font-bold text-white">Welcome to <span className="text-[#a2a2a2] underline ">Asia Exploratorium</span>!</h1><br />
                    <p>Unveil the Wonders of Asia</p>
                    <p className="font-semibold text-white w-3/4 py-4 text-[#ffffffcf]">Asia Exploratorium is your ultimate travel guide to exploring the rich cultures, breathtaking landscapes, and hidden gems of Asia. From the bustling streets of Bangkok to the serene beaches of Bali, we bring you the best travel tips, destination guides, and adventure itineraries.</p>
                </div>
                <div className='carousel m-10 w-full h-full rounded-xl'>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide>
                            <div>
                                <h3 className='absolute flex items-center justify-center text-4xl text-white w-full h-full border-2 text-center my-auto'>Tanguar Haor, Bangladesh</h3>
                                <img className='w-full h-80' src="https://i.ibb.co/6r0GGxN/HD-wallpaper-tanguar-haor-ultra-asia-bangladesh-nature-ecosystem-wetland-tanguarhaor.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <h3 className='absolute flex items-center justify-center text-4xl text-white w-full h-full border-2 text-center my-auto'>Thailand, Bangkok</h3>
                                <img className='w-full h-80' src="https://i.ibb.co/H4Ky8MV/og4.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <h3 className='absolute flex items-center justify-center text-4xl text-white w-full h-full border-2 text-center my-auto'>Indonesia, Komodo National</h3>
                                <img className='w-full h-80' src="https://i.ibb.co/q7Jy5Nn/istockphoto-1489683662-612x612.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <h3 className='absolute flex items-center justify-center text-4xl text-white w-full h-full border-2 text-center my-auto'>Malaysia, Penang beach</h3>
                                <img className='w-full h-80' src="https://i.ibb.co/zbzHj5F/Monkey-Beach.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div>
                <Hometwo />
            </div>
            <div id='about'>
                <About />
            </div>
        </div>
    );
};

export default Home;
