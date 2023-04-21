import React from 'react';

function Descrition({Text}) {
    return ( 
        <>
            <p className='my-[10px] font-Mona text-center text-[.7rem] sm:text-[.85rem] md:text-[1rem] lg:text-[1.15rem]'>{Text}</p>
        </>
    );
}

export default Descrition;