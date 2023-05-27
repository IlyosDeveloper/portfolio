import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import person from "../../assets/images/20230502_084045.jpg";

function About() {
  const [showText, setShowText] = useState(false);
  return (
    <div>
      <div id="about" className='about-bg text-white text-4xl mb-10 pt-32'>
        <h1 className='uppercase text-center'>
          I'm glad you want to get to know me
        </h1>
      </div>
      <div className='container max-w-7xl m-auto pt-10'>
        <div className='flex items-center justify-between mb-6'>
          <div className='flex'>
            <div className='text-end mr-3 title-1'>
              <h2>Full name:</h2>
              <h2>Country:</h2>
              <h2>Region:</h2>
              <h2>D.O.B:</h2>
              <h2>Languages:</h2>
              <h2>JOB:</h2>
              <h2>Skills:</h2>
              <h2>Purpose:</h2>
            </div>
            <div className='title-2'>
              <h2> Ilyosjon Akhmadaliyev</h2>
              <h2>Respublic of Uzbekistan</h2>
              <h2>Fergana</h2>
              <h2> 1996.12.27</h2>
              <h2>
                Uzbek - (native), English - (A2-elementary), Rus - (B1-medium)
              </h2>
              <h2>Frontend React developer</h2>
              <h2 className='text-stone-900'>
                <span className='bg-red-700'>HTML</span>{" "}
                <span className='bg-blue-600'>CSS</span>{" "}
                <span className='bg-orange-500'>JAVASCRIT</span>{" "}
                <span className='bg-sky-500'>REACT.JS</span>{" "}
                <span className='bg-lime-600'>REST API</span>{" "}
                <span className='bg-sky-300'>TAILWIND</span>{" "}
                <span className='bg-blue-400'>BOOTSTRAP</span>
              </h2>
              <div className='w-[500px]'>
                <p>
                  To increase his experience in the field, to contribute to the
                  development of the company he works for, and to be a strong
                  professional who serves the Islamic community.
                </p>
              </div>
            </div>
          </div>
          <div className='flex items-center'>
            <img
              className='rounded-full mr-24'
              src={person}
              alt='image'
              width={300}
              height={400}
            />
            <div className=''>
              <div className='text-center mb-3'>
                <h3 className='mb-3'>Education ↓</h3>
                <a
                  href='https://najottalim.uz/'
                  className='bg-green-600 p-2 rounded text-white
                  hover:opacity-70'>
                  {" "}
                  Najot Ta'lim
                </a>
              </div>
              <div className='text-center mb-3'>
                <h3 className='mb-3'>Company ↓</h3>
                <Link
                  to={"/"}
                  className='bg-emerald-700 p-2 rounded text-white hover:opacity-70'>
                  ---(////)---
                </Link>
              </div>
              <div className='text-center'>
                <h3 className='mb-3'>Experience ↓</h3>
                <span className='border p-2 rounded text-black bg-slate-400'>
                  0 years +
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='linie'></div>
        <div className='mt-6 mb-4'>
          <h2 className='text-lg italic bg-slate-400 inline-block rounded pr-1 mb-3 mr-4'>
            A little about me :)
            <span className='text-2xl'> →</span>
          </h2>
          <button
            onClick={() => setShowText(!showText)}
            className='px-5 pt-[4px] rounded bg-slate-400 hover:text-white hover:bg-slate-900 text-lg italic'>
            In detail
          </button>
          {showText && (
            <p className='font-bold'>
              He was born on December 27, 1996 in an ordinary family in
              Mingbulok District, Namangan Region, Uzbekistan. On September 1,
              2004, he was admitted to secondary school number 32 of this
              district. He graduated from school in 2013 and 3-year vocational
              college in 2016. At first, he worked in the field of construction
              in his country, and later abroad. Later he became interested in
              the IT field. Returned to his country in 2021 and started looking
              for good training courses in IT.Finally, in 2022, he enrolled in
              the web full stack course of programming at the Fergana branch of
              "NAJOT TALIM". Currently finalizing and implementing the frontend
              part of the web development and simultaneously preparing for the
              backend part !!!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
