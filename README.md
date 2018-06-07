# Spotifi wrapper

[![Build Status](https://travis-ci.org/rangelvarnier/api-spotify-wrapper.svg?branch=master)](https://travis-ci.org/rangelvarnier/api-spotify-wrapper)

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

This is a Spotifi wrapper. [Spotify Web API](https://developer.spotify.com/web-api/).


## Browser Support

This library relies on [Fetch API](https://fetch.spec.whatwg.org/). And this API is supported in the following browsers.

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
--- | --- | --- | --- | --- |
39+ ✔ | 42+ ✔ | 29+ ✔ | 10.1+ ✔ | Nope ✘ |

## This project provides the following settings:
* To **test** all JavaScript code: [Jest](https://facebook.github.io/jest/)
* To **style** all JavaScript code: [Standard](https://standardjs.com)
* To **monitor** for **any changes** in your application: [Nodemon](http://nodemon.io/)
* To git hooks made easy: [Husky](https://github.com/typicode/husky)


## Dependencies

This library depends on [fetch](https://fetch.spec.whatwg.org/) to make requests to the Spotify Web API. For environments that don't support fetch, you'll need to provide a [polyfill](https://github.com/github/fetch) to browser or [polyfill](https://github.com/bitinn/node-fetch) to Node.

```
$ npm i spotify-wrapper
```

### Installing

A step by step series of examples that tell you have to get a development env running

Run the following command in Terminal:

```
$ npm install
```

## Running the tests

The unit tests were built with support from the [Jest](https://facebook.github.io/jest/) framework

### Break down into end to end tests

Easily run the unit test

```
$ npm test
```

Run live tests

```
$ npm run watch
```

### And coverage tests

```
$ npm run coverage
```

## Deployment

Add additional notes about how to deploy this on a live system

## Contributing

Please read [CONTRIBUTING.md]() for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository]().

## Authors

* **Rangel Varnier** - _Software Engineer_ - [Rangel Varnier](https://github.com/rangelvarnier)

See also the list of [contributors](/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
