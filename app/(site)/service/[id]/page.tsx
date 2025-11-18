import ServiceDetails from '@/components/(site)/service/serviceDetails';
import Banner from '@/components/common/banner';
import React from 'react';

const page = () => {
    return (
        <div>
            <Banner routeName='Service Details'/>
            <ServiceDetails/>
        </div>
    );
};

export default page;

