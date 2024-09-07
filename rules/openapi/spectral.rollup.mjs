import typescript from "@rollup/plugin-typescript";

export default {
  input: "rules/openapi/spectral.ts",
  output: {
    format: "cjs",
    file: "spectral/openapi.js",
  },
  external: ["@stoplight/spectral-functions", "@stoplight/spectral-formats"],
  plugins: [typescript()],
};
