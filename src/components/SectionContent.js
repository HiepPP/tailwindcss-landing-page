import React from 'react';

export default function SectionContent({title, description, link, isReverse}) {
    return (
        <>
            <div className={`flex flex-wrap ${isReverse && "flex-row-reverse"}`}>
                <div className="w-5/6 sm:w-1/2 p-6">
                    <p className="font-bold text-4xl">{title}</p>
                    <p className="my-4 text-gray-600">{description}</p>
                    <p>Images from: <a className="underline text-orange-500">{link}</a></p>
                </div>
                <div className="w-full sm:w-1/2 p-6">
                    <img className="" src="https://www.tailwindtoolbox.com/templates/hero.png"/>
                </div>
            </div>
        </>
    )
}