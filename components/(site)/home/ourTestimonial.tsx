import TestimonialCard from '@/components/common/card/testimonialCard';
import HeaderTitle from '@/components/common/headerTitle';
import React from 'react';

const OurTestimonial = () => {
    return (
        <div className="lg:pt-[120px] pt-[60px] 2xl:px-0 px-3">
        <div className="container">
          <HeaderTitle
            title={"What our Client Says About us"}
            description={
              "The platform provided a seamless home-buying experience with exceptional professionalism.Their verified listings and expert guidance made the entire process efficient and stress-free."
            }
            customClass="items-center text-center  "
            customClass3="lg:w-[662px] md:w-[427px] w-[80%]"
            customClass2='md:w-[460px] w-full'
          />
          </div>
          <div className='mt-10 grid lg:grid-cols-3  grid-cols-1 place-items-center'>
            <TestimonialCard/>
          </div>
        </div>
    );
};

export default OurTestimonial;