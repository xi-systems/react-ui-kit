import React from "react";

import LoaderIndicator from "./LoaderIndicator";

export default {
  title: "Components|LoaderIndicator",
  parameters: {
    component: LoaderIndicator,
    componentSubtitle: "Subtitle to our LoaderIndicator...",
  },
};

export const loading = () => <LoaderIndicator />;
export const withSize = () => <LoaderIndicator size={26} />;
