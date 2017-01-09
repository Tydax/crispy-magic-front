import gulp from 'gulp';
import babel from 'gulp-babel';
import del from 'del';
import flow from 'gulp-flowtype';
import webpack from 'webpack-stream';
import webpackConfig from './webpack.config.babel';

const paths = {
  allSrcJs: 'src/**/*.js?(x)',
  clientSrc: 'src/client/**/*.js?(x)',
  clientEntryPoint: 'src/client/App.jsx',
  clientBundle: 'dist/client-bundle.js?(.map)',
  clientCss: 'dist/css/**/.css',
  webpackFile: 'webpack.config.babel.js',
  gulpFile: 'gulpfile.js',
  libDir: 'lib',
  libsDir: 'libs',
  distDir: 'dist',
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
  // Create array of paths using this format: 'dist/{dir}/{src}'
  ...Object.keys(libs).map(lib => [paths.distDir, paths.libsDir, lib.dir].join('/')),
])});

// Building task taking care of transpiling the sources
gulp.task('build', ['check', 'clean'], () =>
  gulp.src(paths.allSrcJs)
    .pipe(babel())
    .pipe(gulp.dest(paths.libDir))
);

// Bundling in webpack task
gulp.task('main', ['build'], () =>
  gulp.src(paths.clientEntryPoint)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(paths.distDir))
);

// Copy libs into dist
gulp.task('copylibs', () => {
  // Create array of paths using this format: 'libs/{dir}/{src}'
  const files = Object.keys(libs).reduce((arr, lib) => (
    arr.concat(libs[lib].src.map(src => [paths.libsDir, libs[lib].dir, src].join('/')))
  ), []);
  console.log(files[0].substring(0, files[0].lastIndexOf('/')));
  return files.map(file => gulp.src(file)
    .pipe(gulp.dest([paths.distDir, file.substring(0, file.lastIndexOf('/'))].join('/')))
  );
});

// Watching change in the repository
gulp.task('watch', () =>
  gulp.watch(paths.allSrcJs, ['main'])
);

gulp.task('default', ['watch', 'main', 'copylibs']);
