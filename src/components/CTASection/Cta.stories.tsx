import type { Meta, StoryObj } from '@storybook/react';

import Cta from './Cta';

const meta = {
    title: 'components/CTASection',
    component: Cta,

} satisfies Meta<typeof Cta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};