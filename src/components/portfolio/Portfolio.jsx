import React from "react";
import { useState } from "react";
import myteam from "../../assets/images/myteam.png";
import roldoce from "../../assets/images/rolldice.png";
import menu from "../../assets/images/menu.png";
import todolist from "../../assets/images/todolist.png";
import word from "../../assets/images/words.png";

function Portfolio() {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <div className='portfolio-bg pt-32 text-white text-4xl mb-10'>
        <div>
          <h1 className='uppercase text-center'>
            Projects I have created and participated in
          </h1>
        </div>
      </div>
      <div className='container max-w-7xl m-auto mb-10'>
        <div className='max-w-xl flex items-center flex-col m-auto border-b-2 border-gray-900 mb-14'>
          <h1 className='uppercase text-2xl text-slate-600 mb-4'>
            real projects
          </h1>
          <button
            onClick={() => setShowInfo(!showInfo)}
            className='mb-14 text-xl uppercase transition duration-200 bg-cyan-800 rounded py-1 px-5 text-slate-300 hover:text-cyan-800 hover:bg-slate-400'>
            {!showInfo ? "open" : "close"}
          </button>
          {showInfo && (
            <p className='text-center text-lg text-slate-500'>
              As I am new in this field, I don't have any real projects yet. I'm
              working on an actual project right now, which I'll share when I'm
              done!
            </p>
          )}
        </div>
        <h1 className='text-center uppercase text-2xl text-slate-600 mb-14'>
          practical projects
        </h1>
        <div className='flex items-center justify-between mb-28'>
          <h1 className='text-center uppercase text-3xl pl-6'>
            <h2 className='mb-2 text-lime-700'>compiled with html and css</h2>{" "}
            <br /> <h2 className='mb-8 text-orange-800'>my team app</h2>
            <a
              target={"_blank"}
              href='https://iaa-myteam.netlify.app/'
              className='text-xl uppercase transition duration-200 bg-cyan-800 rounded py-1 px-5 text-slate-300 hover:text-cyan-800 hover:bg-slate-400'>
              Next view →
            </a>
          </h1>
          <img className='rounded-2xl' src={myteam} alt='img' width={600} />
        </div>
        <div className='flex items-center justify-between mb-28'>
          <img className='rounded-2xl' src={roldoce} alt='img' width={600} />
          <h1 className='text-center uppercase text-3xl pr-20'>
            <h2 className='mb-8 text-green-800'>
              rolldice game using javascript
            </h2>
            <a
              target={"_blank"}
              href='https://ia-dice-game.netlify.app/'
              className='text-xl uppercase transition duration-200 bg-cyan-800 rounded py-1 px-5 text-slate-300 hover:text-cyan-800 hover:bg-slate-400'>
              ← Next view
            </a>
          </h1>
        </div>
        <div className='flex items-center justify-between mb-28'>
          <h1 className='text-center uppercase text-3xl pl-6'>
            <h2 className='mb-8 text-lime-700'>restaurant menu with react</h2>
            <a
              target={"_blank"}
              href='https://menu-with-react.netlify.app'
              className='text-xl uppercase transition duration-200 bg-cyan-800 rounded py-1 px-5 text-slate-300 hover:text-cyan-800 hover:bg-slate-400'>
              Next view →
            </a>
          </h1>
          <img className='rounded-2xl' src={menu} alt='img' width={600} />
        </div>
        <div className='flex items-center justify-between mb-28'>
          <img className='rounded-2xl' src={todolist} alt='img' width={600} />
          <h1 className='text-center uppercase text-3xl pr-20'>
            <h2 className='mb-8 text-green-800'>To do list app</h2>
            <a
              target={"_blank"}
              href='https://ia-todo-list.netlify.app'
              className='text-xl uppercase transition duration-200 bg-cyan-800 rounded py-1 px-5 text-slate-300 hover:text-cyan-800 hover:bg-slate-400'>
              ← Next view
            </a>
          </h1>
        </div>
        <div className='flex items-center justify-between mb-24'>
          <h1 className='text-center uppercase text-3xl pl-6'>
            <h2 className='mb-8 text-gray-800'>
              Guide to the English language
            </h2>
            <a
              target={"_blank"}
              href='https://ia-words-api.netlify.app/'
              className='text-xl uppercase transition duration-200 bg-cyan-800 rounded py-1 px-5 text-slate-300 hover:text-cyan-800 hover:bg-slate-400'>
              Next view →
            </a>
          </h1>
          <img className='rounded-2xl' src={word} alt='img' width={600} />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
