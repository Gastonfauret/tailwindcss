import React from 'react'
import '../../src/index.css'

function Header() {
    return (
        <div className=" m-5 p-5 bg-gray-200">
            <h1 className=" text-2xl font-bold text-green-600">Hola Mundo.</h1>
            <h2 className=" text-xl font-medium text-blue-400">Estoy Trabajando</h2>
            <h3 className=" text-lg font-semibold text-pink-300 text-right">con Tailwind CSS</h3>
            <h4 className=" text-center text-3xl font-extrabold text-violet-500">en React</h4>
        </div>
    )
}

export default Header
