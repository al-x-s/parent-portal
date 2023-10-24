module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  coverageThreshold: {
    global: {
      lines: 80,
    },
  },
  //   setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};
