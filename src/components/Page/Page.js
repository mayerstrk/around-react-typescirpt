import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function Page({ onEditProfileClick, onEditAvatarClick, onAddCardClick, userInfo, cards, onCardClick, onDeleteButtonClick }) {
  return (
    <div className="page">
      <Header />
      <Main
        onEditProfileClick={onEditProfileClick}
        onEditAvatarClick={onEditAvatarClick}
        onAddCardClick={onAddCardClick}
        userInfo={userInfo}
        cards={cards}
        onCardClick={onCardClick}
        onDeleteButtonClick={onDeleteButtonClick}
      />
      <Footer />
    </div>
  );
}

export default Page;
