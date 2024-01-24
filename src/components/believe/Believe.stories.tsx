import { Meta, StoryObj } from "@storybook/react";
import Believe from "./Believe";

const meta = {

  title: "components/Believe",
  component: Believe,

}satisfies Meta<typeof Believe>;

export default meta

type Story = StoryObj<typeof meta>
export const Default : Story = {}