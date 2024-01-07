import {useState} from "react";
import Sections from "./Sections";
import {Section, SubCategorie} from "./Menu.ts";

interface SubCategoriesProps {
    data: SubCategorie[];
}

const SubCategories = ({data}: SubCategoriesProps) => {
    const [section, setSection] = useState<Section[]>([]);
    return <>
        <div className="flex">
            {data.map(item => (<button key={item.name} onMouseEnter={() => setSection(item.section ?? [])}
                                       className="hover:text-black text-neutral-500 py-5 px-4"
            > {item.name} </button>))}

        </div>
        {section.length > 0 &&
            <Sections data={section}/>
        }
    </>
}
export default SubCategories;