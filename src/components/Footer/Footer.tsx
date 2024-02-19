
import FooterAccordion from './FooterAccordion';

const Footer = () => {


    return (
        <footer className="bg-neutral-50 text-left px-10 py-10  lg:text-left">
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:mr-4 w-full md:w-auto">
                <FooterAccordion title="Account"/>
                <FooterAccordion title="Company"/>
                <FooterAccordion title="Get Help"/>
                <FooterAccordion title="Connect"/>

                <div className="flex-grow min-w-[300px] md:flex-shrink-0">
                    <p className="font-bold text-neutral-900 w-full">
                        Sign up to receive 10% off your first order.
                    </p>
                    <label>
                        <input
                            className="my-10 p-2 w-full"
                            type="email"
                            placeholder="Email Address"
                        />
                    </label>
                </div>
            </div>
            <div className="text-center mb-1 flex flex-nowrap justify-center w-full">
                <a className="text-neutral-500 text-xs px-2 shrink-0">Privacy Policy</a>
                <a className="text-neutral-500 text-xs px-2 shrink-0">Terms of Service</a>
                <a className="text-neutral-500 text-xs px-2 shrink-0">Do Not Sell or Share My Personal Information</a>
                <a className="text-neutral-500 text-xs px-2 shrink-0">CA Supply Chain Transparency</a>
                <a className="text-neutral-500 text-xs px-2 shrink-0">Vendor Code of Conduct</a>
                <a className="text-neutral-500 text-xs px-2 shrink-0">Sitemap Pages</a>
                <a className="text-neutral-500 text-xs px-2 shrink-0">Sitemap Products</a>
            </div>


            <div className="p-4 text-center text-neutral-700">
                © 2024 All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
