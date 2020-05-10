import React from "react";

import Button from "../../src/Button";

export default {
  title: "Button",
  component: Button,
};

export const SimpleButton = () => <Button>Test me</Button>;

SimpleButton.story = {
  name: "simple button",
};
