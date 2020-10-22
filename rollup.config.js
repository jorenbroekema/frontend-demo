import copy from "rollup-plugin-copy";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
  input: "./index.js",
  output: {
    dir: "dist",
    format: "es",
  },
  plugins: [
    copy({
      targets: [
        { src: "./index.html", dest: "./dist" },
        { src: "./style.css", dest: "./dist" },
        { src: "./favicon.ico", dest: "./dist" },
      ],
    }),
    nodeResolve(),
    terser({
      output: {
        comments: false,
      },
    }),
  ],
};
