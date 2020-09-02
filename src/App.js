import React, {useEffect, useState} from 'react';
import './App.css';
import SectionTitle from "./components/SectionTitle";
import SectionContent from "./components/SectionContent";
import Card from "./components/Card";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {

    useEffect(() => {
        setTop(true);
        window.addEventListener('scroll', handleScroll)
        return (() => {
            window.removeEventListener('scroll', handleScroll)
        })
    }, [])

    const handleScroll = (event) => {
        setTop(window.pageYOffset === 0)
    }

    const [top, setTop] = useState(false);

    return (
        <div className="App text-white">
            <body className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
            <nav className={`fixed w-full top-0 ${top ? null : 'bg-white text-black'}`}>
                <div className="w-full container mx-auto flex flex-wrap
                    items-center justify-between mt-0 py-5">
                    <div className="pl-4 flex items-center">
                        <svg className="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 512.005 512.005">
                            <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502"
                                  transform="matrix(1,0,0,1,0,0)"></rect>
                            <path className="plane-take-off"
                                  d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "></path>
                        </svg>
                        <a className="toggleColor no-underline hover:no-underline
                             font-bold text-2xl lg:text-4xl">Landing</a>
                    </div>
                    <div className="block lg:hidden pr-4"></div>
                    <div className="lg:flex lg:items-center lg:w-auto hidden">
                        <ul className="flex list-reset lg:flex justify-end flex-1 items-center">
                            <li className="mr-3">
                                <a className="py-2 px-4 text-black font-bold no-underline">Active</a>
                            </li>
                            <li className="mr-3">
                                <a className="py-2 px-4 text-black font-bold no-underline">Link</a>
                            </li>
                            <li className="mr-3">
                                <a className="py-2 px-4 text-black font-bold no-underline">Link</a>
                            </li>
                            <button
                                className="mx-auto lg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 bg-white text-gray-800">Action
                            </button>
                        </ul>
                    </div>
                </div>
                <hr className="border-b border-gray-100 opacity-25"/>
            </nav>
            <div className="pt-32">
                <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    <div className="flex flex-col w-full justify-center md:w-2/5 item-start text-center md:text-left">
                        <p className="uppercase tracking-loose w-full">What business are you?</p>
                        <h1 className="my-4 text-5xl font-bold leading-tight">Main Hero Message to sell yourself!</h1>
                        <p className="leading-normal text-2xl mb-8">Sub-hero message, not too long and not too short.
                            Make it just right!</p>
                        <button
                            className="mx-auto hover:underline rounded-full bg-black text-white py-4 px-8 shadow-lg">Subscribe
                        </button>
                    </div>
                    <div className="w-full md:w-3/5 py-6 text-center">
                        <img src="https://www.tailwindtoolbox.com/templates/hero.png"/>
                    </div>
                </div>
            </div>
            <div className="">
                <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
                            <path
                                d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                                opacity="0.100000001"></path>
                            <path
                                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                                opacity="0.100000001"></path>
                            <path
                                d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                                id="Path-4" opacity="0.200000003"></path>
                        </g>
                        <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
                            <path
                                d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
                        </g>
                    </g>
                </svg>
            </div>
            <section className="bg-white text-black">
                <div className="container mx-auto">
                    <SectionTitle title={"Section 1"}/>
                    <SectionContent
                        title={"Lorem ipsum dolor sit amet"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula."}
                        link={"undraw.co"}
                    />
                    <SectionContent
                        title={"Lorem ipsum dolor sit amet"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula."}
                        link={"undraw.co"}
                        isReverse={true}
                    />
                </div>
            </section>
            <section className="bg-white text-black">
                <div className="container mx-auto">
                    <SectionTitle title={"Section 2"}/>
                    <div className="flex flex-wrap">
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </section>
            <section className="bg-gray-400 py-8">
                <div className="container mx-auto">
                    <SectionTitle title="Pricing"/>
                    <Pricing/>
                </div>
            </section>
            <Footer/>
            </body>
        </div>
    );
}

export default App;
