import React from "react";
import { Link } from "react-router-dom";
import { FaTelegram, FaCopyright } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFacebook, BsGithub } from "react-icons/bs";
import footerImg from '../../assets/images/how-works-web.svg'

function Footer() {
  return (
    <footer className='w-full bg-slate-900 pb-2'>
      <div className='flex items-center justify-between container max-w-7xl m-auto'>
        <div className='flex flex-col uppercase text-slate-400 text-left gap-1'>
          <h1 className='text-gray-50'>site navigation</h1>
          <Link className='hover:text-white' to={"/"}>
            Home
          </Link>
          <Link className='hover:text-white' to={"/about"}>
            About
          </Link>
          <Link className='hover:text-white' to={"/portfolio"}>
            Portfolio
          </Link>
          <Link className='hover:text-white' to={"/contact"}>
            Contact
          </Link>
        </div>
        <div className='flex items-center'>
          <h1 className='text-sky-700 font-bold italic text-3xl'>WEB</h1>
          <img
            src={footerImg}
            alt=''
            width={300}
            height={300}
          />
          <span className='text-orange-600 text-3xl'>DEV</span>
        </div>
        <div>
          <h1 className='text-gray-50 uppercase mb-10'>Contact as</h1>
          <div className='flex gap-8 text-white mb-5'>
            <Link target={"_blank"} to={"https://t.me/IlyosAxmadAli"}>
              <span>
                <FaTelegram />
              </span>
            </Link>
            <Link
              target={"_blank"}
              to={
                "https://www.facebook.com/ilyos.axmadaliyev.9?mibextid=ZbWKwL"
              }>
              <span>
                <BsFacebook />
              </span>
            </Link>
            <Link
              target={"_blank"}
              to={"https://www.linkedin.com/in/ilyos-axmad-ali-1980a926a"}>
              <span>
                <AiFillLinkedin />
              </span>
            </Link>
            <Link target={"_blank"} to={"https://github.com/IlyosDeveloper"}>
              <span>
                <BsGithub />
              </span>
            </Link>
          </div>
          <div className='flex items-center gap-3'>
            <FaCopyright className='text-slate-400' />
            <p className='text-slate-600'>This site was created in 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
