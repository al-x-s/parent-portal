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
};
