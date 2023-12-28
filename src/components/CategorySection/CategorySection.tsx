import { useState } from "react";
import Product from "../../data/Data.json";

interface IProduct {
  id: number;
  imagePath: string;
  category: string;
}

const CategorySection = () => {
  const [data,] = useState<IProduct[]>(Product.Product);

  return (
    <div className="w-full h-96 px-10 py-24 flex-col justify-start items-center gap-6 inline-flex">
      <div className="self-stretch text-center text-neutral-800 text-2xl font-normal font-['Maison Neue'] leading-loose">
        Shop by Category
      </div>
      <div className="self-stretch justify-start items-start gap-2 inline-flex">
        {data.map((product) => (
          <div key={product.id} className="grow shrink basis-0 flex-col justify-start items-center gap-3 inline-flex">
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


