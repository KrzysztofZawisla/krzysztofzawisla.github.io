import path from "path";

const config = {
  preset: "ts-jest",
  setupFilesAfterEnv: ["jest-extended", "./src/setupTests.ts"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@root(.*)$": path.join(__dirname, "src"),
  },
};

export default config;
