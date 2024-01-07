import {LinkType, Section} from "./Menu.ts";

interface SectionsProps {
    data: Section[];
}

const Sections = ({data}: SectionsProps) => {

    return (
        <>
            <div className="flex gap-6">
                {data.map((section) => (
                    <div key={section.title} className="flex flex-col w-60 gap-4">
                        {section.type !== LinkType.IMG && <><p
                            className="font-bold text-xs uppercase text-neutral-400">{section.title}</p>
                            {section.links && section.links.map((link) => (
                                <div className="text-sm text-neutral-800 capitalize" key={link.name}>{link.name}</div>
                            ))}
                        </>}
                        {section.type === LinkType.IMG && <p>
                            <div>
                                <img src={`/src/images/${section.image}`} alt=""/>
                            </div>

                        </p>}
                    </div>
                ))}
            </div>
        </>
    );
};
export default Sections;
