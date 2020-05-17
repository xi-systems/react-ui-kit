import React from "react";

import Divider from "./Divider";

export default {
  title: "Components|Divider",
  parameters: {
    component: Divider,
    componentSubtitle: "Thin divider",
  },
};

export const defaultDivider = () => <Divider />;
export const withColor = () => <Divider color="red"/>;
