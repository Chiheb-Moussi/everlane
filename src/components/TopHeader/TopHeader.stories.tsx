import type { Meta, StoryObj } from '@storybook/react';

import TopHeader from './TopHeader';
 
const meta = {
  title: 'componets/TopHeader',
  component: TopHeader,
  
} satisfies Meta<typeof TopHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
