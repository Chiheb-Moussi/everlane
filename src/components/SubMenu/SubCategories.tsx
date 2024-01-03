import{useState} from "react";
import Sections from "./Sections";
import {Section, SubCategorie} from "./Menu.ts";

interface SubCategoriesProps {
    data: SubCategorie[];
}
const SubCategories =({data}:SubCategoriesProps) => {
const [section,setSection] = useState<Section[]>([]);
return <>
    <div className="w-full  justify-center items-center flex flex-col">
        {data.map(item => (<button onMouseEnter={ () => setSection(item.section ?? [] )}
                                   onMouseLeave = {() => setSection([])}> {item.name} </button>))}

    </div>
    {section.length > 0 &&
    <Sections data ={section} />
    }


</>
}
export default SubCategories ;