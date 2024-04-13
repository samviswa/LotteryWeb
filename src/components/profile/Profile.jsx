import React from 'react';
import MyTickets from '../MyTickets/MyTickets';
import '../profile/Profile.css';

export default function Profile() {
 return (
    <>
      <div className="flex-col">
        <img className="w-screen h-[200px] object-fill fixed" src={"https://i.postimg.cc/1R6z308R/images-3-1.jpg"} alt="Background" />

        <img className="avatar rounded-full absolute top-[100px] left-[100px] w-[150px] h-[150px] bg-white shadow-md
          " src={"https://i.postimg.cc/mg3x3f54/avatar.png"} alt="User Avatar" />
        <div className='h-screen flex gap-1 mt-1 max-sm:flex-wrap'>
          <div className='w-[435px] flex flex-col items-center justify-center shadow-sm bg-slate-50'>
           <span className='text-3xl font-bold mt-8'>SAM ALTMAN</span>
           <span className='text-2xl mt-7'>India</span>
           <span className='text-2xl mt-5'>+91 9542365981</span>
           <span className='text-2xl mt-5'>samaltman@gmail.com</span>

          </div>
          <div className='left-0 bg-white w-screen outline outline-1 wrap flex items-center shadow-md rounded-3xl'>
          {/* <MyTickets/> */}
          <span className='text-3xl font-bold absolute top-[215px] left-[500px]'>MY TICKETS</span>
          <div className='ml-10 absolute top-[500px] bg-slate-400 rounded-lg w-[350px] h-[200px]'>

          </div>
          <div className='ml-10  bg-slate-400 rounded-lg w-[350px] h-[200px]'>

          </div>
          <div className='ml-10  bg-slate-400 rounded-lg w-[350px] h-[200px]'>

          </div>
          <div className='ml-10 top-[500px] bg-slate-400 rounded-lg w-[350px] h-[200px]'>

          </div>
          
          </div>
        </div>
      </div>
    </>
 );
}
