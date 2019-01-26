const buildIgnores = ["**/tests/*"];

const buildTargets = {
  browsers: ["last 2 versions"],
  node: "current"
};

const config = {
  env: {
    cjs: {
      ignore: buildIgnores,
      presets: [
        ["@babel/preset-env", { targets: buildTargets }],
        "@babel/preset-react"
      ]
    },
    es: {
      ignore: buildIgnores,
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
