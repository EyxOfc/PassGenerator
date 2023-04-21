import React from 'react';

function Container({Child}) {
    return ( 
        <>
        <div className='flex flex-col flex-nowrap items-center justify-center gap-[10px] sm:gap-[18px] w-[90%] h-auto max-w-[450px] sm:max-w-[700px] min-w-[300px] py-[20px] px-[20px] my-[10px] mx-auto bg-[#fff] rounded-lg shadow-md'>
            {Child}
        </div>
        </>
    );
}

export default Container;