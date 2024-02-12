
import React, {useEffect, useState} from 'react';
import AccordionSection from './AccordionSection';
import { twMerge } from 'tailwind-merge';
import { useWindowSize } from 'usehooks-ts'
interface FooterAccordionProps {
    title: string;
}

const FooterAccordion: React.FC<FooterAccordionProps> = ({ title }) => {
    const [open, setOpen] = useState(false);
    const { width } = useWindowSize()
    useEffect(()=>{
       if (width >= 768) {
           setOpen(true)
       }else {
           setOpen(false)
       }
    },[width])
    return (
        <div className="w-full md:w-[220px] flex-shrink-1 border-b border-neutral-700 md:border-none">
            <AccordionSection title={title} open={open} onToggle={() => setOpen(!open)}>
                <ul className={twMerge("mb-0 list-none md:block ")}>

                    {title === 'Account' && (
                        <>
                            <li>
                                <a className="text-neutral-500">Log In</a>
                            </li>
                            <li>
                                <a className="text-neutral-500">Sign Up</a>
                            </li>
                            <li>
                                <a className="text-neutral-500">Redeem a Gift Card</a>
                            </li>
                        </>
                    )}
                    {title === 'Company' && (
                        <>
                            <li>
                                <a className="text-neutral-500">About</a>
                            </li>
                            <li>
                                <a className="text-neutral-500">Environmental Initiatives</a>
                            </li>
                            <li>
                                <a className="text-neutral-500">Factories</a>
                            </li>
                            <li>
                                <a className="text-neutral-500">DEI</a>
                            </li>
                            <li>
                                <a className="text-neutral-500">Careers</a>
                            </li>
                            <li>
                                <a className="text-neutral-500">International</a>
                            </li>
                            <li>
                                <a className="text-neutral-500">Accessibility</a>
                            </li>

                        </>
                    )}
                    {title === 'Get Help' && (
                        <>
                            <li>
                                <a className="text-neutral-500">Help Center</a>
                            </li>
                            <li>
                                <a className="text-neutral-500">Return Policy</a>
                            </li>
                            <li>
                                <a className="text-neutral-500">Shipping Info</a>
                            </li>
                            <li>
                                <a className="text-neutral-500">Bulk Orders</a>
                            </li>

                        </>
                    )}
                    {title === 'Connect' && (
                        <>
                            <li>
                                <a className="text-neutral-500">Facebook</a>
                            </li>
                            <li>
                                <a className="text-neutral-500">Instagram</a>
                            </li>
                            <li>
                                <a className="text-neutral-500">Twitter</a>
                            </li>
                            <li>
                                <a className="text-neutral-500">Affiliates</a>
                            </li>
                            <li>
                                <a className="text-neutral-500">Our Stores</a>
                            </li>

                        </>
                    )}
                </ul>
            </AccordionSection>
        </div>
    );
};

export default FooterAccordion;
