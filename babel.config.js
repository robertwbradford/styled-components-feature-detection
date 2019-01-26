const buildIgnores = ["**/tests/*"];

const buildTargets = {
  browsers: ["last 2 versions"],
  node: "current"
};

const config = {
  env: {
    cjs: {
      presets: [
        ["@babel/preset-env", { targets: buildTargets }],
        "@babel/preset-react"
      ]
    },
    es: {
      presets: [
        ["@babel/preset-env", { targets: buildTargets }],
        "@babel/preset-react"
      ]
    },
    test: {
      presets: ["@babel/preset-env", "@babel/preset-react"]
    }
  }
};

module.exports = config;
