import React from "react";
import Profile from "../Profile/Profile";
import Places from "../Places/Places";

function Main({onEditProfileClick, onEditAvatarClick, onAddCardClick, userInfo, cards, onCardClick, onDeleteButtonClick}) {
  return (
    <div className="main">
      <Profile
        onEditProfileClick={onEditProfileClick}
        onEditAvatarClick={onEditAvatarClick}
        onAddCardClick={onAddCardClick}
        userInfo={userInfo}
      />
      <Places
        cards={cards}
        userId={userInfo._id}
        onCardClick={onCardClick}
        onDeleteButtonClick={onDeleteButtonClick}
      />
    </div>
  );
}

export default Main;
