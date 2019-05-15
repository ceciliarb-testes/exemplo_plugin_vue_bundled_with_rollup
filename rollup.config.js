import vue from "rollup-plugin-vue";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";

export default {
  input: "src/index.js",
  external: ["moment", "vue", "vue-template-compiler"],
  output: [
    {
      format: "esm",
      file: "dist/index.esm.js"
    },
    {
      format: "cjs",
      file: "dist/index.cjs.js"
    },
    {
      format: "iife",
      file: "dist/index.js",
      name: "plugin_teste_3"
    },
    {
      format: "umd",
      file: "dist/index.umd.js",
      name: "plugin_teste_3"
    }
  ],
  plugins: [commonjs(), vue(), resolve()]
};
