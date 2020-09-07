import React from "react";

export default function SectionTitle({title}) {
    return (
        <>
            <h1 className="text-5xl font-bold text-center text-black">{title}</h1>
            <div className="w-full my-4">
                <div
                    className="h-1 w-64 mx-auto bg-gradient-to-r from-green-300 via-green-500 to-green-900">
                </div>
            </div>
        </>
    )
}