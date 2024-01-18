import type { Meta, StoryObj } from '@storybook/react';

import Slider from './Slider';
import ProductFavouriteItem from "../ProductFavourites/ProductFavouriteItem.tsx";

const meta = {
    title: 'components/Slider',
    component: Slider,

} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        items: [
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
    }
};
