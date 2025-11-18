import ContactUs2 from '@/components/(site)/home/contactUs2';
import OurService from '@/components/(site)/home/ourService';
import Banner from '@/components/common/banner';
import React from 'react';

const page = () => {
    return (
        <div>
            <Banner routeName='Contact'/>
            <ContactUs2/>
            <OurService/>
        </div>
    );
};

export default page;