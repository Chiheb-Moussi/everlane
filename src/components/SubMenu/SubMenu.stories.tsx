import type { Meta, StoryObj } from '@storybook/react';

import SubMenu from './SubMenu';

const meta = {
    title: 'componets/SubMenu',
    component: SubMenu,

} satisfies Meta<typeof SubMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
