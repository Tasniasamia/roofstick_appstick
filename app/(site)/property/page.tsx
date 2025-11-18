import ContactUs1 from '@/components/(site)/home/contactUs1';
import OurClients from '@/components/(site)/home/ourClients';
import OurProperty from '@/components/(site)/property/ourProperty';
import Banner from '@/components/common/banner';
import React from 'react';

const page = () => {
    return (
        <div>
            <Banner routeName='Properties'/>
            <OurProperty/>
            <OurClients/>
            <ContactUs1/>
        </div>
    );
};

export default page;