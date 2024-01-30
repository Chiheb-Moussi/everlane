import { Meta, StoryObj } from "@storybook/react";
import AboutSection2 from "./AboutSection2";

const meta = {

  title: "components/AboutSection2",
  component: AboutSection2,

}satisfies Meta<typeof AboutSection2>;

export default meta

type Story = StoryObj<typeof meta>
export const Default : Story = {}