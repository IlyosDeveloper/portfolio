import Animation from "../../components/animation/Animation";

import About from "../../components/about/About";
import Portfolio from "../../components/portfolio/Portfolio";
import Contact from "../contact/Contact";

function Home() {
  return (
    <div id='home' className='pt-16'>
      <div className='mb-40'>
        <div className=''>
          <div className='bg-img flex items-center justify-center flex-col mb-20'>
            <Animation />
            <div className='text-center text-white uppercase text-5xl mb-40 pr-8'>
              <h1 className='mb-6'>websites that</h1>
              <h1 className='mb-6'>are compatible</h1>
              <h1>with all devices</h1>
            </div>
            <a
              href='#contact'
              className='uppercase text-3xl transition duration-200 bg-cyan-800 rounded py-1 px-5 text-slate-300 hover:text-cyan-800 hover:bg-slate-400 mb-20'>
              Go to the contact section for details
            </a>
          </div>
          <h3 className='text-center text-2xl text-gray-500 mb-20'>
            This site gives complete information about me
          </h3>
          <About />
          <Portfolio />
          <Contact/>
        </div>
      </div>
    </div>
  );
}

export default Home;
