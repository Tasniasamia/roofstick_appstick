import OurAgents from '@/components/(site)/about/outAgent';
import About from '@/components/(site)/home/about';
import AgentService from '@/components/(site)/home/agentService';
import CardStackSlider from '@/components/(site)/home/cardStackSlider';
import ContactUs1 from '@/components/(site)/home/contactUs1';
import OurClients from '@/components/(site)/home/ourClients';
import Banner from '@/components/common/banner';
import React from 'react';

const page = () => {
    return (
        <div>
            <Banner routeName='About'/>
            <About/>
            <OurClients/>
            <OurAgents/>
            <AgentService/>
            <CardStackSlider/>
            <ContactUs1/>
        </div>
    );
};

export default page;