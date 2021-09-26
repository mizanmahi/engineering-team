import React from 'react';
import Engineer from '../Engineer/Engineer';

const Engineers = ({ engineers, hireHnadler }) => {
   return (
      <div className='w-3/4 bg-bg'>
          <h2 className="text-secondary text-4xl font-semibold text-center my-6">Wold Class Engineers</h2>
         <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 justify-center'>
            {engineers.map((engineer) => (
               <Engineer key={engineer.id} engineer={engineer} hireHnadler={hireHnadler}/>
            ))}
         </div>
      </div>
   );
};

export default Engineers;
