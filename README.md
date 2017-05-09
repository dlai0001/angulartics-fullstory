## angulartics-fullstory


FullStory plugin for [Angulartics](https://github.com/angulartics/angulartics).

## Install

First make sure you've read installation and setup instructions for [Angulartics](https://github.com/angulartics/angulartics#install).

Then you can install this package either with `npm` or with `bower`.

### npm

```shell
npm install angulartics-fullstory
```

Then set `window.FULLSTORY_ORG_CONFIG` to your full story ORG id before the app is instantiated.

Then add `angulartics.fullstory` as a dependency for your app:

```javascript
require('angulartics')

angular.module('myApp', [
  'angulartics',
  require('angulartics-fullstory')
]);
```


## Documentation

Documentation is available on the [Angulartics site](http://angulartics.github.io/).

## Development

```shell
npm run build
```

## License

[MIT](LICENSE)


[npm-url]: https://npmjs.org/package/angulartics-fullstory

[npm-downloads-url]: https://npmjs.org/package/angulartics-fullstory
[bower-image]: https://img.shields.io/bower/v/angulartics-mixpanel.svg
[license-image]: http://img.shields.io/badge/license-MIT-blue.svg
[license-url]: LICENSE