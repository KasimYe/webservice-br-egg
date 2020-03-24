"use strict";

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }

  // config/plugin.js
  validate: {
    enable: true,
    package: "egg-validate"
  }
};
