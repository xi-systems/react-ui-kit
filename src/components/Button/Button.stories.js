import React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import Button from "./Button";
import Icon from "../Icon";

export default {
  title: "Components|Button",
  parameters: {
    component: Button,
    componentSubtitle: "Subtitle to our button component...",
  },
};

export const defaultButton = () => (
  <div style={{ display: "block" }}>
    <Button loading={boolean("Loading")} fullWidth={boolean("fullWidth")}>
      Test me
    </Button>
  </div>
);

export const fullWidth = () => (
  <div style={{ display: "block" }}>
    <Button fullWidth={boolean("fullWidth")}>Test me</Button>
  </div>
);

export const withIcon = () => (
  <div style={{ display: "block" }}>
    <Button icon={() => <Icon size={18} icon="search" />}>Test me</Button>
  </div>
);

export const inlineButtons = () => (
  <div style={{display: 'flex'}}>
    <Button icon={() => <Icon size={0} icon="search" />}>Test me</Button>
    <Button >Test me</Button>
    <Button >Test me</Button>
    <Button icon={() => <Icon size={18} icon="search" />}>Test me</Button>
  </div>
);

export const Loading = () => <Button loading={true}>Test me</Button>;

Loading.story = {
  parameters: { docs: { storyDescription: "4 variants are supported." } },
};
