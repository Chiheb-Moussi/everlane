import { Meta, StoryObj } from "@storybook/react";
import NavMenu from "./Navmenu";

const meta = {
  title: "components/NavMenu",
  component: NavMenu,
}satisfies Meta<typeof NavMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default:Story={}