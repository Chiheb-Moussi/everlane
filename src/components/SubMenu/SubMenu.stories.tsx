import type { Meta, StoryObj } from '@storybook/react';

import MainMenu from './MainMenu';

const meta = {
    title: 'components/SubMenu',
    component: MainMenu,

} satisfies Meta<typeof MainMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
