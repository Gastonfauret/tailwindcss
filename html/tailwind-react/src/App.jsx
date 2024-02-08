import React from 'react'
import Card from './components/Card'

const App = () => {
    return (
        <div className=' container mx-auto m-10'>
            <h1>Tailwind CSS</h1>
            <h2>React</h2>
            <h3>Post CSS</h3>
            <button className='btn btn-blue btn-blue:hover'>Enviar</button>

            <div className='flex -mx-2 flex-wrap'>
                <div className='w-full sm:w-1/2 md:w-1/3 px-2'>
                    <Card photo='https://picsum.photos/400/200' />
                </div>
                <div className='w-full sm:w-1/2 md:w-1/3 px-2'>
                    <Card photo='https://picsum.photos/400/200' />
                </div>
                <div className='w-full sm:w-1/2 md:w-1/3 px-2'>
                    <Card photo='https://picsum.photos/400/200' />
                </div>
            </div>
        </div>

    )
}

export default App
