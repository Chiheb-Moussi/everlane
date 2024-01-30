import { Meta, StoryObj } from "@storybook/react";
import AboutSection3 from "./AboutSection3";

const meta = {

  title: "components/AboutSection3",
  component: AboutSection3,

}satisfies Meta<typeof AboutSection3>;

export default meta

type Story = StoryObj<typeof meta>
export const Default : Story = {}