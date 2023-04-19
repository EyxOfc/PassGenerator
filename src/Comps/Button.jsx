import React from 'react';

function Button({Text, Func}) {
    return ( 
        <>
            <button 
                type="submit"
                onClick={Func}
                className='transition .3s flex flex-row flex-nowrap items-center justify-center py-[10px] px-[20px] mx-auto my-[15px] text-[.8rem] font-Mona bg-sky-500 hover:bg-sky-400 gap-[5px] rounded-sm shadow-md hover:shadow-xl'
            >
                {Text}
            </button>
        </>
    );
}

export default Button;