import ProductFavouriteItem from "./ProductFavouriteItem.tsx";
import Slider, {CarouselItem} from "../Slider/Slider.tsx";

const ProductFavourites = () => {
    const items: CarouselItem[] = [
        {
            id: '1',
            component: <ProductFavouriteItem
                image="/products/product1.png"
                title="Waffle Long-Sleeve Crew"
                price="60$"
                description="Bone"
            />
        },
        {
            id: '2',
            component: <ProductFavouriteItem
                image="/products/product2.png"
                title="Waffle Long-Sleeve Crew"
                price="60$"
                description="Bone"
            />
        },
        {
            id: '3',
            component: <ProductFavouriteItem
                image="/products/product3.png"
                title="Waffle Long-Sleeve Crew"
                price="60$"
                description="Bone"
            />
        },
        {
            id: '4',
            component: <ProductFavouriteItem
                image="/products/product4.png"
                title="Waffle Long-Sleeve Crew"
                price="60$"
                description="Bone"
            />
        },
        {
            id: '5',
            component: <ProductFavouriteItem
                image="/products/product5.png"
                title="Waffle Long-Sleeve Crew"
                price="60$"
                description="Bone"
            />
        },
        {
            id: '6',
            component: <ProductFavouriteItem
                image="/products/product5.png"
                title="Waffle Long-Sleeve Crew"
                price="60$"
                description="Bone"
            />
        },
        {
            id: '7',
            component: <ProductFavouriteItem
                image="/products/product5.png"
                title="Waffle Long-Sleeve Crew"
                price="60$"
                description="Bone"
            />
        },
    ]
    return (
        <div className="pb-10">
            <div className="flex flex-col gap-8">
                <div
                    className="text-center text-black text-2xl font-normal font-['Maison Neue'] leading-loose">Everlane
                    Favorites
                </div>
                <div
                    className="text-center text-black text-base font-normal font-['Maison Neue'] leading-normal tracking-wide">Beautifully
                    Functional. Purposefully Designed. Consciously Crafted.
                </div>
                <Slider items={items} />
            </div>
        </div>
    )
}
export default ProductFavourites;