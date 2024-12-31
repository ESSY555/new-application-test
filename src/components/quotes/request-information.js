import React, { useState } from 'react';

import Home from '../dashboard';
import Attachment from './attachment';
import Details from './provide-details';
import Review from './review';


const Information = () => {
    const [activeStep, setActiveStep] = useState(1);

    const steps = [
        { id: 1, p1: 'Request Information', p2: 'Provide Details about RFQ', content: <Details /> },
        { id: 2, p3: 'Terms and Attachments', p4: 'Payment and delivery terms', content: <Attachment /> },
        { id: 3, p5: 'Review', p6: 'Confirm all information provided', content: <Review /> },
    ];

    const handleStepClick = (stepId) => {
        setActiveStep(stepId);
    };

    return (
        <div className='md:pl-[300px] md:pr-8 p-5'>
            <div><p className='pt-12'><span className='text-[#175CFF] '>Quotes</span> / Quote Response</p></div>

            <div className="mt-10">

                <div className="flex flex-col border p-8 rounded-lg sm:flex-row items-center sm:items-start justify-center sm:justify-between mb-6 flex-wrap">
                    {steps.map((step) => (
                        <div key={step.id} className="flex items-center mb-4 sm:mb-0">
                            <div className="flex flex-col md:flex-row gap-2 items-center ">
                                <button
                                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold transition-all
                                ${activeStep === step.id
                                            ? 'bg-blue-500'
                                            : activeStep > step.id
                                            ? 'bg-[#E7F6EC]'
                                                : 'bg-gray-300'
                                        }`}
                                    onClick={() => handleStepClick(step.id)}
                                >
                                    {step.id}
                                </button>

                                <div className="mt-2 text-sm font-medium text-gray-700">
                                    {step.id === 1 && (
                                        <>
                                            <p className='font-bold'>{step.p1}</p>
                                            <p className='text-[13px]'>{step.p2}</p>
                                        </>
                                    )}
                                    {step.id === 2 && (
                                        <>
                                            <p className='font-bold'>{step.p3}</p>
                                            <p className='text-[13px]'>{step.p4}</p>
                                        </>
                                    )}
                                    {step.id === 3 && (
                                        <>
                                            <p className='font-bold'>{step.p5}</p>
                                            <p className='text-[13px]'>{step.p6}</p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Content Display */}
                <div className="mt-4">
                    <p>
                        {typeof steps.find((step) => step.id === activeStep)?.content === 'string'
                            ? <p className="text-lg text-gray-800">{steps.find((step) => step.id === activeStep)?.content}</p>
                            : steps.find((step) => step.id === activeStep)?.content
                        }
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Information;
