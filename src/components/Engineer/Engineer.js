import React from 'react';
import { BsCursorFill } from 'react-icons/bs';
import Expertise from '../Experties/Experties';

const Engineer = ({ engineer, hireHnadler }) => {
   const { imgUrl, name, designation, hiringCost, expertise, country, id } =
      engineer;
   return (
      <div className=' bg-secondary text-center shadow rounded pt-4'>
         <img
            src={imgUrl}
            alt='engineer'
            className='w-32 rounded-full mx-auto'
         />
         <h2 className='text-bg text-2xl font-semibold'>{name}</h2>
         <p className='text-bg font-light text-xl'>{designation}</p>
         <span className=' text-gray-500 font-medium'>{country}</span>

         <div className='mt-6 mb-6 flex justify-around'>
            {expertise.map((skill) => (
               <Expertise key={skill}>{skill}</Expertise>
            ))}
         </div>

         <button
            className='bg-main py-3 flex items-center px-12 rounded-lg shadow-lg mb-6 text-bg font-bold text-xl border-0 mx-auto'
            onClick={() => hireHnadler(id)}
         >
            Hire{' '}
            <span className='ml-1'>
               <BsCursorFill />
            </span>{' '}
         </button>

         <h3 className='text-bg bg-highlight text-xl font-bold border-none p-2 rounded-b'>
            Hiring Cost: ${hiringCost}
         </h3>
      </div>
   );
};

export default Engineer;
