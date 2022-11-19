import addButton from './Profile__images/__add-button.svg'

function Profile({userInfo, onEditProfileClick, onEditAvatarClick, onAddCardClick}) {
  return (
    <section className="profile">
      <div className="profile__avatar-container" onClick={onEditAvatarClick}>
        <img
          src={userInfo.avatar}
          alt="Profile picture"
          className="profile__avatar"
        />
      </div>
      <div className="profile__info">
        <div className="profile__name-container">
          <h1 className="profile__name">{userInfo.name}</h1>
          <button
            type="button"
            className="profile__edit-button"
            onClick={onEditProfileClick}
          ></button>
        </div>
        <p className="profile__about">{userInfo.about}</p>
      </div>
      <button type="button" className="profile__add-button" onClick={onAddCardClick}>
        <img
          src={addButton}
          alt="add button"
          className="profile__add-plus-sign"
        />
      </button>
    </section>
  );
}

export default Profile;