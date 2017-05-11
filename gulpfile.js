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

	gulp.task("clean", function()
	{
		del([bin]);
		var dir = './bin';
		if (!fs.exists(dir)){
			fs.mkdir(dir);
		}
	});

	gulp.task("create-bin", function()
	{
		var dir = './bin';
		if (!fs.exists(dir)){
			fs.mkdir(dir);
		}
	});

	gulp.task("default", ["clean"], function()
	{
		return gulp.start(["ts"]);
	});
}
