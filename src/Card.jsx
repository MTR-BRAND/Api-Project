import React from 'react';
function Card(props) {
  return (
    <>
      <div className='bg-[#ff66c4] rounded-2xl shadow-lg max-w-sm w-full overflow-hidden mx-auto transform transition-all hover:scale-105 hover:shadow-2xl'>
        <div className='w-full h-56 bg-black rounded-xl overflow-hidden '>
          <img
            src={props.img}
            alt="Profile Pic"
            className='w-full h-full object-cover object-center'
          />
        </div>
        <div className='mt-4 sm:text-center md:text-left px-6 py-2'>
          <h1 className='text-2xl font-semibold'>NAME: {props.name}</h1>
          <h1 className='text-2xl font-semibold'>AGE: {props.age}</h1>
          <h1 className='text-2xl font-semibold'>PROFESSION: {props.prof}.</h1>
        </div>
        <div className='flex justify-center mt-6'>
          <button className='bg-black w-[90%] text-white font-semibold px-6 py-2 mb-5 rounded-full transition duration-300 ease-in-out hover:bg-gray-700'>
            SEE MORE
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
