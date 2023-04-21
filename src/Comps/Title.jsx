import React from 'react';

function Title({Text}) {
    return ( 
        <>
            <h1 className='w-full font-Hubot font-[900] text-center text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem]'>{Text}</h1>
        </>
    );
}

export default Title;