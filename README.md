# simple-react-alert

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

simple-react-alert is an easy to use alert system for react.

https://www.npmjs.com/package/simple-react-alert

To install run

````
npm i simple-react-alert
````

To use this package, import the Alert component to the top level of your application, then import and call the openAlert() function from anywhere in the app. For instance, you could trigger the alert after an api call returns, after submitting a form, or when clicking a button.

The openAlert function takes three different parameters:

````
  openAlert({ message, type, duration })
````

The message type is the string of text to be rendered in the alert box, shown to your users

The default duration of an alert is 2500ms but can be overwritten with each different alert, allowing you to show alerts with lengthier messages for longer or short ones for less.

The types of alert you can use are listed below. The type changes the colour and the icon of the alert box. Default colours match the style of the alert box, e.g red for danger.

## Types

- type: 'success'
- type: 'warning'
- type: 'info'
- type: 'danger'

````
openAlert({ message: 'Your changes have succesfully saved', type: 'success' });
````

You can also update the colours for the different types of alert to match your own color scheme by adding your own custom choice to the top level <Alert /> component.

## Change colour

 You can edit the colours by using the following props:

 - successColor
 - warningColor
 - infoColor
 - dangerColor

````
<Alert successColor: '#ffffff' />
````

 This property accepts hex colors, and will default back to the original if presented with an incorrect value type;

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
