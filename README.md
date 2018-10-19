# simple-react-alert

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

simple-alert-react is designed to be a really easy to use alert system for react.

Just import the Alert component to the top level of your app, then import and call the openAlert() function from anywhere in the app, just add a message by using the message prop and choose a type.

# Types
- type: 'success'
- type: 'warning'
- type: 'info'
- type: 'danger'

You can update the colours to your own custom choice by using the following

# Change colour

 You can also edit the colours by using the following props:

 - successColor
 - warningColor
 - infoColor
 - dangerColor

 These props accept hex colors, and will default back to the original if presented with an incorrect value type;

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
