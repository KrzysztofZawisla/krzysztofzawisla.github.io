const config = {
  preset: "ts-jest",
  setupFilesAfterEnv: ["jest-extended", "./src/setupTests.ts"],
  testEnvironment: "jsdom",
};

export default config;
