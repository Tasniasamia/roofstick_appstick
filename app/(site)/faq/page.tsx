import FAQ from '@/components/(site)/faq/faq';
import Banner from '@/components/common/banner';
import React from 'react';

const page = () => {
    return (
        <div>
            <Banner routeName='FAQ'/>
            <FAQ/>
        </div>
    );
};

export default page;