import React from 'react';

function Input({Number, changeNumberInInput}) {
    return ( 
        <>
            <input 
                type="number"
                name="number" 
                id="number" 
                defaultValue={Number} 
                required
                max={12} 
                min={4}
                onChange={changeNumberInInput}
                className='transition .3s block w-[130px] sm:scale-[1.2] h-[35px] mx-auto my-[15px] font-Mona text-center bg-gradient-to-tr from-[#fff] via-slate-100 to-slate-100 rounded-sm shadow-md hover:shadow-xl'
            />
        </>
    );
}

export default Input;