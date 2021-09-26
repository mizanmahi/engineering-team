import React from 'react';

export const Cart = ({ cartItems }) => {
   return (
      <div>
         <h2 className='text-secondary text-4xl font-semibold text-center my-6'>
            Hiring Details
         </h2>
         <div className='bg-highlight px-4 py-4 min-w-full'>
            {cartItems &&
               cartItems.map(({ imgUrl, name, designation, id }) => (
                  <div
                     className='bg-secondary p-2 mb-2 rounded-md shadow-md flex justify-around items-center'
                     key={id}
                  >
                     <div>
                        <h3 className='text-bg font-bold -mb-2'>{name}</h3>{' '}
                        <span className='text-main text-xs'>{designation}</span>
                     </div>
                     <img
                        src={imgUrl}
                        alt='engineer'
                        className='rounded-full w-12'
                     />
                  </div>
               ))}

            <div className='bg-secondary mb-2 rounded-md shadow-md flex'>
               <span className='text-bg font-bold p-2 w-2/3'>
                  Hired Engineers
               </span>
               <span className='bg-bg w-1/3 flex justify-center items-center text-secondary font-bold -mr-1 rounded-r-md'>
                  {cartItems.length}
               </span>
            </div>
            <div className='bg-secondary mb-2 rounded-md shadow-md flex'>
               <span className='text-bg font-bold p-2 w-2/3'>
                  Total Hiring Cost
               </span>
               <span className='bg-bg w-1/3 flex justify-center items-center text-secondary font-bold -mr-1 rounded-r-md'>
                  ${cartItems.reduce((acc, curr) => (acc += curr.hiringCost), 0)}
               </span>
            </div>
         </div>
      </div>
   );
};
