import { Link } from "react-router-dom";

import Animation from "../../components/animation/Animation";

import About from "../../components/about/About";
import Portfolio from "../../components/portfolio/Portfolio";

function Home() {
  return (
    <div className='pt-16'>
      <div className='mb-40'>
        <div className=''>
          <div className='bg-img flex items-center justify-center flex-col mb-20'>
            <Animation />
            <div className='text-center text-white uppercase text-5xl mb-40 pr-8'>
              <h1 className='mb-6'>websites that</h1>
              <h1 className='mb-6'>are compatible</h1>
              <h1>with all devices</h1>
            </div>
            <Link
              to={"/contact"}
              className='uppercase text-3xl transition duration-200 bg-cyan-800 rounded py-1 px-5 text-slate-300 hover:text-cyan-800 hover:bg-slate-400 mb-20'>
              Go to the contact section for details
            </Link>
          </div>
          <h3 className='text-center text-2xl text-gray-500 mb-20'>
            This site gives complete information about me
          </h3> 
          {/* <div className='flex items-center justify-between mb-40'>
            <h1 className='text-center uppercase text-4xl pl-6'>
              <h2 className='mb-8 text-lime-700'>Build your website</h2>
              <h2 className='mb-8 text-emerald-700'>and</h2>
              <h2 className='mb-8 text-sky-800'>grow your business</h2>
              <h2 className='text-yellow-800'>with me</h2>
            </h1>
            <img className='rounded-2xl' src={home1} width={800} />
          </div>
          
         
          <h4 className='text-center border-b-2 border-zinc-800 mb-28'>
            <Link
              to={"/portfolio"}
              className='uppercase text-3xl transition duration-200 bg-cyan-800 rounded py-1 px-5 text-slate-300 hover:text-cyan-800 hover:bg-slate-400'>
              More Information
            </Link>
          </h4> */}
          <About />
          <Portfolio />
        </div>
      </div>
    </div>
  );
}

export default Home;
