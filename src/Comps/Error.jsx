import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';

function Error({Message}) {
    return ( 
        <>
            <p className="flex flex-row flex-nowrap items-center justify-center gap-[5px] text-red-600 pt-[7px] pb-[5px] font-Mona text-center text-[.7rem]">{Message} <RiErrorWarningFill size={15} color='#dc2626'/> </p>
        </>
    );
}

export default Error;