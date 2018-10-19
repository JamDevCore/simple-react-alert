# simple-react-alert

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

simple-react-alert is an easy to use alert system for react.

To use this package, import the Alert component to the top level of your app, then import and call the openAlert() function from anywhere in the app. For instance, you could trigger the alert after an api call returns, or after submitting a form.

The openAlert function takes three different parameters:

````
  openAlert({ message, type, duration })
````

The message type is the string to be rendered in the alert box.

The default duration is 2500ms but can be overwritten here.

The types are listed below and change the colour and icon of the alert box.

## Types
- type: 'success'
- type: 'warning'
- type: 'info'
- type: 'danger'

You can also update the colours of the different types of alert by adding your own custom choice to the top level <Alert /> component.

## Change colour

 You can edit the colours by using the following props:

 - successColor
 - warningColor
 - infoColor
 - dangerColor

````
<Alert successColor: '#ffffff' />
````

 This property accept hex colors, and will default back to the original if presented with an incorrect value type;

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
