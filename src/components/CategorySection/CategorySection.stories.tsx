import { Meta, StoryObj } from "@storybook/react";
import CategorySection from "./CategorySection";

const meta = {

  title: "components/CategorySection",
  component: CategorySection,

}satisfies Meta<typeof CategorySection>;

export default meta

type Story = StoryObj<typeof meta>
export const Default : Story = {}