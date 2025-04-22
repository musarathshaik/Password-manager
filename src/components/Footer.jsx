import React from 'react'

const Footer = () => {
  return (
    <div className='bg-green-700 text-white flex flex-col justify-center items-center  w-full'>
       <div className="logo font-bold text-white text-2xl">
      <span className='text-red-600'> &lt;</span>
        <span>Pass</span>
        <span className='text-red-600'>OP/&gt;</span>
    </div>
     <div className='flex justify-center items-center'> Created with <img className='w-7 mx-2' src="icons/heart.png" alt="" /> by shaikMusarath </div>
        </div>
  )
}

export default Footer
