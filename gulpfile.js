var gulp = require("gulp"),
    ts = require("gulp-typescript")
	del = require('del')
	fs = require('fs');

{
	var tsProject = ts.createProject('./tsconfig.json');
	var bin = './bin';

	gulp.task("build", function()
	{
		return tsProject.src()
			.pipe(tsProject())
			.pipe(gulp.dest(bin));
	});

	gulp.task("build-testing-example", function()
	{
		return gulp.src('./example/testing/*.ts')
        .pipe(ts({
            out: 'app.js'
        }))
        .pipe(gulp.dest('./example/testing'));
	});
 


	gulp.task("clean", function()
	{
		del([bin]);
	});

	gulp.task("default", ["clean"], function()
	{
		return gulp.start(["ts"]);
	});
}
