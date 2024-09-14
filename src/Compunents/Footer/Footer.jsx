import React from 'react';

const Footer = () => {
    return (
        <div className=" "> 
            <footer className="footer  p-10 bg-base-200 text-base-content">
                <aside>
                    
                    <img className="w-12" src="https://i.ibb.co/fXN28Z0/travel-logo-design.jpg" alt="" />
                    <p className="text-2xl font-semibold">Asia Exploratorium</p>
                    <p> 1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                    <p>(308) 555-0121</p>
                    <p>hello@travelwp.com</p>
                </aside>
                <nav className="grid grid-cols-1 ">
                    <h6 className="footer-title">Top Destination</h6>
                    <a className="link link-hover">Tokyo</a>
                    <a className="link link-hover">Los Angeles</a>
                    <a className="link link-hover">Rome</a>
                    <a className="link link-hover">Amsterdam</a>
                </nav>
                <nav className="grid grid-cols-1 ">
                    <h6 className="footer-title">Information</h6>
                    <a className="link link-hover">Press centre</a>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact us</a>
                    <a className="link link-hover">Site map</a>
                </nav>
                <nav className="grid grid-cols-1 ">
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;