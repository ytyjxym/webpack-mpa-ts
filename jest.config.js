

module.exports = {

  clearMocks: true,

  coverageDirectory: "coverage",

  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  roots: [
    "<rootDir>"
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/fileMock.js",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy"
  },
  testMatch: [
    "**/tests/**/*.[jt]s?(x)",
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],

  testPathIgnorePatterns: [
    "/node_modules/"
  ],

  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/"
  ],
};
