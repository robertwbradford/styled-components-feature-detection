const buildTargets = {
  browsers: ["last 2 versions"],
  node: "current"
};

const config = {
  env: {
    cjs: {
      presets: [["@babel/preset-env", { targets: buildTargets }], "react-app"]
    },
    es: {
      presets: [["@babel/preset-env", { targets: buildTargets }], "react-app"]
    },
    test: {
      presets: ["@babel/preset-env", "react-app"]
    }
  }
};

module.exports = config;
