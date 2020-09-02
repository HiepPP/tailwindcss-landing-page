import React, { Component } from 'react'

export default function Button({name}){
    return(
        <>
            <button className="bg-black text-white rounded-full py-4 px-8">{name}</button>
        </>
    )
}