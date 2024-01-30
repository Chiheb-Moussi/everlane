import { Meta, StoryObj } from "@storybook/react";
import EventsSection from "./EventsSection";

const meta = {
  title: "components/EventsSection",
  component: EventsSection,
}satisfies Meta<typeof EventsSection>

export default meta

type Story = StoryObj<typeof meta>
export const Default:Story={}
