import gulp from 'gulp';
import gutil from 'gulp-util';
import babel from 'gulp-babel';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import del from 'del';
import flow from 'gulp-flowtype';
import webpack from 'webpack';
// import webpack from 'webpack-stream';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config.babel';

const paths = {
  allSrcJs: 'src/**/*.js?(x)',
  allSrcSass: 'sass/**/*.scss',
  clientSrc: 'src/client/**/*.js?(x)',
  clientEntryPoint: 'src/client/App.jsx',
  clientBundle: 'client-bundle.js?(.map)',
  webpackFile: 'webpack.config.babel.js',
  gulpFile: 'gulpfile.js',
  libDir: 'lib',
  libsDir: 'libs',
  cssDir: 'css',
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
  paths.cssDir,
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
    .pipe(gulp.dest(paths.cssDir))
);

// Bundle into webpack and launch server
gulp.task('webpack-server-dev', ['build', 'sass'], () => {
  var devConfig = Object.create(webpackConfig);
	devConfig.devtool = 'eval';
	devConfig.debug = true;

  new WebpackDevServer(webpack(devConfig), {
    publicPath: `${webpackConfig.output.publicPath}`,
    stats: {
      colors: true
    }
  }).listen(1337, 'localhost', (err) => {
    if (err) {
      throw new gutil.PluginError("webpack-dev-server", err);
    }

    gutil.log('[webpack-dev-server]', 'http://localhost:1337/#/');
  });
});

gulp.task('default', ['webpack-server-dev']);
