import { useState } from "react";
import Product from "../../data/Data.json";
import { IProduct } from "../../models/interface";




const CategorySection = () => {
  const [data,] = useState<IProduct[]>(Product.Product);

  return (
    <div className="w-full h-96 px-10 py-24 flex-col justify-start items-center gap-6 inline-flex">
      <div className="self-stretch text-center text-neutral-800 text-2xl font-normal font-['Maison Neue'] leading-loose">
        Shop by Category
      </div>
      <div className="sm:flex sm:flex-wrap sm:gap-2 ">
        {data.map((product) => (
          <div key={product.id} className="grow shrink basis-0 flex flex-col justify-start items-center gap-3 ">
            <img className="w-52 h-64" src={product.imagePath} />
            <div className="self-stretch text-center text-neutral-800 text-sm font-normal font-['Maison Neue'] underline leading-tight tracking-wider">
              {product.category}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;


