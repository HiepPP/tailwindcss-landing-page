import React from 'react';
import PricingCard from "./PricingCard";

export default function Pricing(){
    return(
        <>
            <div className="flex flex-col md:flex-row justify-center mt-10">
                <PricingCard/>
                <PricingCard middle={true}/>
                <PricingCard/>
            </div>

        </>
    )
}