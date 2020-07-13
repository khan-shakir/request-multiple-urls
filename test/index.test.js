const requestMultipleUrls = require('../src/request-multiple-urls');
const assert = require('assert');

const urls = [
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
];


it('should return OK for success responses', async () => {
  const results = await requestMultipleUrls(urls);
  
  results.map((result) => {
    assert.equal(result.status, 'OK');
  })
  
});
