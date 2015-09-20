/**
 * Created by leandro on 02/02/15.
 */
(function () {
  "use strict";

  var gulp = require("gulp");
  var sass = require("gulp-sass");

  /**
   * Stylesheets packages
   * @type {String}
   */
  var DEV_PATH  = "client/assets/stylesheets/main.scss";
  var DIST_PATH = "client/assets/stylesheets/";

  //  Task for sass compiler
  gulp.task("sass", function () {
    return gulp.src(DEV_PATH)
      .pipe(sass())
      .pipe(gulp.dest(DIST_PATH));
  });

  //  Task default
  gulp.task("default", ["sass"], function () {
    gulp.watch("client/assets/stylesheets/**/*.scss", ["sass"]);
  });

})();
