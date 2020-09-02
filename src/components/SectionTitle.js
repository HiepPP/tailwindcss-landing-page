import React from "react";

export default function SectionTitle({title}){
    return(
        <>
                <h1 className="text-5xl font-bold text-center text-black">{title}</h1>
                <div className="w-full my-4">
                        <div
                            className="h-1 w-64 mx-auto bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
                        </div>
                </div>
        </>
    )
}