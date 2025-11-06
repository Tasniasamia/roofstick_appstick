import ExploreCities from '@/components/(site)/home/exploreCities';
import HeroSection1 from '@/components/(site)/home/hero';
import Properties from '@/components/(site)/home/properties';
import Categories from '@/components/common/categories';
import React from 'react';

const page = () => {
    return (
        <div>
            <HeroSection1/>
            <Categories/>
            <Properties/>
            <ExploreCities/>
        </div>
    );
};

export default page;