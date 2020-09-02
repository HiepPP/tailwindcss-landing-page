import React from 'react';

export default function Card({title, description}){
    return(
        <>
            <div className="w-full md:w-1/3 px-4 py-3">
                <div className="border-2 border-gray-400 p-4 shadow-lg">
                    <a>
                        <p className="uppercase">getting start</p>
                        <p className="font-bold text-2xl">Lorem ipsum dolor sit amet.</p>
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
                            ipsum eu nunc commodo posuere et sit amet ligula.</p>
                        <div className="flex justify-start">
                            <button
                                className="bg-black text-white px-8 py-4 rounded-full my-8 shadow-lg">Action
                            </button>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}