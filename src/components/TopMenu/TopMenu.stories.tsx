import { StoryObj, Meta } from "@storybook/react";
import TopMenu from "./TopMenu";

const meta = {
  title: "components/TopMenu",
  component: TopMenu,
}satisfies Meta <typeof TopMenu>;

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {};
