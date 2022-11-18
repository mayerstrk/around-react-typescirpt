class Api {
  constructor({ baseUrl, baseHeaders }) {
    this._baseUrl = baseUrl;
    this._baseHeaders = baseHeaders;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    const err = res;
    return res
      .json()
      .then((errJson) =>
        Promise.reject(
          `(Error ${err.status} - ${err.statusText}) ${errJson.name} - ${errJson.message}`
        )
      );
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }
}

export default Api;