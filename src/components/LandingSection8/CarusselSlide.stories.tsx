import { Meta, StoryObj } from "@storybook/react";
import CarusselSlide from "./CarusselSlide";

const meta = {
  title: "components/CarusselSlide",
  component: CarusselSlide,
}satisfies Meta <typeof CarusselSlide>;

export default meta

type Story = StoryObj<typeof CarusselSlide>
export const Default:Story={}
