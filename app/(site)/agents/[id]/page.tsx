import AgentDetails from '@/components/(site)/agent/agentDetails';
import Banner from '@/components/common/banner';
import React from 'react';

const page = () => {
    return (
        <div>
            <Banner routeName='Agent Details'/>
            <AgentDetails/>
       </div>
    );
};

export default page;