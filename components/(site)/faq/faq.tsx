import Image from 'next/image';
import React from 'react';

const FAQ = () => {
    return (
        <div className='lg:mt-[120px] mt-[60px] 2xl:px-0 px-3'>
            <div className='container grid grid-cols-3 gap-6'>
             <div className='col-span-2'></div>
             <div>
                <Image src="/faq.png" width={419} height={630} alt="image" className='w-full h-[630px] object-center rounded-xl'/>
             </div>
            </div>
        </div>
    );
};

export default FAQ;