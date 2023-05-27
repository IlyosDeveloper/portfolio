import { Link, NavLink } from "react-router-dom";
import headerImg from "../../assets/images/how-works-web.svg";

function Navbar() {
  return (
    <header className='bg-slate-800 py-2 shadow-2xl fixed w-full z-10'>
      <div className='container max-w-7xl m-auto flex items-center justify-between'>
        <a href="#" className='flex items-center'>
          <h1 className='text-sky-700 font-bold italic text-2xl'>WEB</h1>
          <img src={headerImg} alt='' />
          <span className='text-orange-600 text-2xl'>DEV</span>
        </a>
        <nav>
          <ul className='flex items-center gap-x-16 text-x font-bold'>
            <li className='sitenav-item hover:text-neutral-500 text-slate-400 transition duration-300'>
              <a href="#home">Home</a>
              <span className='underline'></span>
            </li>
            <li className='sitenav-item hover:text-neutral-500 text-slate-400 transition duration-300'>
              <a href="#about">About</a>
              <span className='underline'></span>
            </li>
            <li className='sitenav-item hover:text-neutral-500 text-slate-400 transition duration-300'>
              <a href="#portfolio">Portfolio</a>
              <span className='underline'></span>
            </li>
            <li className='sitenav-item hover:text-neutral-500 text-slate-400 transition duration-300'>
              <a href="#contact">Contact</a>
              <span className='underline'></span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
