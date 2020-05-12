import React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import Button from "../../src/Button";

export default {
  title: "Components|Button",
  parameters: {
    component: Button,
    componentSubtitle: "Subtitle to our button component...",
  },
};

export const defaultButton = () => (
  <div style={{display: 'block'}}>
    <Button
      loading={boolean("Loading")}
      fullWidth={boolean("fullWidth")}
    >Test me</Button>
  </div>
);

export const fullWidth = () => (
  <div style={{display: 'block'}}>
    <Button fullWidth={boolean("fullWidth")}>Test me</Button>
  </div>
);



export const Loading = () => <Button loading={true}>Test me</Button>;

Loading.story = {
  parameters: { docs: { storyDescription: "4 variants are supported." } },
};
