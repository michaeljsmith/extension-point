var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");

gulp.task("default", function () {
  return gulp.src(["src/**/*.js", "!src/**/*.test.js"])
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("lib"));
});

