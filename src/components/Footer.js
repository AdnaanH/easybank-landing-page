import logo from '../images/logo-alt.svg'
import facebook from '../images/icon-facebook.svg'
import youtube from '../images/icon-youtube.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import instagram from '../images/icon-instagram.svg'

function Footer() {
  return (
    <section className="flex justify-between items-center px-24 py-8 bg-darkBlue">
        <div className="flex items-center w-10/12">
            <div className='flex-col w-4/12 text-white'>
                <img src={logo} alt="w-full" />
                <div className='flex justify-start items-center gap-3 mt-10'>
                    <img src={facebook} alt=""  />
                    <img src={youtube} alt="" />
                    <img src={twitter} alt="" />
                    <img src={pinterest} alt="" />
                    <img src={instagram} alt="" />
                </div>
            </div>
            <div className='flex-col w-3/12'>
                <ul>
                    <li className='text-base text-lightGrayishBlue font-medium'>About Us</li>
                    <li className='text-base text-lightGrayishBlue font-medium'>Contact</li>
                    <li className='text-base text-lightGrayishBlue font-medium'>Blog</li>
                </ul>
            </div>
            <div className='flex-col w-3/12'>
                <ul>
                    <li className='text-base text-lightGrayishBlue font-medium'>Careers</li>
                    <li className='text-base text-lightGrayishBlue font-medium'>Support</li>
                    <li className='text-base text-lightGrayishBlue font-medium'>Privacy Policy</li>
                </ul>
            </div>
        </div>
        <div className='flex-col w-4/12 text-end'>
            <button className=" justify-end font-medium bg-gradient-to-r from-limeGreen to-brightCyan px-6 py-2 rounded-3xl text-base text-white">Request invite</button>
            <p className='mt-6 text-sm text-grayishBlue font-medium'>© Easybank. All Rights Reserved</p>
        </div>
    </section>
  )
}

export default Footer