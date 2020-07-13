Request Multiple Urls
=========

Fetches an array of URLs containing JSON data and returns their contents in a promise

## Installation
Run the the below command in the terminal
```
npm install

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

```node-fetch ``` makes use of minimal code for a window.fetch compatible API on Node.js runtime. It uses native Node streams for body, on both request and response. Also, it uses native promise, but allow substituting it with [insert your favorite promise library].
