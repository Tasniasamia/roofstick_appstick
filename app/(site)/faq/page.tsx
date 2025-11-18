import FAQ from '@/components/(site)/faq/faq';
import OurClients from '@/components/(site)/home/ourClients';
import Banner from '@/components/common/banner';
import React from 'react';

const page = () => {
    return (
        <div>
            <Banner routeName='FAQ'/>
            <FAQ/>
            <OurClients/>
        </div>
    );
};

export default page;