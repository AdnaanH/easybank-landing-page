import React from 'react'
import HeroImage from '../images/image-mockups.png'

function Hero() {
  return (
    <section className='min-h-screen w-full relative top-0  flex justify-between items-center bg-veryLightGray px-24 overflow-hidden'>
        <div className='w-6/12'>
          <h1 className='text-darkBlue font-normal text-5xl w-4/6'>Next generation digital banking</h1>
          <p className='mt-8 text-grayishBlue w-4/6 font-semibold'>
          Take your financial life online. Your Easybank account will be a one-stop-shop 
          for spending, saving, budgeting, investing, and much more.
          </p>
          <button className=" mt-8 font-semibold bg-gradient-to-r from-limeGreen to-brightCyan px-6 py-2 rounded-3xl text-base text-white">Request invite</button>
        </div>
        <div className=' w-6/12 absolute top-0 right-0 hero'>
          <img
            className=' relative -right-24 -top-24'
            src={HeroImage}
            alt=""
          />
        </div>
    </section>
  )
}

export default Hero
