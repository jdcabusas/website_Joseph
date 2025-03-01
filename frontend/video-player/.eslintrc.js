// .eslintrc.js
module.exports = {
  rules: {
    // other rules
    "no-unused-vars": [
      "error",
      { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }
    ],
  },
  // Custom flag to treat warnings as errors
  treatWarningsAsErrors: process.env.CI ? false : true,
};

