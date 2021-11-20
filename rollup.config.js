export default {
  input: "src/main.js",
  output: [
    {
      file: "dist/cjs/bundle.js",
      format: "cjs",
    },
    {
      file: "dist/esm/bundle.js",
      format: "es",
    },
  ],
};
