import { IImage } from "../../models/interface";

const PopularImage: IImage[] = [
  {
    id: "1",
    image: "/popular/image1.png",
    title: "Women’s Sweaters",
  },
  {
    id: "2",
    image: "/popular/image2.png",
    title: "Women’s Bottom",
  },
  {
    id: "3",
    image: "/popular/image3.png",
    title: "Women’s Boots",
  },
  {
    id: "4",
    image: "/popular/image4.png",
    title: "Men’s Best Sellers",
  },
];

const Popular = () => {
  return (
  <div className="w-full flex justify-center">
      <div className="flex w-container flex-col justify-center items-center md:inline-flex md:text-start py-8 lg:px-[150px]  ">
      <h4 className="text-center md:text-start w-full">Popular Categories</h4>

      
        <div className="grid grid-cols-1 gap-5  md:grid-cols-2 lg:grid-cols-4 w-full">
          {PopularImage.map((item) => (
            <div key={item.title} className=" w">
              <img src={item.image} alt={item.title} />
              <p className="underline">{item.title}</p>
            </div>
          ))}
        </div>
     
    </div>
  </div>
  );
};

export default Popular;