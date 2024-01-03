import {Section} from "./Menu.ts";

interface SectionsProps {
    data: Section[];
}

const Sections = ({data}: SectionsProps) => {
    return (
        <>
            <div className="w-full  justify-center items-center flex flex-col">
                {data.map((section) => (
                    <div key={section.title} className="flex flex-col">
                        <p className="font-bold">{section.title}</p>
                        {section.links.map((link) => (
                            <div key={link.name}>{link.name}</div>
                        ))}

                    </div>
                ))}
            </div>
        </>
    );
};
export default Sections;
