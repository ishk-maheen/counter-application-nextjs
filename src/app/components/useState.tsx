"use client"

import React, { useState } from 'react'

const Count = () => {
    const [count, setNewCount] = useState(0)

    return (
        <div className="text-center bg-black text-white w-[500px] h-[250px] border-2 border-black border-solid mx-auto mt-60 rounded-lg">

            <h1 className="text-5xl mt-6 font-bold">Counter Application</h1>

            <p className="text-3xl my-5 mb-10">Current Count = {count}</p>
            
            <button className="text-xl mx-3 w-[120px] py-3 text-center bg-green-500 rounded" onClick={() => (setNewCount(count + 1))}>Increase</button>

            <button className="text-xl mx-3 w-[120px] py-3 text-center bg-yellow-500 rounded" onClick={() => { if (count !== 0) { (setNewCount(count - 1)) } }}>Decrease</button>

            <button className="text-xl mx-3 w-[120px] py-3 text-center bg-red-600 rounded" onClick={() => (setNewCount(0))}>Reset</button>

        </div>
    )
}

export default Count;