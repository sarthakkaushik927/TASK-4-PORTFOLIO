import React from 'react'
import { Link } from 'react-scroll';

const GoTop = () => {
  return (
    <div className=''>
        <Link to="home" smooth={true} duration={500}>
          {/* <button className=" fixed bottom-[10%] right-4 bg-gradient-to-bl from-purple-700 to-pink-500  text-white py-2 px-8 rounded-4xl  font-bold inline-block hover:scale-115 duration-300">
            Go Top
            </button> */}
            <img width="64" height="64" src="https://img.icons8.com/nolan/64/up.png" alt="up" className="fixed bottom-4 right-4  inline-block hover:scale-120 duration-300"/>
        </Link>
        
    </div>
  )
}

export default GoTop