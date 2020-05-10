module.exports = {
  stories: ["../stories/**/*.stories.js"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-storysource",
    "@storybook/addon-knobs",
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
  ],
};
