import React from 'react';


const Header = () => {
   return (
      <header className='bg-main'>
         <div className='container mx-auto p-4 text-center'>
            <h1 className='text-5xl font-bold text-bg'>
               Choose Engineers
            </h1>
            <p className='text-bg text-lg font-semibold capitalize my-2'>
               Choose world class engineers to make an strong programming team
            </p>
            <h2 className='text-2xl text-bg bg-highlight inline-block p-2 rounded'>
               Total Budget: 💰250000
            </h2>
         </div>
      </header>
   );
};

export default Header;
