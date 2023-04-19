import React from 'react';

function Title({Text}) {
    return ( 
        <>
            <h1 className='w-full my-[10px] font-Hubot font-[900] text-center text-[1.5rem]'>{Text}</h1>
        </>
    );
}

export default Title;