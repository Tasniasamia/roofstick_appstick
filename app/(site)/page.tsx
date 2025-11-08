import About from '@/components/(site)/home/about';
import AgentService from '@/components/(site)/home/agentService';
import CardStackSlider from '@/components/(site)/home/cardStackSlider';
import ContactUs1 from '@/components/(site)/home/contactUs1';
import ContactUs2 from '@/components/(site)/home/contactUs2';
import ExploreCities from '@/components/(site)/home/exploreCities';
import HeroSection1 from '@/components/(site)/home/hero';
import OurBlog from '@/components/(site)/home/ourBlog';
import OurClients from '@/components/(site)/home/ourClients';
import OurService from '@/components/(site)/home/ourService';
import OurTeam from '@/components/(site)/home/ourTeam';
import OurTestimonial from '@/components/(site)/home/ourTestimonial';
import Properties from '@/components/(site)/home/properties';
import Work from '@/components/(site)/home/work';
import Categories from '@/components/common/categories';
import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div>
            <HeroSection1/>
            <Categories/>
            <Properties/>
            <ExploreCities/>
            <Work isHome1={true}/>
            <OurService/>
            <AgentService/>
            <About/>
            <CardStackSlider/>
            <div className='relative'>
            <Image src="/vector-xl.png" width={2000} height={2000} alt="vector" className='object-center lg:block hidden w-full h-[1579px] absolute  top-[-388px] left-0'/>
            <OurClients/>
            <OurBlog/>
            </div>
            <ContactUs1/>
            <ContactUs2/>
            <OurTeam/>
            
        </div>
    );
};

export default page;