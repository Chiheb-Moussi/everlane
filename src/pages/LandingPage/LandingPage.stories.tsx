import { Meta, StoryObj } from "@storybook/react";
import LandingPage from "./LandingPage";

const meta = {
    tags: ['autodocs'],
    title: "components/pages/LandingPage",
    component: LandingPage,

}satisfies Meta<typeof LandingPage>;

export default meta

type Story = StoryObj<typeof meta>
export const Default : Story = {}