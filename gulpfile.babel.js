import gulp from 'gulp';
import babel from 'gulp-babel';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import del from 'del';
import flow from 'gulp-flowtype';
import webpack from 'webpack-stream';
import webpackConfig from './webpack.config.babel';

const paths = {
  allSrcJs: 'src/**/*.js?(x)',
  allSrcSass: 'sass/**/*.scss',
  clientSrc: 'src/client/**/*.js?(x)',
  clientEntryPoint: 'src/client/App.jsx',
  clientBundle: 'dist/client-bundle.js?(.map)',
  webpackFile: 'webpack.config.babel.js',
  gulpFile: 'gulpfile.js',
  libDir: 'lib',
  libsDir: 'libs',
  distDir: 'dist',
  distLibsDir: 'dist/libs/**/*',
  distCssDir: 'dist/css',
};

const libs = {
  manaCost: {
    dir: 'mana-cost',
    src: [
      'css/mana-cost.css',
      'images/mana.svg',
    ],
  }
}

// Check files
gulp.task('check', () =>
  gulp.src(paths.allSrcJs)
      .pipe(flow({ abort: true }))
);

// Task to clean up all generated files in libDir
gulp.task('clean', () => {
  return del([
  paths.libDir,
  paths.clientBundle,
  paths.distCssDir,
  paths.distLibsDir,
])});

// Building task taking care of transpiling the sources
gulp.task('build', ['check', 'clean'], () =>
  gulp.src(paths.allSrcJs)
    .pipe(babel())
    .pipe(gulp.dest(paths.libDir))
);

gulp.task('sass', ['clean'], () =>
  gulp.src(paths.allSrcSass)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.distCssDir))
);

// Copy libs into dist
gulp.task('copylibs', ['clean'], () => {
  // Create array of paths using this format: 'libs/{dir}/{src}'
  const files = Object.keys(libs).reduce((arr, lib) => (
    arr.concat(libs[lib].src.map(src => [paths.libsDir, libs[lib].dir, src].join('/')))
  ), []);
  return files.map(file => gulp.src(file)
    .pipe(gulp.dest([paths.distDir, file.substring(0, file.lastIndexOf('/'))].join('/')))
  );
});

// Bundling in webpack task
gulp.task('main', ['build', 'sass', 'copylibs'], () =>
  gulp.src(paths.clientEntryPoint)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(paths.distDir))
);

// Watching change in the repository
gulp.task('watch', () =>
  gulp.watch([paths.allSrcJs, paths.allSrcSass], ['main'])
);

gulp.task('default', ['watch', 'main']);
