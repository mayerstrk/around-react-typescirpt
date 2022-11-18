import Api from "./Api";

class AroundClient extends Api {
  constructor({ baseUrl, baseHeaders }) {
    super({ baseUrl, baseHeaders });
  }

  deleteLike(cardId) {
    return this._request(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this._baseHeaders,
    });
  }

  deleteCard(cardId) {
    return this._request(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._baseHeaders,
    });
  }

  /**
   *
   * @param {string} avatarUrl
   * @returns {object} {name, about, avatar, _id , cohort}
   */
  updateAvatar(avatarUrl) {
    return this._request(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._baseHeaders,
      body: JSON.stringify({ avatar: avatarUrl }),
    });
  }
  /**
   * 
   * @param {object} user name and about properties
   * @returns {object} user
   */
  updateProfile({ name, about }) {
    return this._request(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._baseHeaders,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    });
  }

  addLike(cardId) {
    return this._request(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: this._baseHeaders,
    });
  }

  postNewCard({ name, link }) {
    return this._request(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._baseHeaders,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    });
  }

  getCards() {
    return this._request(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._baseHeaders,
    });
  }

  fetchUserInfo() {
    return this._request(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._baseHeaders,
    });
  }

  fetchData() {
    return Promise.all([this.fetchUserInfo(), this.getCards()]);
  }
}

const aroundClient = new AroundClient({
  baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en",
  baseHeaders: {
    authorization: "0025f74a-7d55-4e26-bbb6-faf6f78aefcc",
    "Content-Type": "application/json",
  },
});

export default aroundClient;