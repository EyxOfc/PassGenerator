import React from 'react';

function Container({Child}) {
    return ( 
        <>
        <div className='w-[90%] max-w-[450px] min-w-[300px] py-[20px] px-[20px] my-[10px] mx-auto bg-[#fff] rounded-lg shadow-md'>
            {Child}
        </div>
        </>
    );
}

export default Container;