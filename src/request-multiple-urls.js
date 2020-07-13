const fetch = require("node-fetch");

const checkStatus = (res) => {
  if (res.status === 200) return Promise.resolve(res);
  return Promise.reject(new Error(res.statusText));
}

const parseResponse = (res) => {
  return {
    status: res.statusText,
    statusCode: res.status,
    url: res.url,
    body: res.json()
  };
}

const requestMultipleUrls = (urls) => {
  return Promise.all(
    urls.map(url =>
      fetch(url)
        .then(checkStatus)
        .then(parseResponse)
        .catch(error => { console.log(`Error occurred: ${error}`); })
    )
  );
};

module.exports = requestMultipleUrls;


