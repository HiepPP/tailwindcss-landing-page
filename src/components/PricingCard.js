import React, {Component} from 'react'
import Button from "./Button";

export default function PricingCard({middle}) {
    return (
        <>
            <div
                className={`${middle ? "flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg md:z-10" : "flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4"}`}>
                <div
                    className={`${middle ? "text-black text-center" : "border-2 shadow-lg bg-white text-black rounded-lg text-center"}`}>
                    <div className="py-8 text-3xl font-bold">Free</div>
                    <ul className="w-full text-sm">
                        <li className="border-b py-4">Thing</li>
                        <li className="border-b py-4">Thing</li>
                        <li className="border-b py-4">Thing</li>
                    </ul>
                    <div className="py-8">
                        <p className="text-2xl font-bold">$100/user</p>
                        <div className="py-4">
                            <Button name="Sign Up"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}