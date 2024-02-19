
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
        <div className="w-full md:w-[220px] flex-shrink-1 border-b border-neutral-900  md:border-none">
            <AccordionSection title={title} open={open} onToggle={() => setOpen(!open)}>
                <ul className={twMerge("my-8 list-none md:block ")}>

                    {title === 'Account' && (
                        <>
                            <li>
                                <a className="text-neutral-500 font-normal  ">Log In</a>
                            </li>
                            <li>
                                <a className="text-neutral-500 font-normal">Sign Up</a>
                            </li>
                            <li>
                                <a className="text-neutral-500 font-normal">Redeem a Gift Card</a>
                            </li>
                        </>
                    )}
                    {title === 'Company' && (
                        <>
                            <li>
                                <a className="text-neutral-500 font-normal">About</a>
                            </li>
                            <li>
                                <a className="text-neutral-500 font-normal">Environmental Initiatives</a>
                            </li>
                            <li>
                                <a className="text-neutral-500 font-normal">Factories</a>
                            </li>
                            <li>
                                <a className="text-neutral-500 font-normal">DEI</a>
                            </li>
                            <li>
                                <a className="text-neutral-500 font-normal">Careers</a>
                            </li>
                            <li>
                                <a className="text-neutral-500 font-normal">International</a>
                            </li>
                            <li>
                                <a className="text-neutral-500 font-normal">Accessibility</a>
                            </li>

                        </>
                    )}
                    {title === 'Get Help' && (
                        <>
                            <li>
                                <a className="text-neutral-500 font-normal">Help Center</a>
                            </li>
                            <li>
                                <a className="text-neutral-500 font-normal">Return Policy</a>
                            </li>
                            <li>
                                <a className="text-neutral-500 font-normal">Shipping Info</a>
                            </li>
                            <li>
                                <a className="text-neutral-500 font-normal">Bulk Orders</a>
                            </li>

                        </>
                    )}
                    {title === 'Connect' && (
                        <>
                            <li>
                                <a className="text-neutral-500 font-normal">Facebook</a>
                            </li>
                            <li>
                                <a className="text-neutral-500 font-normal">Instagram</a>
                            </li>
                            <li>
                                <a className="text-neutral-500 font-normal">Twitter</a>
                            </li>
                            <li>
                                <a className="text-neutral-500 font-normal">Affiliates</a>
                            </li>
                            <li>
                                <a className="text-neutral-500 font-normal">Our Stores</a>
                            </li>

                        </>
                    )}
                </ul>
            </AccordionSection>
        </div>
    );
};

export default FooterAccordion;
