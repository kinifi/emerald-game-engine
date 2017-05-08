var gulp = require("gulp"),
    ts = require("gulp-typescript")
	del = require('del');

{
	var tsProject = ts.createProject('./tsconfig.json');
	var bin = './bin';

	gulp.task("ts", function()
	{
		return tsProject.src()
			.pipe(tsProject())
			.pipe(gulp.dest(bin));
	});

	gulp.task("clean", function()
	{
		del([bin]);
	})

	gulp.task("default", ["clean"], function()
	{
		return gulp.start(["ts"]);
	});
}
