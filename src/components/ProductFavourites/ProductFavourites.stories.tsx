import type { Meta, StoryObj } from '@storybook/react';

import ProductFavourites from './ProductFavourites';

const meta = {
    title: 'components/ProductFavourites',
    component: ProductFavourites,

} satisfies Meta<typeof ProductFavourites>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
