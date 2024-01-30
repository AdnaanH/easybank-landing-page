import currency from '../images/image-currency.jpg'
import restaurant from '../images/image-restaurant.jpg'
import plane from '../images/image-plane.jpg'
import confetti from '../images/image-confetti.jpg'

function SectionTwo() {
  return (
    <section className='min-h-screen w-full relative flex-col justify-start items-center bg-veryLightGray px-24 py-20'>
        <h2 className='text-darkBlue font-normal text-4xl'>Latest Articles</h2>
        <div className='mt-8 flex justify-between items-start gap-10'>
            <div className="flex-col w-3/12 h- rounded-md bg-white">
                <img src={currency} alt="" className='h-44 w-full rounded-tl-md rounded-tr-md '  />
                <div className='px-4 py-6'>
                    <small className='text-grayishBlue '>By Claire Robinson</small>
                    <h3 className='mt-3 font-medium text-darkBlue text-xl hover:text-brightCyan cursor-pointer'>Receive money in any currency with no fees</h3>
                    <p className='text-grayishBlue mt-3'>The world is getting smaller and we’re becoming more mobile. So why should you be 
                        forced to only receive money in a single …</p>
                </div>
            </div>
            <div className="flex-col w-3/12 rounded-md bg-white">
                <img src={restaurant} alt="" className='h-44 w-full rounded-tl-md rounded-tr-md' />
                <div className='px-4 py-6'>
                    <small className='text-grayishBlue'>By Wilson Hutton</small>
                    <h3 className='mt-3 font-medium text-darkBlue text-xl hover:text-brightCyan cursor-pointer'>Treat yourself without worrying about money</h3>
                    <p className='text-grayishBlue mt-3'>Our simple budgeting feature allows you to separate out your spending and set 
                        realistic limits each month. That means you …</p>
                </div>
            </div>
            <div className="flex-col w-3/12 rounded-md bg-white">
                <img src={plane} alt="" className='h-44 w-full rounded-tl-md rounded-tr-md' />
                <div className='px-4 py-6'>
                    <small className='text-grayishBlue'>By Wilson Hutton</small>
                    <h3 className='mt-3 font-medium text-darkBlue text-xl hover:text-brightCyan cursor-pointer'>  Take your Easybank card wherever you go</h3>
                    <p className='text-grayishBlue mt-3'>We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
                        while you’re abroad. We’ll even show you …</p>
                </div>
            </div>
            <div className="flex-col w-3/12 rounded-md bg-white">
                <img src={confetti} alt="" className='h-44 w-full rounded-tl-md rounded-tr-md' />
                <div className='px-4 py-6'>
                    <small className='text-grayishBlue'>By Claire Robinson</small>
                    <h3 className='mt-3 font-medium text-darkBlue text-xl hover:text-brightCyan cursor-pointer'>Our invite-only Beta accounts are now live!</h3>
                    <p className='text-grayishBlue mt-3'>After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
                        It’s easy to request an invite through the site ...</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SectionTwo