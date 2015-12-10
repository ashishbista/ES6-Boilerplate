This is a complete Gulp-Browserify-Babel-Jest-ES6 BoilerPlate with Sass plugged in and ES Linter added.

#### GET STARTED

```sh
  git clone git@github.com:RohitRox/ES6-Boilerplate.git
  cd ES6-Boilerplate
  npm install
  npm install -g gulp
  npm install -g jest-cli
```

```sh
  gulp
  # defaults to watch task
  # refer ./Gulpfile.js
  # compile and bundles all js files ./src/javascripts/ dir and all scss files in ./src/stylesheets/ folder
  # outputs js to ./build/javascrips/application.js
  # outputs css to ./build/javascripts/application.css
  # watches for file changes
  # automatically re-builds
```

```sh
  gulp build
  # compile and bundles all js files ./src/javascripts/ dir and all scss files in ./src/stylesheets/ folder
  # outputs js to ./build/javascrips/application.js
  # outputs css to ./build/javascripts/application.css
  # exits when done
```

```sh
  gulp lint
  # runs linter
  # linter uses Airbnb JavaScript Style Guide
  # https://github.com/airbnb/javascript
  # https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
```

```sh
  jest
  # runs tests in ./specs/folder
  # https://facebook.github.io/jest/
```

```sh
  gulp serve
  # runs a server at port 3000 (by default, can be changed https://www.npmjs.com/package/gulp-serve)
  # alternatively the build can be accessed using ./build/index.html
```

