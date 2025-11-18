import OurService2 from '@/components/(site)/home/ourService2';
import WhatSetsMeApart from '@/components/(site)/service/WhatSetsMeApart';
import Banner from '@/components/common/banner';
import React from 'react';

const page = () => {
    return (
        <div>
            <Banner routeName='Service'/>
            <OurService2/>
            <WhatSetsMeApart/>
            
        </div>
    );
};

export default page;