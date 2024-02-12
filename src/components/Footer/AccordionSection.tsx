import React, { ReactNode } from 'react';
import PlusSvgIcon from './PlusSvg';


interface AccordionSectionProps {
    title: string;
    open: boolean;
    onToggle: () => void;
    children: ReactNode;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({ title, open, onToggle, children }) => {
    return (
        <div className="w-full mb-2.5 font-bold text-neutral-700 cursor-pointer md:cursor-auto md:pointer-events-none">
            <button onClick={onToggle} className="flex justify-between items-center w-full">
                <span>{title}</span>
                <PlusSvgIcon className={`md:hidden w-4 transform ${open ? 'rotate-45' : ''}`} />
                {/*{open ? (<span>-</span>) : (<span>+</span>)}*/}
            </button>
            {open && children}
        </div>
    );
};

export default AccordionSection;
