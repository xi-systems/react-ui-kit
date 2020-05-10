import React from "react";
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Button from "../../src/Button";

export default {
  title: "Components|Button",
  component: Button,
};

export const SimpleButton = () => <Button loading={boolean('Loading')}>Test me</Button>;

export const Loading = () => <Button loading={true}>Test me</Button>

Loading.story = {
  decorators: [withKnobs]
}
