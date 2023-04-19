import React from 'react';
import Button from './Button';
import { BiCopy } from 'react-icons/bi';

function Password({Value}) {
    return ( 
        <>
            <div className='transition .3s overflow-hidden flex flex-row flex-nowrap items-center justify-center h-[40px] w-[250px] mx-auto shadow-lg hover:shadow-xl rounded-lg'>
                <div className='flex flex-row flex-nowrap items-center justify-center w-[100%] h-[40px] font-Mona text-[.8rem]'>{Value}</div>
                <Button 
                    Text={
                        <>
                            <BiCopy size={20}/>
                        </>

                    }

                    Func={() => window.navigator.clipboard.writeText(Value)}
                />
            </div>
        </>
    );
}

export default Password;