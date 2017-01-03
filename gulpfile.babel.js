import gulp from 'gulp';
import babel from 'gulp-babel';
import del from 'del';
import flow from 'gulp-flowtype';
import webpack from 'webpack-stream';
import webpackConfig from './webpack.config.babel';

const paths = {
  allSrcJs: 'src/**/*.js?(x)',
  clientSrc: 'src/client/**/*.js?(x)',
  clientEntryPoint: 'src/client/app.jsx',
  clientBundle: 'dist/client-bundle.js?(.map)',
  webpackFile: 'webpack.config.babel.js',
  gulpFile: 'gulpfile.js',
  libDir: 'lib',
  distDir: 'dist',
};

// Check files
gulp.task('check', () =>
  gulp.src(paths.allSrcJs)
      .pipe(flow({ abort: true }))
);

// Task to clean up all generated files in libDir
gulp.task('clean', () => del([
  paths.libDir,
  paths.clientBundle,
]));

// Building task taking care of transpile the sources
gulp.task('build', ['check', 'clean'], () =>
  gulp.src(paths.allSrcJs)
    .pipe(babel())
    .pipe(gulp.dest(paths.libDir))
);

// Launching task
gulp.task('main', ['build'], () =>
  gulp.src(paths.clientEntryPoint)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(paths.distDir))
);

// Watching change in the repository
gulp.task('watch', () =>
  gulp.watch(paths.allSrcJs, ['main'])
);

gulp.task('default', ['watch', 'main']);
