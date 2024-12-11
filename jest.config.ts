import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  testPathIgnorePatterns: ["node_modules", "build"],
  setupFilesAfterEnv: ["./setupTests.ts"],
  roots: ["<rootDir>/src"],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
    "test-utils/(.*)": "<rootDir>/test-utils/$1",
  },
};

export default config;
