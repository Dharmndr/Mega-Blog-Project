import React from 'react'

function Logo({width = '50px'}) {
    return (
        <div 
        style={{width: width, height:width}}
        className='bg-green-200 text-red-600 rounded-full flex items-center justify-center font-bold ' 
        >MB</div>
    )
}

export default Logo
