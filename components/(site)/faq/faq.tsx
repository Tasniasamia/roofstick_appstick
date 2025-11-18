"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

const FAQ = () => {
    const data = [
        {
            question: "What is Roofstick?",
            answer: "Roofstick is an advanced real estate management system designed to streamline property listings, tenant management, rent collection, and overall property operations for agencies and individual landlords."
        },
        {
            question: "How does Roofstick help property owners?",
            answer: "Roofstick helps property owners manage tenants, leases, payments, maintenance requests, and property documents from a single dashboard, making operations faster and more organized."
        },
        {
            question: "Can tenants make online payments?",
            answer: "Yes, tenants can pay rent online through integrated payment gateways, receive payment confirmations instantly, and check their rent history anytime."
        },
        {
            question: "Does Roofstick support multiple properties?",
            answer: "Absolutely. Roofstick is designed for landlords, agencies, and companies managing multiple properties, allowing you to add unlimited buildings, units, and tenants."
        },
        {
            question: "Is my data secure on Roofstick?",
            answer: "Yes. Roofstick uses industry-standard encryption, secure authentication, and regular backups to protect your data from unauthorized access."
        },
        {
            question: "Can I track maintenance requests?",
            answer: "Yes, tenants can submit maintenance requests, and property managers can track progress, assign technicians, and update request status in real-time."
        },
        {
            question: "Do you provide customer support?",
            answer: "Yes, we offer 24/7 customer support through chat, email, and phone to help you with setup, onboarding, and troubleshooting."
        },
        {
            question: "Does Roofstick work on mobile devices?",
            answer: "Yes. Roofstick is fully responsive and works on desktops, tablets, and mobile devices, ensuring a smooth experience anywhere."
        }
    ];
    
    const [openIndex, setOpenIndex] = useState<number|null>(0);
    const contentRefs = useRef<(HTMLElement | null)[]>([]);
    const [contentHeights, setContentHeights] = useState<number[]>([]);

 
    useEffect(() => {
        if (!data || data.length === 0) return;
    
        contentRefs.current = contentRefs.current.slice(0, data.length) as (HTMLElement | null)[];
    
        const heights = data.map((_, index) => {
            const el = contentRefs.current[index];
            return el ? el.scrollHeight : 0;
        });
    
        setContentHeights(heights);
    }, [data]);
    ;

    const toggleFAQ = (index:number) => {
        if (index === openIndex) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };
    return (
        <div className='lg:mt-[120px] mt-[60px] 2xl:px-0 px-3'>
            <div className='container grid lg:grid-cols-3 grid-cols-1 gap-x-6'>
             <div className='col-span-2'>
                      <div className=' flex flex-col gap-6'>
                            {data?.map((item, index) => {
                                const isOpen = openIndex === index;

                                return (
                                    <div
                                        key={index}
                                        style={{
                                            boxShadow:isOpen?"0 0 40px 0 var(--100, #CDFFFE)":""
                                        }}
                                        className={`faq py-2 rounded-xl border overflow-hidden  text-textMain shadow-md ${
                                            isOpen
                                                ? 'faq border-[#00ACC1] bg-[#EFF6F3]'
                                                : 'faq border-[#E8EAE8] bg-white'
                                        }`}
                                    >
                            <div
                                            className={`flex cursor-pointer items-center justify-between gap-5 px-6 py-4 transition-colors duration-300 sm:gap-0 md:items-center `}
                                            onClick={() => toggleFAQ(index)}
                                           
                                        >
                                            <p className='font-roboto text-lg  text-[#2D2E2E] font-semibold'>
                                                {item.question}
                                            </p>
                                            <div
                                                className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                                            >
                                                <FaChevronDown className='h-6 min-h-6 w-6 min-w-6 text-secondary' />
                                            </div>
                                        </div>

                                        <div
                                            className='overflow-hidden transition-all duration-500 ease-in-out'
                                            style={{
                                                maxHeight: isOpen
                                                    ? `${contentHeights[index]}px`
                                                    : '0px',
                                                opacity: isOpen ? 1 : 0,
                                                transform: isOpen
                                                    ? 'translateY(0)'
                                                    : 'translateY(-10px)',
                                            }}
                                        >
                                            <div
                                        ref={(el) => {
                                            contentRefs.current[index] = el;
                                        }}
                                        
                                                className='px-6'
                                            >
                                                <div className='h-[1px] w-full' />
                                                <p className='py-4 font-roboto text-base text-textBody'>
                                                    {item.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
             </div>
             <div>
                <Image src="/faq.png" width={419} height={630} alt="image" className='w-full h-[630px] object-center rounded-xl'/>
             </div>
            </div>
        </div>
    );
};

export default FAQ;