import React, { useState } from 'react'

const Colapsable = ({ open, children, title }) => {

    const [isOpen, setIsOpen] = useState(open);

    const handleOpening = () => {
        setIsOpen(!isOpen);
        console.log('uspeo');
    };

    return (
        <div data-accordion="collapse" className='w-full'>
            <h2 id="accordion-collapse-heading-1">
                <button onClick={handleOpening} type="button" className={`
                flex items-center justify-between w-full p-5 font-medium text-left
                 text-gray-500 border-2 border-gray-200 ${isOpen ? 'rounded-t-md' : 'rounded-md'} 
                 hover:bg-gray-100`} 
                 data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                    <p>{title}</p>
                    <svg data-accordion-icon className={`w-6 h-6 shrink-0 ${isOpen ? 'rotate-180' : 'rotate-0'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-1" className={`${isOpen ? '' : ' hidden'}`} aria-labelledby="accordion-collapse-heading-1">
                <div className="px-10 py-5 border-2 border-t-0 border-gray-200 rounded-b-md ">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Colapsable