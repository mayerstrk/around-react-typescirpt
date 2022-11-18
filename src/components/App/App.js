import React, { useState, useEffect } from "react";
import Page from "../Page/Page";
import aroundClient from "../../utils/aroundClient";
import EditProfilePopup from "../EditProfilePopup/EditProfilePopup";
import ImagePopup from "../ImagePopup/ImagePopup";
import DeleteCardPopup from "../DeleteCardPopup/DeleteCardPopup";
import EditAvatarPopup from "../EditAvatarPopup/EditAvatarPopup";
import AddCardPopup from "../AddCardPopup/AddCardPopup";

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [isEditProfileOpen, setIsEditProfilePopupOpen] = useState(false);

  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false);

  const [isAvatarPopupOpen, setIsAvatarPopupOpen] = useState(false);

  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = useState(false)
 
  useEffect(() => {
    aroundClient.fetchData().then(([userInfo, initialCards]) => {
      setUserInfo(userInfo);
      setCards(initialCards);
    });
    // TODO: onApiCatch
  }, []);

  const onEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const onEditAvatarClick = () => {
    setIsAvatarPopupOpen(true);
  };

  const onAddCardClick = () => {
    setIsAddCardPopupOpen(true)
    console.log(isAddCardPopupOpen)
  }

  const onClose = (setter) => {
    setter(false);
  };

  const onCardClick = (card) => {
    setSelectedCard({
      name: card.name,
      link: card.link,
    });
    setIsImagePopupOpen(true);
  };

  const onEditProfileSubmit = (e, { name, about }) => {
    e.preventDefault();
    setIsLoading(true);
    aroundClient
      .updateProfile({ name: name, about: about })
      .then((userInfo) => {
        setUserInfo(userInfo);
        setIsEditProfilePopupOpen(false);
      })
      .finally(setIsLoading(false));
  };

  const onEditAvatarSubmit = (e, avatarUrl) => {
    e.preventDefault();
    setIsLoading(true);
    aroundClient
      .updateAvatar(avatarUrl )
      .then((userInfo) => {
        setUserInfo(userInfo);
        setIsAvatarPopupOpen(false);
      })
      //TODO catch
      .finally(() => {
        setIsLoading(false);
      });
  };
  
  const onAddCardSubmit = (e, card) => {
    e.preventDefault();
    setIsLoading(true)
    aroundClient
      .postNewCard(card)
      .then((card) => {
        setCards([...cards, card])
      })
      .finally(() => setIsLoading(false))

  }
  const onDeleteButtonClick = (card) => {
    setSelectedCard(card);
    console.log(selectedCard);
    setIsDeleteCardPopupOpen(true);
  };

  const onDeleteCardSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    aroundClient
      .deleteCard(selectedCard._id)
      .then(() => {
        const newCards = cards.filter(
          (current) => current._id !== selectedCard._id
        );
        setCards(newCards);
        onClose(setIsDeleteCardPopupOpen);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="app">
      <Page
        onEditProfileClick={onEditProfileClick}
        onEditAvatarClick={onEditAvatarClick}
        onAddCardClick={onAddCardClick}
        userInfo={userInfo}
        cards={cards}
        onCardClick={onCardClick}
        onDeleteButtonClick={onDeleteButtonClick}
      />
      <EditProfilePopup
        isLoading={isLoading}
        isOpen={isEditProfileOpen}
        onClose={() => onClose(setIsEditProfilePopupOpen)}
        onSubmit={onEditProfileSubmit}
      />
      <ImagePopup
        isOpen={isImagePopupOpen}
        selectedCard={selectedCard}
        onClose={() => onClose(setIsImagePopupOpen)}
      />
      <DeleteCardPopup
        isOpen={isDeleteCardPopupOpen}
        isLoading={isLoading}
        onClose={() => onClose(setIsDeleteCardPopupOpen)}
        onSubmit={onDeleteCardSubmit}
      />
      <EditAvatarPopup
        isOpen={isAvatarPopupOpen}
        isLoading={isLoading}
        onClose={() => onClose(setIsAvatarPopupOpen)}
        onSubmit={onEditAvatarSubmit}
      />
      <AddCardPopup 
        isOpen={isAddCardPopupOpen}
        isLoading={isLoading}
        onClose={() => onClose(setIsAddCardPopupOpen)}
        onSubmit={onAddCardSubmit}
      />
    </div>
  );
}

export default App;
