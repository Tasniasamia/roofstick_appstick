import HeaderTitle from '@/components/common/headerTitle';
import React from 'react';
import OurTeam from '../agent/ourTeam';

const OurAgents = () => {
    return (
        <div className="container">
            <div className="lg:mt-[120px] mt-[60px] 2xl:px-0 px-3">
                <HeaderTitle
                    title="Meet Our Amazing Agents"
                    description="Meet our expert agents who bring local knowledge, integrity, and dedication to every deal. They're here to guide you through every step of your real estate journey."
                    customClass3="md:w-[633px] w-[80%]"
                    customClass="items-center text-start"
                />

                <OurTeam />
            </div>
        </div>
    );
};

export default OurAgents;
