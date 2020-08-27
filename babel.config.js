export const presets = ["@babel/env", "@babel/react"];
export const env = {
  test: {
    plugins: ["@babel/plugin-transform-runtime"],
  },
};
