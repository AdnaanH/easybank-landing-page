import online from '../images/icon-online.svg'
import budgeting from '../images/icon-budgeting.svg'
import onboarding from '../images/icon-onboarding.svg'
import api from '../images/icon-api.svg'

function SectionOne() {
  return (
        <section className='min-h-96 py-20 bg-lightGrayishBlue w-full relative flex-col justify-start items-center px-24'>
            <h2 className='text-darkBlue font-normal text-4xl'>Why choose EasyBank?</h2>
            <p className='w-6/12 mt-6 text-grayishBlue font-medium'>We leverage Open Banking to turn your bank account into your financial hub. Control 
              your finances like never before.</p>
            <div className='mt-8 flex justify-between items-start gap-10'>
              <div className="flex-col w-3/12">
                <img src={online} alt="" />
                <h3 className='mt-4 text-darkBlue font-semibold'>Online Banking</h3>
                <p className='mt-4 text-grayishBlue text-base font-normal'>Our modern web and mobile applications allow you to keep track of your finances 
                  wherever you are in the world.</p>
              </div>
              <div className="flex-col w-3/12">
                <img src={budgeting} alt="" />
                <h3 className='mt-4 text-darkBlue font-semibold'>Simple Budgeting</h3>
                <p className='mt-4 text-grayishBlue text-base font-normal'>See exactly where your money goes each month. Receive notifications when you’re 
                  close to hitting your limits.</p>
              </div>
              <div className="flex-col w-3/12">
                <img src={onboarding} alt="" />
                <h3 className='mt-4 text-darkBlue font-semibold'>Fast Onboarding</h3>
                <p className='mt-4 text-grayishBlue text-base font-normal'>We don’t do branches. Open your account in minutes online and start taking control 
                  of your finances right away.</p>
              </div>
              <div className="flex-col w-3/12">
                <img src={api} alt="" />
                <h3 className='mt-4 text-darkBlue font-semibold'>Open API</h3>
                <p className='mt-4 text-grayishBlue text-base font-normal'>Manage your savings, investments, pension, and much more from one account. Tracking 
                  your money has never been easier.</p>
              </div>
            </div>
        </section>
  )
}

export default SectionOne