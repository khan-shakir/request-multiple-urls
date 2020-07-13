Request Multiple Urls
=========

Fetches an array of URLs containing JSON data and returns their contents in a promise

## Installation Steps
Run the the below command in the terminal
```
1: npm install     //To install the dependencies
2: npm start

```

## Example Usage

    const requestMultipleUrls = require('request-multiple-urls');

    const urls = [
        'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
        'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
        'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
    ];

    requestMultipleUrls(urls).then(urlContent => {
        ...
    });

## Tests

  `npm test`


## Dependencies

### node-fetch

```node-fetch ``` Instead of implementing XMLHttpRequest in Node.js to run browser-specific Fetch polyfill, why not go from native http to fetch API directly? Hence node-fetch, makes use of minimal code for a window.fetch compatible API on Node.js runtime. It uses native Node streams for body, on both request and response. Also, it uses native promise, but allow substituting it with [insert your favorite promise library].
