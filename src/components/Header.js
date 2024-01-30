import logo from '../images/logo.svg';

function Header() {
  return (
    <header>
      <nav className="flex relative justify-between z-50 items-center bg-white h-20 w-full px-24">
        <img src={logo} alt="Your Logo"/>
        <div className="">
          <ul className="sm:flex hidden gap-6">
            <li className="text-grayishBlue font-semibold text-base cursor-pointer">Home</li>
            <li className="text-grayishBlue font-semibold text-base cursor-pointer">About</li>
            <li className="text-grayishBlue font-semibold text-base cursor-pointer">Contact</li>
            <li className="text-grayishBlue font-semibold text-base cursor-pointer">Blog</li>
            <li className="text-grayishBlue font-semibold text-base cursor-pointer">Careers</li>
          </ul>
        </div>
        <button className="font-semibold bg-gradient-to-r from-limeGreen to-brightCyan px-6 py-2 rounded-3xl text-base text-white">Request invite</button>
      </nav>
    </header>
  );
}

export default Header;
