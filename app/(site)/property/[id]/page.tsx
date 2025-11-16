import PropertyDetails from '@/components/(site)/property/propertyDetails ';
import Banner from '@/components/common/banner';
import React from 'react';

const page = () => {
    return (
        <div>
            <Banner routeName='Property Details'/>
            <PropertyDetails/>
        </div>
    );
};

export default page;